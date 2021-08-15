import fs from 'fs';
import path from 'path';
import { ApolloServer, gql } from 'apollo-server';
import { Resolvers } from '../types/graphql-resolver-types'
import { Query } from './query'
import { Mutation } from './mutation'
const PORT = 4040;

const typeDefs = fs
  .readFileSync(path.join(__dirname, '../../graphql/schema.graphql'))
  .toString();

export const resolvers: Resolvers = {
  Query,
  Mutation,
};

const server = new ApolloServer({
  typeDefs: gql`${typeDefs}`,
  resolvers
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});