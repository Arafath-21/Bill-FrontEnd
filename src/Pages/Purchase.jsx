import { useEffect } from 'react';
import PurchaseDashboard from '../Features/Purchase/PurchaseDashboard';
import PurchaseLanding from '../Features/Purchase/PurchaseLandingPage';
import { useNavigate } from 'react-router-dom';

function Purchase() {
  const navigate = useNavigate();

  useEffect(
    function token() {
      if (!localStorage.getItem('token')) {
        navigate('/login', { replace: true });
      }
    },
    [navigate]
  );
  return (
    <div className="flex flex-col overflow-y-auto">
      <PurchaseDashboard />
      <PurchaseLanding />
    </div>
  );
}

export default Purchase;
