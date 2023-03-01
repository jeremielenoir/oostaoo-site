import { makeSchema } from 'nexus';
import * as path from 'path';
import {
  Query,
  Mutation,
  User,
  JobOffer,
} from './types';

// ? Add-on to get createdAt and updatedAt data in queries
// ? Uncomment Add DateTime in types makeSchema method
// import { DateTimeResolver } from 'graphql-scalars';
// const DateTime = asNexusMethod(DateTimeResolver, 'DateTime');

export default makeSchema({
  types: [Query, User, JobOffer],
  outputs: {
    schema: path.join(process.cwd(), 'graphql/schema.graphql'),
    typegen: path.join(process.cwd(), 'graphql/generated/nexus.d.ts'),
  },
  contextType: {
    module: path.join(process.cwd(), 'graphql/context.ts'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'db',
      },
    ],
  },
});
