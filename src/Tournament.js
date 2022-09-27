import { Box, Grid } from "@mui/material/";

function Tournament() {
  return (
    <div className="tournament-div">
      <Box
        sx={{
          border: "solid",
          borderRadius: "5%",
          padding: "5%",
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Grid container spacing={10}>
          <Grid item xs={6}>
            <p className="tournament-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id."
            </p>
          </Grid>
          <Grid item xs={6}>
            <img
              src="https://i.imgur.com/dJcTjPj.png"
              alt="tournament-img"
              className="tournament-img"
            />
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Tournament;
