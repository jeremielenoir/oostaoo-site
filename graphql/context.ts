import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import type { User } from '@prisma/client';

import { verifyTokenAndGetUser } from './services/tokenManager';

export type Context = {
  db: PrismaClient
  response: NextApiResponse
  user: Omit<User, 'password'> | null | Error
};

const db = new PrismaClient();

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const token = request.cookies['auth-token'] || '';
  const user = await verifyTokenAndGetUser(
    db,
    token,
  );

  console.log('context log');

  return { db, response, user };
};
