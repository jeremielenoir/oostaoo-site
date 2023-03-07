import { GraphQLError } from 'graphql';
import { ApolloServerErrorCode } from '@apollo/server/errors';
import {
  extendType, nonNull, stringArg, idArg, booleanArg,
} from 'nexus';

export default extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createReference', {
      type: 'Reference',
      args: {
        title: nonNull(stringArg()),
        visibility: nonNull(booleanArg()),
        logo: stringArg(),
      },
      resolve: async (_, args, { db }) => db.reference.create({
        data: {
          title: args.title,
          visibility: args.visibility,
          logo: args.description || undefined,
        },
      }),
    });

    t.field('updateReference', {
      type: 'Reference',
      args: {
        id: nonNull(idArg()),
        title: stringArg(),
        visibility: booleanArg(),
        logo: stringArg(),
      },
      resolve: async (_, args, { db }) => {
        const id = parseInt(args.id, 10);
        const reference = await db.reference.update({
          where: { id },
          data: {
            title: args.title || undefined,
            visibility: args.visibility || undefined,
            logo: args.description || undefined,
          },
        });

        if (!reference) {
          throw new GraphQLError(`Reference with id = ${id} not found`, {
            extensions: {
              code: ApolloServerErrorCode.BAD_REQUEST,
            },
          });
        }

        return reference;
      },
    });

    t.field('deleteReference', {
      type: 'Reference',
      args: {
        id: nonNull(idArg()),
      },
      resolve: async (_, args, { db }) => {
        const id = parseInt(args.id, 10);
        const reference = await db.reference.delete({ where: { id } });

        if (!reference) {
          throw new GraphQLError(`Reference with id = ${id} not found`, {
            extensions: {
              code: ApolloServerErrorCode.BAD_REQUEST,
            },
          });
        }

        return reference;
      },
    });
  },
});
