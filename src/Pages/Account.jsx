import { useSelector } from 'react-redux';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import {  useState } from 'react';
import EditCompany from './EditCompany';
import EditUserName from './EditUserName';

function Account() {
  
  const user = useSelector((state) => state.user.user);
  const [form, setForm] = useState(false);
  const [name, setName] = useState(false);

  function formHandler() {
    setForm((form) => !form);
  }
  function nameHandler() {
    setName((name) => !name);
  }

  if (name) {
    return <EditUserName toggleForm={nameHandler} />;
  }

  if (form) {
    return <EditCompany toggleForm={formHandler} formToEdit={user} />;
  }

  //   const { firstName, lastName, companyName = '_' } = final?.user;

  return (
    <div className="px-4">
      <p className="pt-8  text-center font-semibold capitalize tracking-wider ">
        {user ? `welcome ${user.firstName}` : 'welcome'}{' '}
      </p>
      <div className=" text-md mt-6 space-y-4 bg-slate-100  px-8 py-6 font-medium">
        <div className="flex gap-2">
          <p>
            UserName: {user?.firstName} {user?.lastName}
          </p>
          <button onClick={nameHandler}>
            <HiOutlinePencilSquare className="h-5 w-5 text-blue-700" />
          </button>
        </div>
        <div className="flex gap-2">
          <p>CompanyName: {user.companyName ? `${user.companyName}` : '_'}</p>

          <button onClick={formHandler}>
            <HiOutlinePencilSquare className="h-5 w-5 text-blue-700" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
