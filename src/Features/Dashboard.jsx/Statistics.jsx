import { decode } from 'html-entities';
import {
  HiOutlineBanknotes,
  HiOutlineCircleStack,
  HiOutlineClipboard,
  HiOutlineCurrencyRupee,
} from 'react-icons/hi2';
import { useSelector } from 'react-redux';

function Statistics() {
  const indianRubee = decode('&#x20B9');

  //   sales data
  const salesdata = useSelector((state) => state.sales.sales);

  const totalsales = salesdata
    ?.slice()
    .reduce((sum, item) => sum + Number(item.totalAmount), 0);
  const pendingAmount = salesdata
    ?.slice()
    .reduce((sum, item) => sum + Number(item.remainingBalance), 0);

  //  Purchase data
  const purchasedata = useSelector((state) => state.purchase.purchase);

  const totalStock = purchasedata
    ?.slice()
    .reduce((sum, item) => sum + Number(item.quantity), 0);

  const totalInventoryCost = purchasedata
    ?.map((item) => Number(item.quantity) * Number(item.purchasePrice))
    .slice()
    .reduce((sum, price) => sum + price, 0);

  return (
    <div className="mt-4 flex flex-col items-center  justify-around  px-4 text-sm font-semibold capitalize tracking-wide sm:flex-row">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="mb-4 flex   h-24  w-52  cursor-pointer rounded-lg bg-gray-100 shadow-xl">
          <div className="flex w-3/5 items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full  bg-green-300">
              <HiOutlineBanknotes className="h-8 w-8 " />
            </div>
          </div>
          <div className="w-full">
            <p className="mt-6 text-center">Total Sales </p>
            <p className="text-center">
              {indianRubee}
              {totalsales ? totalsales : '0'}
            </p>
          </div>
        </div>
        <div className="mb-4 flex  h-24  w-52 cursor-pointer rounded-lg bg-gray-100 shadow-xl">
          <div className="flex w-3/5 items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full  bg-blue-300">
              <HiOutlineCurrencyRupee className="h-8 w-8 " />
            </div>
          </div>
          <div className="w-full">
            <p className="mt-5 text-center">Total Inventory Cost </p>
            <p className="text-center">
              {indianRubee}
              {totalInventoryCost ? totalInventoryCost : '0'}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-12">
        <div className="mb-4  flex h-24  w-52 cursor-pointer rounded-lg bg-gray-100 shadow-xl">
          <div className="flex w-3/5 items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full  bg-red-300">
              <HiOutlineClipboard className="h-8 w-8 " />
            </div>
          </div>
          <div className="w-full">
            <p className="mt-5 text-center">Total Pending amount </p>
            <p className="text-center">
              {indianRubee}
              {pendingAmount ? pendingAmount : '0'}
            </p>
          </div>
        </div>
        <div className="mb-4 flex  h-24 w-52  cursor-pointer rounded-lg bg-gray-100 px-2 shadow-xl">
          <div className="flex w-3/5 items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full  bg-yellow-300">
              <HiOutlineCircleStack className="h-8 w-8 " />
            </div>
          </div>
          <div className="w-full">
            <p className="mt-5 text-center">Total inventory stock </p>
            <p className="text-center">{totalStock ? totalStock : '0'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
