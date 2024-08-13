import { Box, Container, Typography } from "@mui/material";

import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};
export default function Layout(props: Props) {
  return (
    <>
      <Box display="flex" justifyContent="center" padding={4}>
        <Typography
          variant="h2"
          color="yellow"
          align="center"
          component={Link}
          to="/"
          sx={{ textDecoration: "none" }}
        >
          Star Wars Movie List
        </Typography>
      </Box>
      <Container sx={{ p: 4, height: "100vh" }}>{props.children}</Container>
    </>
  );
}
