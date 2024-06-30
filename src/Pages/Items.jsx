import ItemView from '../Features/Items/ItemView';
import ItemLanding from '../Features/Items/ItemLandingPage';
import { Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Items() {
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
    <div className="grid grid-cols-1 grid-rows-[auto,1fr] overflow-auto">
      <Suspense fallback={<p>Loading...</p>}>
        <ItemView />
      </Suspense>
      <ItemLanding />
    </div>
  );
}

export default Items;
