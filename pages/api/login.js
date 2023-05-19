import cookie from 'cookie';

export default async (req, res) => {
  if (req.method === 'POST') {

    const { username, password } = req.body

    const params = {
      username: username,
      password: password,
    };
    const body = [];

    for (let key in params) {
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(params[key]);
      body.push(`${encodedKey}=${encodedValue}`);
    }

    const bodyLine = body.join('&');

    const res = await fetch(`http://37.139.42.75:3001/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: bodyLine,
    });

    if (!res.ok) throw new Error(`error: ${res.status}`);



    const setCookieHeader = res.headers['set-cookie'];
  //  const parsedCookies = cookie.parse(setCookieHeader[0]);
  //  const myCookieValue = parsedCookies.myCookie;


    console.log(setCookieHeader)
    /* res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', String(apiRes.data.token), {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        sameSite: 'strict',
        path: '/'
      })
    ); */

    return res.ok;

  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({message: `Method ${req.method} not allowed`})
  }
}