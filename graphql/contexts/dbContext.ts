import type { NextApiRequest } from 'next';
import { PrismaClient } from '@prisma/client';
import type { User } from '@prisma/client';

import getConnectedUser from '../services/tokenManager';

const db = new PrismaClient();

export type Context = {
  db: PrismaClient
  connectedUser: User | null
};

export default async (request: NextApiRequest) => {
  const token = request.headers.authorization || '';
  const connectedUser = await getConnectedUser(
    db,
    process.env.SECRET_TOKEN_KEY!,
    token,
  );

  return { db, connectedUser };
};
