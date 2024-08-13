import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { Box, CircularProgress, Typography } from "@mui/material";

import {
  GetFilmDocument,
  GetFilmQuery,
} from "../api/graphql/generated/client/graphql";

export default function OpeningCrawl() {
  const { id = "" } = useParams();

  const { data, loading } = useQuery<GetFilmQuery>(GetFilmDocument, {
    variables: { id },
  });

  const { openingCrawl, title, episodeID } = data?.film ?? {};

  const newLineText = openingCrawl?.split("\n");

  if (loading) return <CircularProgress />;

  return (
    <Box sx={{ pb: "100px" }}>
      <Typography
        align="center"
        color="yellow"
        variant="h2"
        fontWeight="bold"
        sx={{ mb: "64px" }}
      >
        {"Episode " + episodeID + ": " + title}
      </Typography>
      {newLineText?.map((t) => (
        <>
          <Typography
            align="center"
            variant="h3"
            fontWeight="bold"
            color="yellow"
          >
            {t}
          </Typography>
          <br />
        </>
      ))}
    </Box>
  );
}
