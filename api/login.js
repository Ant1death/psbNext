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
    .then(checkResponse)
    .catch(err => console.error(err));
};