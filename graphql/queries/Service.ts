import { ApolloServerErrorCode } from '@apollo/server/errors';
import { GraphQLError } from 'graphql';
import {
  arg, extendType, nonNull, stringArg, booleanArg,
} from 'nexus';

export default extendType({
  type: 'Query',
  definition(t) {
    t.list.field('services', {
      type: 'Service',
      args: {
        sortOrder: arg({ type: 'SortOrder', default: 'asc' }),
        showPrivate: booleanArg({ default: false }),
      },
      resolve: async (_, args, { db }) => db.service.findMany({
        where: args.showPrivate
          ? undefined
          : { visibility: true },
        orderBy: { title: args.sortOrder || 'asc' },
      }),
    });

    t.field('service', {
      type: 'Service',
      args: {
        id: nonNull(stringArg()),
      },
      resolve: async (_, { id }, { db }) => {
        const service = await db.service.findUnique({ where: { id: parseInt(id, 10) } });

        if (!service) {
          throw new GraphQLError(`Service with id ${id} not found`, {
            extensions: {
              code: ApolloServerErrorCode.BAD_USER_INPUT,
            },
          });
        }

        return service;
      },
    });
  },
});
