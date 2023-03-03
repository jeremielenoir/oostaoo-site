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
        orderBy: { title: args.sortOrder },
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
          throw new Error(`Service with id ${id} not found`);
        }

        return service;
      },
    });
  },
});
