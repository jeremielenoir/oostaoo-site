import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export type GraphQLContext = {
  db: PrismaClient
};

export default () => ({ db });
