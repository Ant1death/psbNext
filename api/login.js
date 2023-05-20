import { BASE_URL } from '../utils/constants';

export const login = async (name, password) => {
  try {
    const params = {
      username: name,
      password: password,
    };
    const body = [];

    for (let key in params) {
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(params[key]);
      body.push(`${encodedKey}=${encodedValue}`);
    }

    const bodyLine = body.join('&');

    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: bodyLine,
    });

    if (!res.ok) throw new Error(`error: ${res.status}`);


    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};