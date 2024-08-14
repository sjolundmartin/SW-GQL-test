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
        bgcolor: "grey.600",
        color: "white",
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
        <MovieIcon fontSize="large" sx={{ color: "black" }} />
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
        <Typography variant="body2" color="grey.400">
          {"Released " + moment(releaseDate).format("MMMM Do YYYY")}
        </Typography>
        <Stack sx={{ mt: 4 }} alignItems="center">
          <Typography variant="caption" color="grey.400">
            Director
          </Typography>
          <Typography variant="body1">{director}</Typography>
        </Stack>
        <Stack sx={{ mt: 1 }} alignItems="center">
          <Typography variant="caption" color="grey.400">
            Producers
          </Typography>
          <Stack alignItems="center">
            {producers?.map((producer) => (
              <Typography variant="body1">{producer}</Typography>
            ))}
          </Stack>
        </Stack>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          sx={{ bgcolor: "black" }}
          onClick={() => navigate(id)}
        >
          Opening crawl
        </Button>
      </CardActions>
    </Card>
  );
}
