import {
  queryType, nonNull, stringArg, arg,
} from 'nexus';

const Query = queryType({
  definition(t) {
    t.string('hello', {
      resolve: () => 'Hello Oostaoo!',
    });

    t.list.field('users', {
      type: 'User',
      args: {
        sortUserBy: arg({ type: 'SortUserBy', default: 'name' }),
        sortOrder: arg({ type: 'SortOrder', default: 'asc' }),
      },
      resolve: async (_, { sortUserBy, sortOrder }, { db }) => db.user.findMany({
        orderBy: sortUserBy && { [sortUserBy]: sortOrder },
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
          throw new Error(`User with id ${id} not found`);
        }

        return user;
      },
    });

    t.list.field('jobOffers', {
      type: 'JobOffer',
      args: {
        sortJobOfferBy: arg({ type: 'SortJobOfferBy', default: 'title' }),
        sortOrder: arg({ type: 'SortOrder', default: 'asc' }),
        FilterJobOfferBy: arg({ type: 'FilterJobOfferBy', default: 'visibility' }),
      },
      resolve: async (_, {
        sortJobOfferBy,
        sortOrder,
        filterJobOfferBy,
      }, { db }) => db.jobOffer.findMany({
        orderBy: sortJobOfferBy && { [sortJobOfferBy]: sortOrder },
        where: filterJobOfferBy && { [filterJobOfferBy]: true },
      }),
    });
  },
});

export default Query;
