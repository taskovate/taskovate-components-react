import gql from 'graphql-tag';

export const GET_STARRED_ITEMS = gql`
  query GetStarredItems {
    starredItems @client
  }
`;