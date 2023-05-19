export const getUser = async (type) => {
  try {
    const res = await fetch(`http://37.139.42.75:3001/auth/get_current_user`);

    if (!res.ok) throw new Error(`error: ${res.status}`);

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};