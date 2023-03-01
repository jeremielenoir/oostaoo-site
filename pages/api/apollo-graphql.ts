import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

import context from '../../graphql/context';
import typeDefs from '../../graphql/schema';

const server = new ApolloServer({ typeDefs });

export default startServerAndCreateNextHandler(server, {
  context: async () => context(),
});
