import Carousel from "react-material-ui-carousel";
import Grid from "@mui/material/Grid";

//MAKE FOREGROUND MOVE FASTER THAN BACKGROUND

function WhoWeAre() {
  return (
    <div className="whoweare-div">
      <br />
      <br />
      <br />
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Carousel
            interval={4000}
            indicators={false}
            navButtonsAlwaysInvisible={true}
          >
            <img
              className="carousel-round-img"
              src="https://i.imgur.com/XGyZjaZ.png"
              alt="prepare.png"
            ></img>
            <img
              className="carousel-round-img"
              src="https://i.imgur.com/9qd4ABQ.png"
              alt="hit.png"
            ></img>
          </Carousel>
        </Grid>
        <Grid item xs={6}>
          <p className="carousel-title-text">THE BEST FIGHT EVER!</p>
          <p className="carousel-side-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in"
      
          </p>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
    </div>
  );
}

export default WhoWeAre;
