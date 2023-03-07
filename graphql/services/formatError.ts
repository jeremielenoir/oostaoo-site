import { ApolloServerErrorCode } from '@apollo/server/errors';
import { GraphQLFormattedError } from 'graphql';

export default (formattedError: GraphQLFormattedError) => {
  if (
    formattedError?.extensions?.code ===
    ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED
  ) {
    return {
      ...formattedError,
      message: "Your query doesn't match the schema. Try double-checking it!",
    };
  }

  if (formattedError.message.includes('database')) {
    return { ...formattedError, message: 'Internal server error' };
  }

  return formattedError;
};
