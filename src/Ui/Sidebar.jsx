import { Link, NavLink } from 'react-router-dom';
import {
  HiOutlineAdjustmentsVertical,
  HiOutlineCircleStack,
  HiOutlineUsers,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
  HiOutlineSquares2X2,
} from 'react-icons/hi2';

function Sidebar() {
  return (
    <aside className="row-span-2 flex flex-col items-center  bg-slate-100  font-semibold ">
      <div className="mt-6 w-full text-center">
        <Link to="/">
          <h3 className="text-lg">GloBill</h3>
        </Link>
      </div>
      <ul className="mt-10 flex w-full flex-col items-center gap-4">
        <li className="w-full ">
          <NavLink to="/dashboard">
            <div className="flex w-full items-center gap-2 px-2 py-3 text-sm font-semibold tracking-wide opacity-90  duration-300 hover:bg-slate-200  hover:opacity-100 md:px-3 lg:px-16">
              <HiOutlineAdjustmentsVertical className="h-6 w-6" />
              <span className="capitalize">Dashboard</span>
            </div>
          </NavLink>
        </li>
        <li className="w-full ">
          <NavLink to="items">
            <div className="flex w-full items-center gap-2 px-2 py-3 text-sm  font-semibold tracking-wide opacity-90    duration-300 hover:bg-slate-200  hover:opacity-100 md:px-3 lg:px-16">
              <HiOutlineCircleStack className="h-6 w-6" />
              <span className="capitalize">Items</span>
            </div>
          </NavLink>
        </li>
        <li className="w-full ">
          <NavLink to="sales">
            <div className="flex w-full items-center gap-2 px-2 py-3 text-sm  font-semibold tracking-wide opacity-90    duration-300 hover:bg-slate-200  hover:opacity-100 md:px-3 lg:px-16">
              <HiOutlineChartBar className="h-6 w-6" />
              <span className="capitalize">sales</span>
            </div>
          </NavLink>
        </li>
        <li className="w-full ">
          <NavLink to="purchase">
            <div className="flex w-full items-center gap-2 px-2 py-3 text-sm  font-semibold tracking-wide opacity-90    duration-300 hover:bg-slate-200  hover:opacity-100 md:px-3 lg:px-16">
              <HiOutlineSquares2X2 className="h-6 w-6" />
              <span className="capitalize">purchase</span>
            </div>
          </NavLink>
        </li>
      
        <li className="w-full ">
          <NavLink to="customers">
            <div className="flex w-full items-center gap-2 px-2 py-3 text-sm  font-semibold tracking-wide opacity-90    duration-300 hover:bg-slate-200  hover:opacity-100 md:px-3 lg:px-16">
              <HiOutlineUsers className="h-6 w-6" />
              <span className="capitalize">Customers</span>
            </div>
          </NavLink>
        </li>

        <li className="w-full ">
          <NavLink to="account">
            <div className="flex w-full items-center gap-2 px-2 py-3   text-sm font-semibold tracking-wide    opacity-90 duration-300  hover:bg-slate-200 hover:font-semibold hover:opacity-100 md:px-3 lg:px-16">
              <HiOutlineCog6Tooth className="h-6 w-6" />
              <span className="capitalize">account</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
