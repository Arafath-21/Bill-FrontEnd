import { Link, useNavigate } from 'react-router-dom';
import Button from '../../Ui/Button';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import LoadingSpinner from '../../Ui/Spinner';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Ui/userSlice';
import { useState } from 'react';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [demo, setDemo] = useState(false);

  // form Validation with useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Mutation function for Login request
  const { mutate, isLoading, isError } = useMutation(
    (user) =>
      axios
        .post('https://bill-backend-2deo.onrender.com/api/login', user)
        .catch((error) => {
          throw error;
        }),
    {
      onSuccess: (data) => {
        toast.success('Login successful!');
        const token = data.data.token;
        localStorage.setItem('token', token);
        dispatch(addUser(data.data.user));
        reset();
        navigate('/dashboard');
      },
      onError: (error) => {
        if (error.response && error.response.status === 400) {
          toast.error('Please Enter Valid Credentials!');
        } else {
          toast.error('Login  failed!');
        }
      },
    }
  );

  // Successive form submit
  function onSubmit(data) {
    mutate(data);
  }

  // Loading Spinner
  if (isLoading) {
    return <LoadingSpinner />;
  }
  // Error Return
  if (isError) {
    return <p>Something Went Wrong</p>;
  }

  return (
    <div className="mx-auto rounded-lg bg-gray-300 px-12 py-12 shadow-xl ">
      <h1 className="text-center">Login</h1>
      <div>
        <form className=" px-3 py-6 " onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email',
              },
            })}
            placeholder="user@mail.com"
            className="int "
          />
          <p className="mb-4">
            {errors?.email ? `${errors.email.message}` : ''}
          </p>
          <input
            {...register('password', {
              required: true,
              message: 'password is Required',
            })}
            placeholder="Enter your Password"
            className="int "
          />
          <p className="mb-4">
            {errors?.password?.type === 'required'
              ? `Password is Required`
              : ''}
          </p>

          <div className=" flex items-center justify-center">
            <Button type="primary" action="submit" disabled={isLoading}>
              Login
            </Button>
            {/* <button type='submit'>login</button> */}
          </div>
        </form>
        <div className="text-end text-blue-700">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <div className="mt-2 text-end text-blue-700">
          <button
            onClick={() => setDemo((prev) => !prev)}
            className="capitalize underline underline-offset-1 transition duration-1000 ease-out"
          >
            Are you looking for a demo account?
          </button>
          {demo && (
            <div className="mt-1 space-y-1 text-center text-slate-900 transition duration-1000 ease-out">
              <p>
                email:<span className="text-blue-600">demo1@email.com</span>
              </p>
              <p>
                password:<span className="text-blue-600">demo1</span>
              </p>
            </div>
          )}
        </div>
        <div className="mt-4 text-center">
          <Link to="/signup" className="">
            <span>Don't Have An Account?</span>{' '}
            <span className="text-blue-700">SignUp</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
