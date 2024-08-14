import { useNavigate } from "react-router-dom";

import { Button, Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Stack spacing={4}>
      <Typography color="yellow" variant="h6">
        This React SPA is developed by Martin Sjölund and is a POC for React
        Apollo and GraphQL
      </Typography>

      <div>
        <Button
          variant="contained"
          sx={{ bgcolor: "yellow", color: "black" }}
          onClick={() => navigate("movies")}
          endIcon={<ArrowForward />}
        >
          Go to Movies
        </Button>
      </div>

      <div>
        <Typography color="yellow" variant="h6">
          Check out{" "}
          <a href="https://www.apollographql.com/docs/react/">Apollo</a>
        </Typography>

        <Typography color="yellow" variant="h6">
          Check out the{" "}
          <a href="https://github.com/graphql/swapi-graphql">GraphQL API</a>
        </Typography>
      </div>
    </Stack>
  );
}
