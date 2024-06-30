import { decode } from 'html-entities';
import AddSalesForm from './AddSalesForm';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

function SalesRow({ sales }) {
  const [form, setForm] = useState(false);
  const queryClient = useQueryClient();

  const {
    itemName,
    quantity,
    sellingDate,
    customerName,
    amountPaid,
    sellingPrice,
    itemcode,
    remainingBalance,
    totalAmount,
    _id,
  } = sales;
  const indianRubee = decode('&#x20B9');
  const { isLoading,mutate } = useMutation(
    (id) =>
      axios
        .delete(
          `https://bill-backend-2deo.onrender.com/api/deletesales/${id}`,
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
        queryClient.invalidateQueries({ queryKey: ['sales'] });
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
    return <AddSalesForm toggleForm={handleForm} FormToEdit={sales} />;
  }

  return (
    <tr className="cursor-pointer border-b bg-white font-medium capitalize duration-300 hover:bg-blue-100 ">
      <th scope="row" className="whitespace-nowrap  px-6 py-4 font-medium">
        {itemName}
      </th>
      <td className="px-6 py-4">{itemcode}</td>
      <td className="px-6 py-4">{quantity}</td>
      <td className="px-8 py-4">
        {indianRubee}
        {sellingPrice}
      </td>
      <td className="px-6 py-4">{sellingDate}</td>
      <td className="px-6 py-4">{customerName}</td>
      <td className="px-6 py-4">
        {indianRubee}
        {totalAmount}
      </td>
      <td className="px-6 py-4">
        {indianRubee}
        {amountPaid}
      </td>
      <td className="px-6 py-4">
        {indianRubee}
        {remainingBalance}
      </td>
      <td className="px-6 py-4 text-right">
        <button
          onClick={handleForm}
          className="mr-2 font-medium text-blue-700 hover:underline "
        >
          Edit
        </button>
        <button
          onClick={() => mutate(_id)} disabled={isLoading}
          className="font-medium text-red-600 hover:underline disabled:text-red-300 "
        >
          {isLoading ? `Deleteing...` : 'Delete'}
          
        </button>
      </td>
    </tr>
  );
}

export default SalesRow;
