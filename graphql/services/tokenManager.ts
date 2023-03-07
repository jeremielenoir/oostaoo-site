import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { GraphQLError } from 'graphql';
import { ApolloServerErrorCode } from '@apollo/server/errors';

export default async (
  db: PrismaClient,
  secretKey: string,
  authorization: string,
) => {
  try {
    if (!authorization.includes('Bearer ')) return null;

    const bearerLength = 'Bearer '.length;
    const token = authorization.slice(bearerLength);

    const decoded = jwt.verify(token, secretKey) as jwt.JwtPayload;

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
