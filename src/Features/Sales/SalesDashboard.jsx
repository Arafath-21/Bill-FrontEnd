import {
    HiOutlineArchiveBoxArrowDown,
    HiOutlineCurrencyRupee,
    HiOutlineArrowTrendingUp
  } from 'react-icons/hi2';
  import {decode} from 'html-entities';
import AddSales from './AddSales';
import { useSelector } from 'react-redux';

function SalesDashboard() {

 const indianRubee=(decode('&#x20B9'));

    const data=useSelector(state=>state.sales.sales)
    const totalsales=data?.slice().reduce((sum,item)=>sum+Number(item.totalAmount),0)
    const amountReceived=data?.slice().reduce((sum,item)=>sum+Number(item.amountPaid),0)
    const pendingAmount=data?.slice().reduce((sum,item)=>sum+Number(item.remainingBalance),0)

    return (
        <div className="flex border-b-2 border-blue-700 gap-2  ">
        <div className="flex w-full justify-around px-2 py-3 text-center text-xs font-semibold capitalize tracking-wide">
          <div className="h-26 flex w-36 cursor-pointer flex-col items-center gap-1 rounded-md border-b-2 border-r-2 duration-300 hover:translate-x-1 hover:translate-y-1  border-blue-700 bg-slate-50 px-2 py-3 shadow-xl">
            {/* <p>product</p> */}
            <HiOutlineArrowTrendingUp className="h-8 w-8 text-blue-700" />
            <h5>Total sales</h5>
            <p>{totalsales ? `${indianRubee}${totalsales}` : '_'}</p>
          </div>
          <div className="h-26 flex w-36 cursor-pointer flex-col items-center gap-1 rounded-md border-b-2 border-r-2 duration-300 hover:translate-x-1 hover:translate-y-1  border-blue-700 bg-slate-50 px-2 py-3 shadow-xl">
            {/* <p>product</p> */}
            <HiOutlineArchiveBoxArrowDown className="h-8 w-8 text-blue-700" />
            <h5 className=""> amount received </h5>
            <p>{amountReceived ? `${indianRubee} ${amountReceived}` : '_'}</p>
          </div>
          <div className="h-26 flex w-36 cursor-pointer flex-col items-center gap-1 duration-300 hover:translate-x-1 hover:translate-y-1 rounded-md border-b-2 border-r-2 border-blue-700 bg-slate-50 px-2 py-3 shadow-xl">
            {/* <p>product</p> */}
            < HiOutlineCurrencyRupee className="h-8 w-8 text-blue-700" />
            <h5> Pending amount
            </h5>
            <p>{pendingAmount ?`${indianRubee} ${pendingAmount}` : '_'}</p>
          </div>
         
        </div>
        <AddSales />
      </div>
    )
}

export default SalesDashboard
