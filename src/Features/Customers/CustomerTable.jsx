import AddCustomers from './AddCustomers';
import CustomerList from './CustomerList';

function CustomerTable() {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="relative border-b-2 border-blue-700 px-6 py-4 mb-3 flex items-center justify-between">
        <h3 className="text-md  py-4 font-semibold tracking-wide">Customers</h3>
        <AddCustomers />
      </div>
      <CustomerList />
    </div>
  );
}

export default CustomerTable;
