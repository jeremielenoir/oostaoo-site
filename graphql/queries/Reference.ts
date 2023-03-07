import { ApolloServerErrorCode } from '@apollo/server/errors';
import { GraphQLError } from 'graphql';
import {
  arg, booleanArg, extendType, nonNull, stringArg,
} from 'nexus';

export default extendType({
  type: 'Query',
  definition(t) {
    t.list.field('references', {
      type: 'Reference',
      args: {
        sortOrder: arg({ type: 'SortOrder', default: 'asc' }),
        showPrivate: booleanArg({ default: false }),
      },
      resolve: async (_, args, { db }) => db.reference.findMany({
        where: args.showPrivate
          ? undefined
          : { visibility: true },
        orderBy: { title: args.sortOrder || 'asc' },
      }),
    });

    t.field('reference', {
      type: 'Reference',
      args: {
        id: nonNull(stringArg()),
      },
      resolve: async (_, { id }, { db }) => {
        const reference = await db.reference.findUnique({ where: { id: parseInt(id, 10) } });

        if (!reference) {
          throw new GraphQLError(`Reference with id ${id} not found`, {
            extensions: {
              code: ApolloServerErrorCode.BAD_USER_INPUT,
            },
          });
        }

        return reference;
      },
    });
  },
});
