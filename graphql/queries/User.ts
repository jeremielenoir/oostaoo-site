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
      resolve: async (_, { id }, { db }) => {
        const user = await db.user.findUnique({ where: { id: parseInt(id, 10) } });

        if (!user) {
          throw new Error(`User with id ${id} not found`);
        }

        return user;
      },
    });
  },
});
