import { useForm } from 'react-hook-form';
import Button from '../Ui/Button';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../Ui/Spinner';

function ForgotPassword() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const { mutate, isLoading } = useMutation(
    (data) =>
      axios
        .post(
          'https://bill-backend-2deo.onrender.com/api/forgot-password',
          data
        )
        .catch((error) => {
          throw error;
        }),
    {
      onSuccess: (data) => {
        if (data.data.user === false) {
          toast.error('Entered Email Is Not Registered With Us');
        } else {
          toast.success('Link Send Successfully! Please Check Your Email');
          navigate('/login');
        }
      },
      onError: (error) => {
        toast.error('Unable To Process Your Request');
      },
    }
  );

  function handleForm(data) {
    mutate(data);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100  text-slate-700 ">
      <div className="rounded-lg  bg-slate-300 px-24  py-8 shadow-xl">
        <p className="mb-6 text-center font-semibold capitalize">
          Please Enter your registered email
        </p>
        <form onSubmit={handleSubmit(handleForm)}>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email',
              },
            })}
            className="int block"
          />
          {errors?.email && (
            <p className="mb-1  rounded-lg bg-red-100 p-1 text-red-500">
              *{errors.email.message}
            </p>
          )}
          <div className="mt-4 flex flex-col items-center justify-center">
            <Button type="primary" disabled={isLoading} action="submit">
              Get Link
            </Button>
            {isLoading && <LoadingSpinner />}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
