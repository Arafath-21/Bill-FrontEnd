import { useState } from 'react';
import { HiMiniPlusCircle } from 'react-icons/hi2';
import CustomerForm from './CustomerForm';

function AddCustomers() {
  const [customerForm, setCustomerForm] = useState(false);
  function addCustomer() {
    setCustomerForm(!customerForm);
  }

  if (customerForm) {
    return <CustomerForm toggleForm={addCustomer} />;
  }
  return (
    <div className="relative text-slate-100  ">
      <div>
        <button
          onClick={addCustomer}
          className="mx-auto flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-3 py-2 duration-300 hover:scale-105"
        >
          <HiMiniPlusCircle className="h-6 w-6" />
          <span>Add Customer</span>
        </button>
      </div>
    </div>
  );
}

export default AddCustomers;
