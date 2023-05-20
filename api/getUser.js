export const getUser = async (type) => {
  try {
    const res = await fetch(`http://37.139.42.75:8000/auth/get_current_user`, {
      headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxOCIsImF1ZCI6WyJmYXN0YXBpLXVzZXJzOmF1dGgiXSwiZXhwIjoxNjg0NTgwMzgyfQ.izMur9LchQy9NstUP2aWTDla7LmaK34yD8MZlcZlpeg`
      }
    });

    if (!res.ok) throw new Error(`error: ${res.status}`);

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};