import gql from 'graphql-tag';

export const CHUCK_NORRIS_QUOTE = gql`
  query Joke($category: String!){ 
      joke(category :$category){
        categories
        icon_url
        id
        value
        url
        updated_at
      }
  }
`;
