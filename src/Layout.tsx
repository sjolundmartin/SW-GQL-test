import { Box, Container, Typography } from "@mui/material";

import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
};
export default function Layout(props: Props) {
  return (
    <>
      {!props.disabled && (
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
      )}
      <Container
        sx={{
          p: 4,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {props.children}
      </Container>
    </>
  );
}
