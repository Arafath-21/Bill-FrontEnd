import { HiMiniArrowRightOnRectangle, HiOutlineUser } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  //   const { data = {} } = useQuery({
  //     queryFn: getUser,
  //     queryKey: ['user'],
  //   });
  //   const { data: final = {} } = data;
  //   //   const {user={}} = data?.data.user;
  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();

  function logoutHandler() {
    localStorage.removeItem('token');
    navigate('/');
  }
  //   if (final) {
  //     var { firstName, lastName, companyName = '_' } = final?.user;
  //     dispatch(addUser(final.user));
  //   }

  return (
    <header className=" flex items-center justify-end gap-8 border-b-2 border-blue-700 bg-slate-400 px-8 py-4">
      <Link to="/account">
        <HiOutlineUser className="mr-2 inline-block h-6 w-6" />
        <span className="text-sm font-semibold capitalize tracking-wider ">
          {user ? `${user.firstName} ${user.lastName}` : '_'}
        </span>
      </Link>
      <div>
        <button
          className="duration-300 hover:scale-105"
          onClick={logoutHandler}
        >
          <HiMiniArrowRightOnRectangle className="h-6 w-6 text-blue-700" />
        </button>
      </div>
    </header>
  );
}

export default Header;
