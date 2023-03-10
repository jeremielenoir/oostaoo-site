import { GraphQLError } from 'graphql';
import { ApolloServerErrorCode } from '@apollo/server/errors';
import {
  nonNull, stringArg, arg, intArg, extendType,
} from 'nexus';

export default extendType({
  type: 'Query',
  definition(t) {
    t.list.field('me', {
      type: 'User',
      resolve: async (_, __, { user }) => {
        if (!user || typeof user === 'string') {
          throw new GraphQLError('Unauthorized', {
            extensions: {
              code: ApolloServerErrorCode.BAD_REQUEST,
            },
          });
        }

        if (user instanceof Error) {
          throw new GraphQLError('???', {
            extensions: {
              code: ApolloServerErrorCode.BAD_REQUEST,
            },
          });
        }

        return user;
      },
    });

    t.list.field('users', {
      type: 'User',
      args: {
        sortBy: arg({ type: 'SortUsersBy', default: 'name' }),
        sortOrder: arg({ type: 'SortOrder', default: 'asc' }),
        limit: intArg({ default: 20 }),
        offset: intArg({ default: 0 }),
      },
      resolve: async (_, args, { db }) => db.user.findMany({
        orderBy: args.sortBy
          ? { [args.sortBy]: args.sortOrder }
          : undefined,
        take: args.limit
          ? args.limit
          : undefined,
        skip: (args.limit && args.offset)
          ? args.offset * args.limit
          : undefined,
      }),
    });

    t.field('user', {
      type: 'User',
      args: {
        id: nonNull(stringArg()),
      },
      resolve: async (_, args, { db }) => {
        const id = parseInt(args.id, 10);
        const user = await db.user.findUnique({ where: { id } });

        if (!user) {
          throw new GraphQLError('Invalid argument value', {
            extensions: {
              code: ApolloServerErrorCode.BAD_USER_INPUT,
              argumentName: 'id',
            },
          });
        }

        return user;
      },
    });
  },
});