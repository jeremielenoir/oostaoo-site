import bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';
import { ApolloServerErrorCode } from '@apollo/server/errors';
import {
  extendType, nonNull, stringArg, intArg, idArg,
} from 'nexus';

import { createTokenAndCookie } from '../services/tokenManager';
import setCookie from '../services/setCookie';

const saltRounds = 10;

export default extendType({
  type: 'Mutation',
  definition(t) {
    t.field('login', {
      type: 'User',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_, args, { db, response }) => {
        const foundUser = await db.user.findUnique({ where: { email: args.email } });

        const match = foundUser && await bcrypt.compare(args.password, foundUser.password);
        if (!match) {
          throw new GraphQLError('Invalid credentials', {
            extensions: {
              code: ApolloServerErrorCode.BAD_USER_INPUT,
            },
          });
        }

        const { password, ...user } = foundUser;
        createTokenAndCookie(user, response);

        return user;
      },
    });

    t.field('logout', {
      type: 'User',
      resolve: async (_, __, { response, user }) => {
        setCookie(response, 'auth-token', null, {
          maxAge: -1,
        });

        return user;
      },
    });

    t.field('createUser', {
      type: 'User',
      args: {
        email: nonNull(stringArg()),
        name: nonNull(stringArg()),
        password: nonNull(stringArg()),
        role: nonNull(intArg()),
      },
      resolve: async (_, args, { db }) => {
        const foundUser = await db.user.findUnique({ where: { email: args.email } });
        if (foundUser) {
          throw new GraphQLError('A user with this email already exists', {
            extensions: {
              code: ApolloServerErrorCode.BAD_USER_INPUT,
            },
          });
        }

        return db.user.create({
          data: {
            email: args.email,
            name: args.name,
            password: bcrypt.hashSync(args.password, saltRounds),
            role: args.role || undefined,
          },
        });
      },
    });

    t.field('updateUser', {
      type: 'User',
      args: {
        id: nonNull(stringArg()),
        email: stringArg(),
        name: stringArg(),
        password: stringArg(),
        role: intArg(),
      },
      resolve: async (_, args, { db, user }) => {
        const id = parseInt(args.id, 10);

        if (!user || !('id' in user)) {
          throw new GraphQLError('Unauthorized', {
            extensions: {
              code: ApolloServerErrorCode.BAD_REQUEST,
            },
          });
        }

        const foundUser = await db.user.findUnique({ where: { id } });
        if (!foundUser) {
          throw new GraphQLError(`User with id = ${id} not found`, {
            extensions: {
              code: ApolloServerErrorCode.BAD_USER_INPUT,
            },
          });
        }

        if (args.email) {
          const foundUserWithSameEmail = await db.user.findMany({
            where: {
              email: args.email,
              NOT: { id },
            },
          });
          if (foundUserWithSameEmail.length !== 0) {
            throw new GraphQLError('A user with this email already exists', {
              extensions: {
                code: ApolloServerErrorCode.BAD_USER_INPUT,
              },
            });
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
      },
    });

    t.field('deleteUser', {
      type: 'User',
      args: {
        id: nonNull(idArg()),
      },
      resolve: async (_, args, { db }) => {
        const id = Number(args.id);
        const user = await db.user.delete({ where: { id } });

        if (!user) {
          throw new GraphQLError(`User with id = ${id} not found`, {
            extensions: {
              code: ApolloServerErrorCode.BAD_USER_INPUT,
            },
          });
        }

        return user;
      },
    });
  },
});