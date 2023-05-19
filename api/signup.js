export const signup = async (name, email, password) => {
  try {
    const res = await fetch(`http://37.139.42.75:3001/auth/register`, {
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