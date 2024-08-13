import { gql } from "@apollo/client";

export const GET_SW_FILMS = gql`
  query GetFilms {
    allFilms {
      films {
        id
        title
        episodeID
        director
        producers
        releaseDate
        created
        edited
      }
    }
  }
`;
