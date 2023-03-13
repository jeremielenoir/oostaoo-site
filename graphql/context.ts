import type { NextApiRequest, NextApiResponse } from 'next';
import type { PrismaClient, User } from '@prisma/client';

import db from './database/client';
import { verifyTokenAndGetUser } from './services/tokenManager';

export type Context = {
  db: PrismaClient
  response: NextApiResponse
  connectedUser: Omit<User, 'password'> | null | Error
};

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const token = request.cookies['auth-token'];
  const connectedUser = token && await verifyTokenAndGetUser(db, token);

  return {
    db,
    response,
    connectedUser,
  };
};
