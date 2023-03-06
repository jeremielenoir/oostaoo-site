import bcrypt from 'bcrypt';
import {
  extendType, nonNull, stringArg, intArg, idArg,
} from 'nexus';

const saltRounds = 10;

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
      resolve: async (_, args, { db }) => {
        try {
          const foundUser = await db.user.findUnique({ where: { email: args.email } });
          if (foundUser) throw new Error('A user with this email already exists');

          return db.user.create({
            data: {
              email: args.email,
              name: args.name,
              password: bcrypt.hashSync(args.password, saltRounds),
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
      resolve: async (_, args, { db }) => {
        try {
          const id = Number(args.id);

          const foundUser = await db.user.findUnique({ where: { id } });
          if (!foundUser) {
            throw new Error(`User with id = ${id} not found`);
          }

          if (args.email) {
            const foundUserWithSameEmail = await db.user.findMany({
              where: {
                email: args.email,
                NOT: { id },
              },
            });
            if (foundUserWithSameEmail.length !== 0) {
              throw new Error('A user with this email already exists');
            }
          }

          return db.user.update({
            where: { id },
            data: {
              email: args.email || undefined,
              name: args.name || undefined,
              password: args.password ? bcrypt.hashSync(args.password, saltRounds) : undefined,
              role: args.role || undefined,
            },
          });
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
      resolve: async (_, args, { db }) => {
        try {
          const id = Number(args.id);
          const user = await db.user.delete({ where: { id } });

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
