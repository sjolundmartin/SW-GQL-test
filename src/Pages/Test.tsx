import {
  Box,
  CircularProgress,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { GET_SW_FILMS } from "../api/graphql/queries/sw";
import { useQuery } from "@apollo/client";
import { GetFilmsQuery } from "../api/graphql/generated/client/graphql";

export default function Test() {
  const { data, loading } = useQuery<GetFilmsQuery>(GET_SW_FILMS);

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
          {data?.allFilms?.films?.map((film) => (
            <ListItem> {film?.title}</ListItem>
          ))}
        </List>
      </Typography>
    </Box>
  );
}
