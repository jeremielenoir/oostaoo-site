import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import type { NextApiRequest } from 'next';

import formatError from '../../graphql/services/formatError';
import dbContext from '../../graphql/contexts/dbContext';
import schema from '../../graphql/schema';

const server = new ApolloServer({
  schema,
  formatError,
});

export default startServerAndCreateNextHandler(server, {
  context: async (request: NextApiRequest) => dbContext(request),
});
