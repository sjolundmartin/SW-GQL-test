import { AppBar, Container, MenuItem, Toolbar } from "@mui/material";

import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};
export default function Layout(props: Props) {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
          <MenuItem onClick={() => navigate("movies")}>Movies</MenuItem>
        </Toolbar>
      </AppBar>
      <Container sx={{ p: 4, height: "100vh" }}>{props.children}</Container>
    </>
  );
}
