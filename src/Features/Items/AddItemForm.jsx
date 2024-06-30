import { useForm } from 'react-hook-form';
import Button from '../../Ui/Button';
import { HiXMark } from 'react-icons/hi2';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import LoadingSpinner from '../../Ui/Spinner';

// form component
function AddItemForm({ toggleForm, FormToEdit={} }) {
  const { _id: editid, ...editValues } = FormToEdit;
  const isEditSession = Boolean(editid);
  const { register, handleSubmit } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const token = localStorage.getItem('token');

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (data) =>
      axios
        .post('https://bill-backend-2deo.onrender.com/api/additem', data, {
          headers: {
            'x-auth-token': token,
          },
        })
        .catch((error) => {
          throw error;
        }),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['items'] });
        toast.success(data.data.message);
        toggleForm();
      },
      onError: (error) => {
        toast.error('Item Already Exsists');
      },
    }
  );

  // Edit Session
  const { mutate: edit, isLoading: editLoading } = useMutation(
    (data) =>
      axios
        .put(`https://bill-backend-2deo.onrender.com/api/edititem/${editid}`, data, {
          headers: {
            'x-auth-token': token,
          },
        })
        .catch((error) => {
          throw error;
        }),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['items'] });
        toast.success(data.data.message);
        toggleForm();
      },
      onError: (error) => {
        toast.error('Unable To Edit Items');
      },
    }
  );

  function onValid(data) {
    if (isEditSession) {
      edit(data);
    } else {
      mutate(data);
    }
  }
  if (isLoading || editLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full max-w-[71rem] bg-slate-200">
      <button onClick={toggleForm} className="absolute right-10 top-11">
        <HiXMark className="h-8 w-8  rounded-full shadow-2xl" />
      </button>
      <form onSubmit={handleSubmit(onValid)}>
        <h3 className="mx-3 my-6 font-medium">Item Details</h3>
        <div className="grid  grid-cols-2 gap-y-6 px-6">
          <input
            className="int justify-self-center"
            {...register('itemName')}
            placeholder="ItemName"
            type="text"
            id="name"
          />
          <input
            className="int "
            placeholder="Quantity"
            type="number"
            id="quantity"
            {...register('quantity')}
          />
          <input
            className="int justify-self-center"
            placeholder="Item code"
            type="number"
            id="itemCode"
            {...register('itemcode')}
          />
          <input
            className="int"
            placeholder="Purchase Date"
            type="date"
            id="date"
            {...register('purchasedate')}
          />
        </div>

        <h3 className="mx-3 my-6 font-medium">Price</h3>
        <div className="grid  grid-cols-2 gap-y-6 px-6">
          <input
            className="int justify-self-center"
            placeholder="Sales Price"
            type="number"
            {...register('salesPrice')}
          />
          <input
            className="int"
            placeholder="Purchase Price"
            type="number"
            {...register('purchasePrice')}
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

export default AddItemForm;
