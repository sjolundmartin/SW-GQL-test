import {
  Box,
  CircularProgress,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { GET_SW_FILMS } from "../Queries/data";
import { useQuery } from "@apollo/client";

export default function Test() {
  const { data, loading } = useQuery(GET_SW_FILMS);

  if (loading && !data) {
    return <CircularProgress />;
  }

  if (!data) {
    return <Typography>No data found</Typography>;
  }
  return (
    <Box>
      <Typography variant="body1">
        <List>
          {data.allFilms.films.map((film: { title: string }) => (
            <ListItem> {film.title}</ListItem>
          ))}
        </List>
      </Typography>
    </Box>
  );
}
