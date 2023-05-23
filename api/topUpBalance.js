import { BASE_URL } from '../utils/constants';

export const topUpBalance = async (token, queries) => {
  try {
    const res = await fetch(`${BASE_URL}/payment/create?${queries}`, {
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