import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import type { User } from '@prisma/client';
import { GraphQLError } from 'graphql';
import { ApolloServerErrorCode } from '@apollo/server/errors';
import type { NextApiResponse } from 'next';
import setCookie from './setCookie';

const EXPIRATION_IN_SECONDS = 60 * 60 * 24; // 1 day
const SECRET_TOKEN_KEY = process.env.SECRET_TOKEN_KEY!;

export const createTokenAndCookie = (
  payload: Omit<User, 'password'>,
  response: NextApiResponse,
) => {
  if (!SECRET_TOKEN_KEY) {
    throw new GraphQLError('Internal server error', {
      extensions: {
        code: ApolloServerErrorCode.INTERNAL_SERVER_ERROR,
      },
    });
  }

  const token = jwt.sign(
    payload,
    SECRET_TOKEN_KEY,
    { expiresIn: EXPIRATION_IN_SECONDS },
  );

  setCookie(response, 'auth-token', token, {
    maxAge: EXPIRATION_IN_SECONDS,
  });

  const cookie = response.getHeader('Set-Cookie');

  return cookie;
};

export const verifyTokenAndGetUser = async (
  db: PrismaClient,
  token: string,
) => {
  try {
    if (!SECRET_TOKEN_KEY) {
      throw new GraphQLError('Internal server error', {
        extensions: {
          code: ApolloServerErrorCode.INTERNAL_SERVER_ERROR,
        },
      });
    }

    const decoded = jwt.verify(token, SECRET_TOKEN_KEY) as jwt.JwtPayload;

    if (!decoded || (decoded && !('id' in decoded))) {
      throw new GraphQLError('Invalid token', {
        extensions: {
          code: ApolloServerErrorCode.BAD_REQUEST,
        },
      });
    }

    const { id } = decoded as { id: number };
    const user = await db.user.findUnique({ where: { id } });

    if (!user) {
      throw new GraphQLError('Invalid token', {
        extensions: {
          code: ApolloServerErrorCode.BAD_REQUEST,
        },
      });
    }

    return user;
  } catch (error) {
    if (error instanceof GraphQLError) {
      return error;
    }

    return new Error('Internal server error');
  }
};
