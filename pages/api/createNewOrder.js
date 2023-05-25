export default async function handler(req, res) {
  const { product_id, payment_type, os, control_panel, period, } = req.query;

  let queries = '';

  if (product_id && payment_type && os && control_panel && !period) {
    queries = `product_id=${product_id}&payment_type=${payment_type}&os=${os}&control_panel=${control_panel}`;
  } else if (product_id && payment_type && !os && !control_panel && !period) {
    queries = `product_id=${product_id}&payment_type=${payment_type}`;
  } else if (product_id && payment_type && !os && !control_panel && period) {
    queries = `product_id=${product_id}&payment_type=${payment_type}&period=${period}`;
  }

  try {
    const serverRes = await fetch(`${process.env.BASE_URL}/order/new?${queries}`, {
      method: 'POST',
      headers: req.headers,
    });

    console.log(serverRes)
    if (!serverRes.ok) throw new Error(`error: ${serverRes.status}`);

    res.status(200).send(serverRes.ok);
  } catch (err) {
    res.status(err.status).send({ error: 'failed to fetch data' });
  }
}