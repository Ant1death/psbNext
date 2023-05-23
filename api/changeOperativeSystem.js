import { BASE_URL } from '../utils/constants';

export const changeOperativeSystem = async (token, queries) => {
  try {
    const res = await fetch(`${BASE_URL}/order/server/change_operative_system?${queries}`, {
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