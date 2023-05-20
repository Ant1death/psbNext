import { BASE_URL } from '../utils/constants';

export const signup = async (name, email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        is_active: true,
        is_superuser: false,
        is_verified: false,
        username: name,
        role_id: 1,
        balance: 0
      }),
    });

    if (!res.ok) throw new Error(`error: ${res.status}`);

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};