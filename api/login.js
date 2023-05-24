import { checkResponse } from '../utils/checkResponse';
import { BASE_URL } from '../utils/constants';

export const login = async (name, password) => {
  return fetch (`/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: `username=${name}&password=${password}`,
  })
    .then(checkResponse);
};

/* try {
  const serverRes = await fetch(`${process.env.BASE_URL}/order/new?${queries}`, {
    method: 'GET',
    headers: req.headers,
  });

  if (!serverRes.ok) throw new Error(`error: ${serverRes.status}`);

  res.status(200).send(serverRes.ok);
} catch (err) {
  res.status(err.status).send({ error: 'failed to fetch data' });
} */