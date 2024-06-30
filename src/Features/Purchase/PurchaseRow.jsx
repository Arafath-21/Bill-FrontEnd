import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { decode } from 'html-entities';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import AddPurchaseForm from './AddPurchaseForm';

function PurchaseRow({ purchase }) {
  const {
    itemName,
    quantity,
    purchasePrice,
    contact,
    itemcode,
    manufacturer,
    totalAmount,
    purchaseDate,
    _id,
  } = purchase;
  const [form, setForm] = useState(false);

  const indianRubee = decode('&#x20B9');
  const queryClient = useQueryClient();

  const { mutate,isLoading } = useMutation(
    (id) =>
      axios
        .delete(
          `https://bill-backend-2deo.onrender.com/api/deletepurchase/${id}`,
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
        queryClient.invalidateQueries({ queryKey: ['purchase'] });
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
    return <AddPurchaseForm toggleForm={handleForm} FormToEdit={purchase} />;
  }
  return (
    <tr className="cursor-pointer border-b bg-white font-medium capitalize duration-300 hover:bg-blue-100 ">
      <th scope="row" className="whitespace-nowrap  px-6 py-4 font-medium">
        {itemName}
      </th>
      <td className="px-6 py-4">{itemcode}</td>
      <td className="px-6 py-4">{purchaseDate}</td>
      <td className="px-6 py-4">{quantity}</td>
      <td className="px-6 py-4">
        {indianRubee}
        {purchasePrice}
      </td>
      <td className="px-6 py-4">
        {indianRubee}
        {totalAmount}
      </td>
      <td className="px-6 py-4">{contact}</td>
      <td className="px-6 py-4">{manufacturer}</td>
      <td className="px-6 py-4 text-right">
        <button
          onClick={handleForm}
          className="mr-2 font-medium text-blue-700 hover:underline "
        >
          Edit
        </button>
        <button disabled={isLoading}
          onClick={() => mutate(_id)}
          className="font-medium text-red-600 hover:underline disabled:text-red-300"
        >
          {isLoading ? `Deleteing...` : 'Delete'}
          
        </button>
      </td>
    </tr>
  );
}

export default PurchaseRow;
