import { useQuery } from '@tanstack/react-query';
import ItemsRow from './ItemsRow';
import { getItems } from '../../services/items';
import LoadingSpinner from '../../Ui/Spinner';
import { useDispatch } from 'react-redux';
import { addItem } from './itemSlice';
import EmptyPanelInfo from '../../Ui/EmptyPanelInfo';
function ItemList() {
    const dispatch=useDispatch()
  const { data, isLoading } = useQuery({
    queryKey: ['items'],
    queryFn: getItems,
  });

  if ( data?.data.items.length === 0) {
    return (
     <EmptyPanelInfo title="items"/>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (data) {
    const items = data.data.items;
   dispatch(addItem(items))

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
                quantity
              </th>
              <th scope="col" className="px-6 py-3">
                buying price
              </th>
              <th scope="col" className="px-6 py-3">
                selling price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((items, index) => (
              <ItemsRow items={items} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ItemList;
