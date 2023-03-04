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
      resolve: (_, args, { db }) => {
        try {
          return db.skill.create({
            data: {
              title: args.title,
              visibility: args.visibility,
              description: args.description || undefined,
              logo: args.logo || undefined,
            },
          });
        } catch (error) {
          throw Error(`${error}`);
        }
      },
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
      resolve: (_, args, { db }) => {
        try {
          const id = Number(args.id);
          const skill = db.skill.update({
            where: { id },
            data: {
              title: args.title || undefined,
              visibility: args.visibility || undefined,
              description: args.description || undefined,
              logo: args.logo || undefined,
            },
          });

          if (!skill) {
            throw new Error(`Skill with id = ${id} not found`);
          }

          return skill;
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });

    t.field('deleteSkill', {
      type: 'Skill',
      args: {
        id: nonNull(idArg()),
      },
      resolve: (_, args, { db }) => {
        try {
          const id = Number(args.id);
          const skill = db.skill.delete({ where: { id } });

          if (!skill) {
            throw new Error(`Skill with id = ${id} not found`);
          }

          return skill;
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });
  },
});
