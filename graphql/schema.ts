import { asNexusMethod, enumType, makeSchema } from 'nexus';
import path from 'path';
import { DateTimeResolver } from 'graphql-scalars';
import Queries from './queries';
import Mutations from './mutations';
import { LoginUserType } from './mutations/User';

import {
  User,
  // LoginUser,
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
    LoginUserType,
    JobOffer,
    Service,
    Skill,
    DateTime,
    SortUsersBy,
    SortJobOffersBy,
    SortOrder,
  ],
  outputs: {
    schema: path.join(process.cwd(), 'graphql/schema.gen.graphql'),
    typegen: path.join(process.cwd(), 'graphql/generated/nexusTypes.gen.ts'),
  },
  contextType: {
    module: path.join(process.cwd(), 'graphql/contexts/dbContext.ts'),
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
