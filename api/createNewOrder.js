import { BASE_URL } from '../utils/constants';

export const createNewOrder = async (token, queries) => {
  try {
    const res = await fetch(`${BASE_URL}/order/new?${queries}`, {
      method: 'POST',
      headers: {
        'Authorization' : `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error(`error: ${res.status}`);

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};