import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { LocalMoviesOutlined as MovieIcon } from "@mui/icons-material";
import { Film } from "../api/graphql/generated/graphql";
import moment from "moment";
import { useNavigate } from "react-router-dom";

type Props = {
  movie: Film;
};

export default function MovieCard(props: Props) {
  const { movie } = props;
  const { id, title, episodeID, releaseDate, director, producers } = movie;

  const navigate = useNavigate();

  return (
    <Card
      sx={{
        borderRadius: "12px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100px",
          p: 0,
          bgcolor: "grey.200",
        }}
      >
        <MovieIcon fontSize="large" />
      </CardContent>
      <CardContent sx={{ flexGrow: "1" }}>
        <Stack spacing={1} direction="row">
          <Typography variant="h6" fontWeight="600">
            {"Episode " + episodeID + ": "}
          </Typography>
          <Typography variant="h6" fontWeight="500">
            {title}
          </Typography>
        </Stack>
        <Typography variant="body2" color="grey.500">
          {"Released " + moment(releaseDate).format("MMMM Do YYYY")}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Typography variant="body1" fontWeight="bold">
            Director:
          </Typography>
          <Typography variant="body1">{director}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          <Typography variant="body1" fontWeight="bold">
            Producers:
          </Typography>
          <Stack>
            {producers?.map((producer) => (
              <Typography variant="body1">{producer}</Typography>
            ))}
          </Stack>
        </Stack>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          color="warning"
          onClick={() => navigate(id)}
        >
          Opening crawl
        </Button>
      </CardActions>
    </Card>
  );
}
