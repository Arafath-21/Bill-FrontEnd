import { useState } from 'react';
import CustomerForm from './CustomerForm';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function CustomerRow({ customer }) {
  const { customerName, address, companyName, contactNumber, _id } = customer;
  const [form, setForm] = useState(false);

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(
    (id) =>
      axios
        .delete(
          `https://bill-backend-2deo.onrender.com/api/deletecustomer/${id}`,
          {
            headers: {
              'x-auth-token': localStorage.getItem('token'),
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
      },
      onError: (error) => {
        toast.error('Unable to Delete');
      },
    }
  );

  function handleForm() {
    setForm((form) => !form);
  }
  if (form) {
    return <CustomerForm toggleForm={handleForm} FormToEdit={customer} />;
  }

  return (
    <tr className=" cursor-pointer border-b bg-white font-medium capitalize duration-300 hover:bg-blue-100 ">
      <th scope="row" className="whitespace-nowrap  px-6 py-4 font-medium">
        {customerName}
      </th>
      <td className="px-6 py-4">{contactNumber}</td>
      <td className="px-6 py-4">{companyName}</td>
      <td className="px-6 py-4">{address}</td>
      <td className="px-6 py-4 text-right">
        <button
          onClick={handleForm}
          className="mr-2 font-medium text-blue-700 hover:underline "
        >
          Edit
        </button>
        <button
          onClick={() => mutate(_id)}
          disabled={isLoading}
          className="font-medium text-red-600 hover:underline disabled:text-red-300"
        >
          {isLoading ? `Deleteing...` : 'Delete'}
        </button>
      </td>
    </tr>
  );
}

export default CustomerRow;
