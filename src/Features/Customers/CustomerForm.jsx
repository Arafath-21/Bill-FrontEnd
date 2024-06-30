import { useForm } from 'react-hook-form';
import { HiXMark } from 'react-icons/hi2';
import Button from '../../Ui/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Spinner from '../../Ui/Spinner';

function CustomerForm({ toggleForm, FormToEdit = {} }) {
  const { _id: editid, ...editValues } = FormToEdit;
  const isEditSession = Boolean(editid);

  const { register, handleSubmit } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  function onValid(data) {
    if (isEditSession) {
      edit(data);
      console.log(data, 'edited');
    } else {
      mutate(data);
    }
  }

  const token = localStorage.getItem('token');

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (data) =>
      axios
        .post(
          'https://bill-backend-2deo.onrender.com/api/addcustomer',
          data,
          {
            headers: {
              'x-auth-token': token,
            },
          }
        )
        .catch((error) => {
          throw error;
        }),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['customers'] });
        toast.success(data.data.message);
        toggleForm();
      },
      onError: (error) => {
        toast.error('Unable To Add Customer');
      },
    }
  );
  // editsession
  const { mutate: edit, isLoading: editLoading } = useMutation(
    (data) =>
      axios
        .put(
          `https://bill-backend-2deo.onrender.com/api/editcustomer/${editid}`,
          data,
          {
            headers: {
              'x-auth-token': token,
            },
          }
        )
        .catch((error) => {
          throw error;
        }),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['customers'] });
        toast.success(data.data.message);
        toggleForm();
      },
      onError: (error) => {
        toast.error('Unable To Edit Customer');
      },
    }
  );

  if (isLoading || editLoading) {
    return <Spinner />;
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 min-h-screen  max-w-[71rem] bg-slate-200 ">
      <button onClick={toggleForm} className="absolute right-5 top-3">
        <HiXMark className="h-8 w-8  rounded-full shadow-2xl" />
      </button>
      <form onSubmit={handleSubmit(onValid)}>
        <h3 className="mx-3 my-6 font-medium">Customer Details</h3>
        <div className="grid  grid-cols-2 gap-y-6 px-6">
          <input
            className="int justify-self-center"
            {...register('customerName')}
            placeholder="customer Name"
            type="text"
            id="customerName"
          />
          <input
            className="int "
            placeholder="contact Number"
            type="number"
            id="contactNumber"
            {...register('contactNumber')}
          />
          <input
            className="int justify-self-center"
            placeholder=" company Name"
            type="text"
            id="companyName"
            {...register('companyName')}
          />
          <input
            className="int"
            placeholder="Address"
            type="text"
            id="adress"
            {...register('address')}
          />

          <div className="justify-self-center">
            <Button type="primary" action="submit" disabled={isLoading}>
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CustomerForm;
