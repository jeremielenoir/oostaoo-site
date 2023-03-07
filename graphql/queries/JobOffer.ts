import { ApolloServerErrorCode } from '@apollo/server/errors';
import { GraphQLError } from 'graphql'; 
import {
  extendType, nonNull, stringArg, arg, intArg, booleanArg,
} from 'nexus';

export default extendType({
  type: 'Query',
  definition(t) {
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
        const jobOffer = await db.jobOffer.findUnique({ where: { id: parseInt(id, 10) } });

        if (!jobOffer) {
          throw new GraphQLError(`Job offer with id ${id} not found`, {
            extensions: {
              code: ApolloServerErrorCode.BAD_REQUEST,
            },
          });
        }

        return jobOffer;
      },
    });
  },
});
