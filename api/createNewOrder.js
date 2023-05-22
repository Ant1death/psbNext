import { BASE_URL } from '../utils/constants';

export const createNewOrder = async (token, body) => {
  try {
    const res = await fetch(`${BASE_URL}/order/new`, {
      method: 'POST',
      headers: {
        'Authorization' : `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error(`error: ${res.status}`);

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};