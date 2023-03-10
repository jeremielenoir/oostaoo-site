import { NextApiRequest, NextApiResponse } from 'next';
import setCookie from '../../graphql/services/setCookie';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // Calling our pure function using the `res` object, it will add the `set-cookie` header
  // Add the `set-cookie` header on the main domain and expire after 30 days
  setCookie(res, 'hello', 'world!', { maxAge: 5 });
  // Return the `set-cookie` header so we can display it in the browser and show that it works!
  res.end(res.getHeader('Set-Cookie'));
};

export default handler;
