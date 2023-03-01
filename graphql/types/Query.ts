import {
  queryType, nonNull, stringArg,
} from 'nexus';

const Query = queryType({
  definition(t) {
    t.string('hello', {
      resolve: () => 'Hello World',
    });

    t.list.field('users', {
      type: 'User',
      // args: {
      //   sortBy: arg({ type: 'SortOrder' }),
      // },
      resolve: async (_, args, { db }) => db.user.findMany(),
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
          throw new Error(`User with id ${id} not found`);
        }

        return user;
      },
    });
  },
});

export default Query;
