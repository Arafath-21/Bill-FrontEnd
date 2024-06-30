import axios from 'axios';

export async function getPurchase() {
  const token = localStorage.getItem('token');
  const data = axios
    .get('https://bill-backend-2deo.onrender.com/api/getpurchase', {
      headers: {
        'x-auth-token': token,
      },
    })
    .catch((error) => {
      throw error;
    });

  return data;
}
