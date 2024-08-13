import { AppBar, Box, Container, MenuItem, Toolbar } from "@mui/material";

import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};
export default function Layout(props: Props) {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
          <MenuItem onClick={() => navigate("test")}>Test page</MenuItem>
        </Toolbar>
      </AppBar>
      <Container sx={{ p: 4 }}>{props.children}</Container>
    </Box>
  );
}
