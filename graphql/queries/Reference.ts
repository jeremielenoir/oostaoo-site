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
        orderBy: { title: args.sortOrder },
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
          throw new Error(`Reference with id ${id} not found`);
        }

        return reference;
      },
    });
  },
});
