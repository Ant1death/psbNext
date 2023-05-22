import { BASE_URL } from '../utils/constants';

export const createNewOrder = async (token, body) => {
  try {
    const res = await fetch(`${BASE_URL}/order/new?product_id=${body.product_id}&payment_type=${body.payment_type}&os=${body.os}&control_panel=${body.control_panel}`, {
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