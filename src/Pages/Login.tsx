import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function Login() {
  return (
    <Paper sx={{ p: 2, height: "400px", width: "70%", minWidth: "400px" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: "200px",
          }}
        >
          <Stack spacing={1}>
            <Typography variant="h4" fontWeight="bold">
              Star Wars Movie List
            </Typography>
            <Typography variant="subtitle2" color="grey.600">
              The full list of Star Wars movies (sequals and prequals)
            </Typography>
          </Stack>
        </Grid>
        <Grid
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Stack spacing={2} sx={{ width: "100%", p: 4 }}>
            <Typography variant="h4">Login</Typography>
            <TextField placeholder="Username" fullWidth />
            <TextField placeholder="Password" type="password" fullWidth />
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Button
                variant="contained"
                sx={{ bgcolor: "black", color: "yellow" }}
              >
                Login
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}
