import {
  mutationType, nonNull, stringArg, intArg, idArg,
} from 'nexus';

const Mutation = mutationType({
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

          // throw new GraphQLError(`${error}`, {
          //   extensions: {
          //     code: ApolloServerErrorCode.INTERNAL_SERVER_ERROR,
          //     http: {
          //       status: 500,
          //     },
          //   },
          // });
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
          return db.user.update({
            where: { id },
            data: {
              email: args.email || undefined,
              name: args.name || undefined,
              password: args.password || undefined,
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
      resolve: (_, args, { db }) => {
        try {
          const id = Number(args.id);
          return db.user.delete({
            where: { id },
          });
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });
  },
});

export default Mutation;
