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

export const GET_SW_FILM = gql`
  query GetFilm($id: ID) {
    film(id: $id) {
      id
      title
      episodeID
      openingCrawl
    }
  }
`;
