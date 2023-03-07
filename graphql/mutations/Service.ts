import { GraphQLError } from 'graphql';
import { ApolloServerErrorCode } from '@apollo/server/errors';
import {
  extendType, nonNull, stringArg, idArg, booleanArg,
} from 'nexus';

export default extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createService', {
      type: 'Service',
      args: {
        title: nonNull(stringArg()),
        visibility: nonNull(booleanArg()),
        description: stringArg(),
      },
      resolve: async (_, args, { db }) => db.service.create({
        data: {
          title: args.title,
          visibility: args.visibility,
          description: args.description || undefined,
        },
      }),
    });

    t.field('updateService', {
      type: 'Service',
      args: {
        id: nonNull(idArg()),
        title: stringArg(),
        visibility: booleanArg(),
        description: stringArg(),
      },
      resolve: async (_, args, { db }) => {
        const id = parseInt(args.id, 10);
        const service = await db.service.update({
          where: { id },
          data: {
            title: args.title || undefined,
            visibility: args.visibility || undefined,
            description: args.description || undefined,
          },
        });

        if (!service) {
          throw new GraphQLError(`Service with id = ${id} not found`, {
            extensions: {
              code: ApolloServerErrorCode.BAD_USER_INPUT,
            },
          });
        }

        return service;
      },
    });

    t.field('deleteService', {
      type: 'Service',
      args: {
        id: nonNull(idArg()),
      },
      resolve: async (_, args, { db }) => {
        const id = parseInt(args.id, 10);
        const service = await db.service.delete({ where: { id } });

        if (!service) {
          throw new GraphQLError(`Service with id = ${id} not found`, {
            extensions: {
              code: ApolloServerErrorCode.BAD_USER_INPUT,
            },
          });
        }

        return service;
      },
    });
  },
});
