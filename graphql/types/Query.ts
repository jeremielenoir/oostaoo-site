import {
  queryType, nonNull, stringArg, arg, intArg, booleanArg,
} from 'nexus';

const Query = queryType({
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
        const user = await db.user.findUnique({ where: { id } });

        if (!user) {
          throw new Error(`User with id ${id} not found`);
        }

        return user;
      },
    });

    t.list.field('jobOffers', {
      type: 'JobOffer',
      args: {
        sortBy: arg({ type: 'SortJobOffersBy', default: 'startDate' }),
        sortOrder: arg({ type: 'SortOrder', default: 'desc' }),
        showPrivate: booleanArg({ default: false }),
        limit: intArg({ default: 20 }),
        offset: intArg({ default: 0 }),
      },
      resolve: async (_, args, { db }) => db.jobOffer.findMany({
        where: args.showPrivate
          ? undefined
          : { visibility: true },
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

    t.field('jobOffer', {
      type: 'JobOffer',
      args: {
        id: nonNull(stringArg()),
      },
      resolve: async (_, { id }, { db }) => {
        const jobOffer = await db.jobOffer.findUnique({ where: { id } });

        if (!jobOffer) {
          throw new Error(`Job offer with id ${id} not found`);
        }

        return jobOffer;
      },
    });

    t.list.field('services', {
      type: 'Service',
      resolve: async (_, __, { db }) => db.service.findMany(),
    });

    t.field('service', {
      type: 'Service',
      args: {
        id: nonNull(stringArg()),
      },
      resolve: async (_, { id }, { db }) => {
        const service = await db.service.findUnique({ where: { id } });

        if (!service) {
          throw new Error(`Service with id ${id} not found`);
        }

        return service;
      },
    });

    t.list.field('skills', {
      type: 'Skill',
      resolve: async (_, __, { db }) => db.skill.findMany(),
    });

    t.field('skill', {
      type: 'Skill',
      args: {
        id: nonNull(stringArg()),
      },
      resolve: async (_, { id }, { db }) => {
        const skill = await db.skill.findUnique({ where: { id } });

        if (!skill) {
          throw new Error(`SKill with id ${id} not found`);
        }

        return skill;
      },
    });
  },
});

export default Query;
