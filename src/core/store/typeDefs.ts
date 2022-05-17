import { gql } from '@apollo/client';

const typeDefs = gql`
  type Space {
    id: ID!
    value: String!
    label: String!
    image: String!
  }
  
  extend type Query {
    starredItems: [Space]
  }
`;

export default typeDefs;