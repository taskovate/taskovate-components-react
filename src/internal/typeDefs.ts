import { gql } from '@apollo/client';

const typeDefs = gql`
  extend type Query {
    starredItems: [Space]
  }
`;

export default typeDefs;