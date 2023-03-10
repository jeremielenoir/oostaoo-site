import { serialize, CookieSerializeOptions } from 'cookie';
import { NextApiResponse } from 'next';

const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {},
): void => {
  const stringValue =
    typeof value === 'object' ? `j:${JSON.stringify(value)}` : String(value);

  const cookieOptions = {
    ...options,
    httpOnly: options.httpOnly || true,
    sameSite: options.sameSite || 'none',
    secure: process.env.NODE_ENV === 'production' || true,
    expires: (typeof options.maxAge === 'number')
      ? new Date(Date.now() + options.maxAge * 1000)
      : undefined,
  };

  res.setHeader('Set-Cookie', serialize(name, stringValue, cookieOptions));
};

export default setCookie;
