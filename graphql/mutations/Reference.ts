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
      resolve: (_, args, { db }) => {
        try {
          return db.reference.create({
            data: {
              title: args.title,
              visibility: args.visibility,
              logo: args.description || undefined,
            },
          });
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });

    t.field('updateReference', {
      type: 'Reference',
      args: {
        id: nonNull(idArg()),
        title: stringArg(),
        visibility: booleanArg(),
        logo: stringArg(),
      },
      resolve: (_, args, { db }) => {
        try {
          const id = Number(args.id);
          const reference = db.reference.update({
            where: { id },
            data: {
              title: args.title || undefined,
              visibility: args.visibility || undefined,
              logo: args.description || undefined,
            },
          });

          if (!reference) {
            throw new Error(`Reference with id = ${id} not found`);
          }

          return reference;
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });

    t.field('deleteReference', {
      type: 'Reference',
      args: {
        id: nonNull(idArg()),
      },
      resolve: (_, args, { db }) => {
        try {
          const id = Number(args.id);
          const reference = db.reference.delete({ where: { id } });

          if (!reference) {
            throw new Error(`Reference with id = ${id} not found`);
          }

          return reference;
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });
  },
});
