import { Box, Grid, Fade } from "@mui/material/";


function Tournament() {
  return (
    <div className="tournament-div">
      <Fade in={true} timeout={2500}>
      <Box
        sx={{
          border: "solid",
          borderRadius: "8%",
          padding: "5%",
          backgroundColor: "#950101",
          "&:hover": {
            backgroundColor: "#950101",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Grid container spacing={10}>
          <Grid item xs={5.5}>
            <h2 className="tournament-h2">2022 WORLD TOURNAMENT</h2>
            <p className="tournament-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            </p>
            <hr className="tournament-hr" />
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
      </Fade>
    </div>
  );
}

export default Tournament;
