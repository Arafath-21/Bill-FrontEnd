import { Link, useNavigate } from 'react-router-dom';
import Button from '../../Ui/Button';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import LoadingSpinner from '../../Ui/Spinner';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Ui/userSlice';

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate, isLoading } = useMutation(
    (user) =>
      axios
        .post('https://bill-backend-2deo.onrender.com/api/signup', user)
        .catch((error) => {
          throw error;
        }),

    {
      onSuccess: (data) => {
        toast.success('New User Created Successfully');
        const token = data.data.token;
        localStorage.setItem('token', token);
        reset();
        dispatch(addUser(data.data.user));
        console.log('token set successfully');
        navigate('/dashboard');
      },
      onError: (error) => {
        if (error.response && error.response.status === 400) {
          toast.error('User Already Exists');
        } else {
          toast.error('Sigup  failed!');
        }
      },
    }
  );

  function onSubmit(data) {
    mutate(data);
    console.log(data);
  }

  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="mx-auto rounded-lg bg-gray-300 px-1 py-2 shadow-xl md:px-0 md:py-3">
      <h1 className="text-center">Signup</h1>
      <div className="px-2 py-4 md:px-6 lg:px-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* FirstName Field */}
          <div>
            <label htmlFor="firstName" id="firstName" className="block ">
              FirstName
            </label>
            <input
              {...register('firstName', {
                required: true,
              })}
              className="int "
              placeholder="jhon"
            />
            {errors?.firstName?.type === 'required' && (
              <p className="mb-1  rounded-lg bg-red-100 p-1 text-red-500">
                * This Field Is Required
              </p>
            )}
          </div>
          {/* LastName field */}
          <div>
            <label htmlFor="lastName" id="lastName" className="block ">
              LastName
            </label>
            <input
              {...register('lastName', {
                required: true,
              })}
              className="int"
              placeholder="doe"
            />
            {errors?.lastName?.type === 'required' && (
              <p className="mb-1  rounded-lg bg-red-100 p-1 text-red-500">
                * This Field Is Required
              </p>
            )}
          </div>
          {/* Company name field */}
          <div>
            <label htmlFor="companyName" id="companyName" className="block ">
              Company Name
            </label>
            <input
              {...register('companyName')}
              className="int"
              placeholder="Company"
              id="companyName"
            />
            {errors?.lastName?.type === 'required' && (
              <p className="mb-1  rounded-lg bg-red-100 p-1 text-red-500">
                * This Field Is Required
              </p>
            )}
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email" id="email" className="block ">
              Email
            </label>
            <input
              {...register('email', {
                required: '* Email is required',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email',
                },
              })}
              placeholder="user@mail.com"
              className="int"
            />
            {errors?.email?.message && (
              <p className="mb-1  rounded-lg bg-red-100 p-1 text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* Password Field */}
          <div>
            <label htmlFor="password" id="password" className="block ">
              Password
            </label>
            <input
              {...register('password', {
                required: true,
              })}
              placeholder="Enter your Password"
              className="int"
            />
            {errors?.password?.type === 'required' && (
              <p className="mb-1  rounded-lg bg-red-100 p-1 text-red-500">
                * Password is required
              </p>
            )}
          </div>

          <div className="mt-4 flex items-center justify-center">
            <Button type="primary" action="submit" disabled={false}>
              Signup
            </Button>
            {/* <button type='submit'>login</button> */}
          </div>
        </form>

        <div className="mt-2 text-center">
          <Link to="/login">
            <span>Already Have An Account?</span>{' '}
            <span className="text-blue-700">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
