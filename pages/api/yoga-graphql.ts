import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';

import dbContext from '../../graphql/contexts/dbContext';
import schema from '../../graphql/schema';

export default createYoga<{
  request: NextApiRequest
  response: NextApiResponse
}>({
  schema,
  context: async ({ request }) => dbContext(request),
  graphqlEndpoint: '/api/yoga-graphql',
});

export const config = {
  api: {
    bodyParser: false, // set to true to allow uploading files
  },
};
