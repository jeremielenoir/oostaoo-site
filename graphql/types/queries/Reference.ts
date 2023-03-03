import {
  arg, booleanArg, extendType, nonNull, stringArg,
} from 'nexus';

export default extendType({
  type: 'Query',
  definition(t) {
    t.list.field('skills', {
      type: 'Skill',
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

    t.field('skill', {
      type: 'Skill',
      args: {
        id: nonNull(stringArg()),
      },
      resolve: async (_, { id }, { db }) => {
        const skill = await db.reference.findUnique({ where: { id: parseInt(id, 10) } });

        if (!skill) {
          throw new Error(`SKill with id ${id} not found`);
        }

        return skill;
      },
    });
  },
});
