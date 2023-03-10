import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

import formatError from '../../graphql/services/formatError';
import context from '../../graphql/context';
import schema from '../../graphql/schema';

const server = new ApolloServer({
  schema,
  formatError,
});

export default startServerAndCreateNextHandler(server, {
  context: async (request, response) => context(request, response),
});
