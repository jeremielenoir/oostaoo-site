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
      resolve: (_, args, { db }) => {
        try {
          return db.service.create({
            data: {
              title: args.title,
              visibility: args.visibility,
              description: args.description || undefined,
            },
          });
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });

    t.field('updateService', {
      type: 'Service',
      args: {
        id: nonNull(idArg()),
        title: stringArg(),
        visibility: booleanArg(),
        description: stringArg(),
      },
      resolve: (_, args, { db }) => {
        try {
          const id = Number(args.id);
          const service = db.service.update({
            where: { id },
            data: {
              title: args.title || undefined,
              visibility: args.visibility || undefined,
              description: args.description || undefined,
            },
          });

          if (!service) {
            throw new Error(`Service with id = ${id} not found`);
          }

          return service;
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });

    t.field('deleteService', {
      type: 'Service',
      args: {
        id: nonNull(idArg()),
      },
      resolve: (_, args, { db }) => {
        try {
          const id = Number(args.id);
          const service = db.service.delete({ where: { id } });

          if (!service) {
            throw new Error(`Service with id = ${id} not found`);
          }

          return service;
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });
  },
});
