import axios from 'axios';

export async function getCustomers() {
  const token = localStorage.getItem('token');
  const data = axios
    .get('https://bill-backend-2deo.onrender.com/api/getcustomers', {
      headers: {
        'x-auth-token': token,
      },
    })
    .catch((error) => {
      throw error;
    });

  return data;
}
