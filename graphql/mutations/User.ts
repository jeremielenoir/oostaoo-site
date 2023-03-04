import {
  extendType, nonNull, stringArg, intArg, idArg,
} from 'nexus';

export default extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createUser', {
      type: 'User',
      args: {
        email: nonNull(stringArg()),
        name: nonNull(stringArg()),
        password: nonNull(stringArg()),
        role: intArg(),
      },
      resolve: (_, args, { db }) => {
        try {
          return db.user.create({
            data: {
              email: args.email,
              name: args.name,
              password: args.password,
              role: args.role || undefined,
            },
          });
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });

    t.field('updateUser', {
      type: 'User',
      args: {
        id: nonNull(idArg()),
        email: stringArg(),
        name: stringArg(),
        password: stringArg(),
        role: intArg(),
      },
      resolve: (_, args, { db }) => {
        try {
          const id = Number(args.id);
          const user = db.user.update({
            where: { id },
            data: {
              email: args.email || undefined,
              name: args.name || undefined,
              password: args.password || undefined,
              role: args.role || undefined,
            },
          });

          if (!user) {
            throw new Error(`User with id = ${id} not found`);
          }

          return user;
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });

    t.field('deleteUser', {
      type: 'User',
      args: {
        id: nonNull(idArg()),
      },
      resolve: (_, args, { db }) => {
        try {
          const id = Number(args.id);
          const user = db.user.delete({ where: { id } });

          if (!user) {
            throw new Error(`User with id = ${id} not found`);
          }

          return user;
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });
  },
});
