import { HiXMark } from 'react-icons/hi2';
import Button from '../Ui/Button';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

function EditUserName({ toggleForm, formToEdit = {} }) {
  const { _id: editid, ...editValues } = formToEdit;
  const isEditSession = Boolean(editid);
  const { register, handleSubmit } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const token = localStorage.getItem('token');

  //   const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (data) =>
      axios
        .put('http://localhost:9000/api/editname', data, {
          headers: {
            'x-auth-token': token,
          },
        })
        .catch((error) => {
          throw error;
        }),
    {
      onSuccess: (data) => {
        //   queryClient.invalidateQueries({ queryKey: ['sales'] });
        toast.success(
          `${data.data.message} ${' '} please login again to see changes!`
        );
        toggleForm();
      },
      onError: (error) => {
        toast.error('Cannot update userName');
      },
    }
  );

  function onValid(data) {
    mutate(data);
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full max-w-[71rem] bg-slate-200">
      <button onClick={toggleForm} className="absolute right-10 top-11">
        <HiXMark className="h-8 w-8  rounded-full shadow-2xl" />
      </button>
      <form onSubmit={handleSubmit(onValid)}>
        <h3 className="mx-3 my-6 font-medium capitalize">User details</h3>
        <div className="grid  grid-cols-2 gap-y-6 px-6">
          <input
            className="int justify-self-center"
            {...register('firstName')}
            placeholder="firstName"
            type="text"
          />
          <input
            className="int justify-self-center"
            {...register('lastName')}
            placeholder="lastName"
            type="text"
          />

          <div className="justify-self-center">
            <Button type="primary" action="submit" disabled={isLoading}>
              {isLoading ? 'updating...' : 'Save'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditUserName;
