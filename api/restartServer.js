import { BASE_URL } from '../utils/constants';

export const restartServer = async (token, id) => {
  try {
    const res = await fetch(`${BASE_URL}/order/server/restart?order_id=${id}`, {
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