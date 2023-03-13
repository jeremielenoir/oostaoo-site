import { GraphQLError } from 'graphql';
import { ApolloServerErrorCode } from '@apollo/server/errors';
import {
  nonNull, stringArg, arg, intArg, extendType,
} from 'nexus';

export default extendType({
  type: 'Query',
  definition(t) {
    t.list.field('users', {
      type: 'User',
      args: {
        sortBy: arg({ type: 'SortUsersBy', default: 'name' }),
        sortOrder: arg({ type: 'SortOrder', default: 'asc' }),
        limit: intArg({ default: 20 }),
        offset: intArg({ default: 0 }),
      },
      resolve: async (_, args, { db, connectedUser }) => {
        let users = await db.user.findMany({
          orderBy: args.sortBy
            ? { [args.sortBy]: args.sortOrder }
            : undefined,
          take: args.limit
            ? args.limit
            : undefined,
          skip: (args.limit && args.offset)
            ? args.offset * args.limit
            : undefined,
        });

        users = users.map((user) => {
          let isConnect = false;
          if (connectedUser && 'id' in connectedUser) {
            isConnect = user.id === connectedUser.id;
          }

          let isAdmin = false;
          if (user.role[0] === 1) {
            isAdmin = true;
          }

          return { ...user, isConnect, isAdmin };
        });

        return users;
      },
    });

    t.field('user', {
      type: 'User',
      args: {
        id: nonNull(stringArg()),
      },
      resolve: async (_, args, { db, connectedUser }) => {
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

        let isConnect = false;
        if (connectedUser && 'id' in connectedUser) {
          isConnect = user.id === connectedUser.id;
        }

        let isAdmin = false;
        if (user.role[0] === 1) {
          isAdmin = true;
        }

        return { ...user, isConnect, isAdmin };
      },
    });
  },
});
