export const getOrders = async (token) => {
  try {
    const res = await fetch(`/api/getOrders`, {
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