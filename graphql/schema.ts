import { asNexusMethod, enumType, makeSchema } from 'nexus';
import * as path from 'path';
import { DateTimeResolver } from 'graphql-scalars';
import {
  Query,
  Mutation,
  User,
  JobOffer,
} from './types';

export const DateTime = asNexusMethod(DateTimeResolver, 'DateTime');

const SortOrder = enumType({
  name: 'SortOrder',
  description: 'Sort order',
  members: ['asc', 'desc'],
});

const SortUserBy = enumType({
  name: 'SortUserBy',
  description: 'Sort users by a field',
  members: ['id', 'name', 'email'],
});

const SortJobOfferBy = enumType({
  name: 'SortJobOfferBy',
  description: 'Sort job offers by a field',
  members: ['id', 'startDate', 'title'],
});

const FilterJobOfferBy = enumType({
  name: 'FilterJobOfferBy',
  description: 'Filter job offers by a field',
  members: ['visibility', 'startDate'],
});

export default makeSchema({
  types: [
    Query,
    Mutation,
    User,
    JobOffer,
    DateTime,
    SortUserBy,
    SortJobOfferBy,
    SortOrder,
    FilterJobOfferBy,
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
