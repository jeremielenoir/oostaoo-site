import { asNexusMethod, enumType, makeSchema } from 'nexus';
import * as path from 'path';
import { DateTimeResolver } from 'graphql-scalars';
import Queries from './queries';
import Mutations from './mutations';

import {
  User,
  JobOffer,
  Service,
  Skill,
} from './resolvers';

const DateTime = asNexusMethod(DateTimeResolver, 'DateTime');

const SortOrder = enumType({
  name: 'SortOrder',
  description: 'Sort order types',
  members: ['asc', 'desc'],
});

const SortUsersBy = enumType({
  name: 'SortUsersBy',
  description: 'Sort users by a field',
  members: ['id', 'name', 'email'],
});

const SortJobOffersBy = enumType({
  name: 'SortJobOffersBy',
  description: 'Sort job offers by a field',
  members: ['id', 'startDate', 'title'],
});

export default makeSchema({
  types: [
    ...Queries,
    ...Mutations,
    User,
    JobOffer,
    Service,
    Skill,
    DateTime,
    SortUsersBy,
    SortJobOffersBy,
    SortOrder,
  ],
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
