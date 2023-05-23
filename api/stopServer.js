import { BASE_URL } from '../utils/constants';

export const stopServer = async (token, id) => {
  try {
    const res = await fetch(`${BASE_URL}/order/server/stop?order_id=${id}`, {
      method: 'GET',
      headers: {
        'Authorization' : `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error(`error: ${res.status}`);

    return res.ok;
  } catch (err) {
    console.error(err);
  }
};