import { gql } from "@apollo/client";

export const GET_SW_FILMS = gql`
  query GetFilms {
    allFilms {
      films {
        title
      }
    }
  }
`;
