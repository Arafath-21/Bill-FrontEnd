import { useNavigate } from 'react-router-dom';
import Graphs from '../Features/Dashboard.jsx/Graphs';
import Statistics from '../Features/Dashboard.jsx/Statistics';
import { useEffect } from 'react';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(function token() {
    if (!localStorage.getItem('token')) {
      navigate('/login', { replace: true });
    }
  },[navigate]);
  return (
    <>
      <h3 className=" px-4 pt-4 text-lg font-semibold tracking-wider">
        DashBoard
      </h3>
      <Statistics />
      <Graphs />
    </>
  );
}

export default Dashboard;
