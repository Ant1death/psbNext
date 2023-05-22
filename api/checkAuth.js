import { BASE_URL } from '../utils/constants';

export const checkAuth = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/users/me`, {
      headers: {
        'Authorization' : `Bearer ${token}`,
      }
    });

    if (!res.ok) throw new Error(`error: ${res.status}`);

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};