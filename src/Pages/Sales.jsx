import { Suspense, useEffect } from 'react';
import SalesDashboard from '../Features/Sales/SalesDashboard';
import SalesLandingPage from '../Features/Sales/SalesLandingPage';
import { useNavigate } from 'react-router-dom';

function Sales() {
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
    <div className="flex flex-col">
      <Suspense fallback={<p>Loading...</p>}>
        <SalesDashboard />
      </Suspense>
      <SalesLandingPage />
    </div>
  );
}

export default Sales;
