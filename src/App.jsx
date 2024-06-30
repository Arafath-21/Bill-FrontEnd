import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword';
import AppLayout from './Ui/AppLayout';
import Dashboard from './Pages/Dashboard';
import PageNotFound from './Pages/PageNotFound';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import LandingPage from './Pages/LandingPage';
import Items from './Pages/Items';
import Purchase from './Pages/Purchase';
import Sales from './Pages/Sales';
import Account from './Pages/Account';
import Customers from './Pages/Customers';

const queryClient = new QueryClient();

function App() {
  return (
    <div className='scroll-smooth'>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/items" element={<Items />} />
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/sales" element={<Sales />} />
              {/* <Route path="/expenses" element={<Expenses />} /> */}
              <Route path="/account" element={<Account />} />
            </Route>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: '#bfdbfe',
              color: 'var(--color-grey-700)',
            },
          }}
        />
      </QueryClientProvider>
    </div>
  );
}

export default App;
