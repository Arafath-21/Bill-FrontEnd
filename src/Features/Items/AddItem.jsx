import { useState } from 'react';
import { HiMiniPlusCircle } from 'react-icons/hi2';
import AddItemForm from './AddItemForm';
function AddItem() {
  const[form,setForm]=useState(false)
  function handleForm() {
    setForm(!form)
  }

  if(form){
    return(
      <AddItemForm toggleForm={handleForm}/>
    )
  }
  return (
    <div className=" text-slate-100 w-48 self-center ">
        <button
          onClick={handleForm}
          className=" mx-auto flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-3 py-2 duration-300 hover:scale-105"
        >
          <HiMiniPlusCircle className="h-6 w-6" />
          <span>Add Item</span>
        </button>
   
    </div>
  );
}

export default AddItem;
