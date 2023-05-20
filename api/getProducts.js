import { BASE_URL } from '../utils/constants';

export const getProducts = async (type) => {
  try {
    const res = await fetch(`${BASE_URL}/products/all?types=${type}`);

    if (!res.ok) throw new Error(`error: ${res.status}`);

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};