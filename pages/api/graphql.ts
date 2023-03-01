// import { PrismaClient } from '@prisma/client';
import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';

import context from '../../graphql/context';

// import resolvers from '../../graphql/resolvers/Query';
import schema from '../../graphql/schema';

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema,
  // resolvers,
  context: async () => context(),
  graphqlEndpoint: '/api/graphql',
});

export const config = {
  api: {
    // ? Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};
