import { GraphQLError } from 'graphql';
import { ApolloServerErrorCode } from '@apollo/server/errors';
import {
  extendType, nonNull, stringArg, idArg, booleanArg,
} from 'nexus';

export default extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createSkill', {
      type: 'Skill',
      args: {
        title: nonNull(stringArg()),
        visibility: nonNull(booleanArg()),
        description: stringArg(),
        logo: stringArg(),
      },
      resolve: async (_, args, { db }) => db.skill.create({
        data: {
          title: args.title,
          visibility: args.visibility,
          description: args.description || undefined,
          logo: args.logo || undefined,
        },
      }),
    });

    t.field('updateSkill', {
      type: 'Skill',
      args: {
        id: nonNull(idArg()),
        title: stringArg(),
        visibility: booleanArg(),
        description: stringArg(),
        logo: stringArg(),
      },
      resolve: async (_, args, { db }) => {
        const id = parseInt(args.id, 10);
        const skill = await db.skill.update({
          where: { id },
          data: {
            title: args.title || undefined,
            visibility: args.visibility || undefined,
            description: args.description || undefined,
            logo: args.logo || undefined,
          },
        });

        if (!skill) {
          throw new GraphQLError(`Skill with id = ${id} not found`, {
            extensions: {
              code: ApolloServerErrorCode.BAD_REQUEST,
            },
          });
        }

        return skill;
      },
    });

    t.field('deleteSkill', {
      type: 'Skill',
      args: {
        id: nonNull(idArg()),
      },
      resolve: async (_, args, { db }) => {
        const id = parseInt(args.id, 10);
        const skill = await db.skill.delete({ where: { id } });

        if (!skill) {
          throw new GraphQLError(`Skill with id = ${id} not found`, {
            extensions: {
              code: ApolloServerErrorCode.BAD_REQUEST,
            },
          });
        }

        return skill;
      },
    });
  },
});
