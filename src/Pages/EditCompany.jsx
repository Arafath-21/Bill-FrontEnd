import { HiXMark } from 'react-icons/hi2';
import Button from '../Ui/Button';
import { useForm } from 'react-hook-form';
import { useMutation} from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function EditCompany({ toggleForm }, formToEdit = {}) {
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
        .post('http://localhost:9000/api/addcompanyname', data, {
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
        toast.success(data.data.message);
        toggleForm();
      },
      onError: (error) => {
        toast.error('Cannot update companyName');
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
        <h3 className="mx-3 my-6 font-medium capitalize">Company details</h3>
        <div className="grid  grid-cols-2 gap-y-6 px-6">
          <input
            className="int justify-self-center"
            {...register('companyName')}
            placeholder="companyName"
            type="text"
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

export default EditCompany;
