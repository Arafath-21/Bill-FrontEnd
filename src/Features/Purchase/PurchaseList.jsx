import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../Ui/Spinner';
import { useDispatch } from 'react-redux';
import PurchaseRow from './PurchaseRow';
import { getPurchase } from '../../services/purchase';
import { addPurchase } from './purchaseSlice';
import EmptyPanelInfo from '../../Ui/EmptyPanelInfo';
function PurchaseList() {
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery({
    queryKey: ['purchase'],
    queryFn: getPurchase,
  });

  if (data?.data.purchase.length === 0) {
    return <EmptyPanelInfo title="purchase" />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (data) {
    const purchase = data.data.purchase;
    dispatch(addPurchase(purchase));

    return (
      <div className=" overflow-x-auto rounded-lg ">
        <table className="w-full text-left text-sm text-gray-800 ">
          <thead className="bg-gray-300 text-xs uppercase ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Item name
              </th>
              <th scope="col" className="px-6 py-3">
                item code
              </th>
              <th scope="col" className="px-6 py-3">
                Buying Date
              </th>
              <th scope="col" className="px-6 py-3">
                quantity
              </th>
              <th scope="col" className="px-6 py-3">
                buying price
              </th>
              <th scope="col" className="px-6 py-3">
                total amount
              </th>
              <th scope="col" className="px-6 py-3">
                contact
              </th>
              <th scope="col" className="px-6 py-3">
                manufacturer
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {purchase.map((purchase, index) => (
              <PurchaseRow purchase={purchase} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PurchaseList;
