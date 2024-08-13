import { useQuery } from "@apollo/client";

import { Box, CircularProgress, Grid, Typography } from "@mui/material";

import {
  GetFilmsQuery,
  GetFilmsDocument,
} from "../api/graphql/generated/client/graphql";
import MovieCard from "../Components/MovieCard";

export default function MovieList() {
  const { data, loading } = useQuery<GetFilmsQuery>(GetFilmsDocument);

  if (loading && !data) {
    return <CircularProgress />;
  }

  if (!data) {
    return <Typography>No data found</Typography>;
  }

  return (
    <Box>
      <Typography variant="body1">
        <Grid container spacing={2}>
          {data?.allFilms?.films?.map((film) => {
            if (film) {
              return (
                <Grid item xs={4}>
                  <MovieCard key={film.id} movie={film} />
                </Grid>
              );
            }
            return null;
          })}
        </Grid>
      </Typography>
    </Box>
  );
}
