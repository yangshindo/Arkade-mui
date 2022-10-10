import Carousel from "react-material-ui-carousel";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import useMediaQuery from "./Hooks/useMediaQuery";

function WhoWeAre() {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  const [visibility, setVisibility] = useState(false);

  function visibilityChange(isVisible) {
    if (isVisible) {
      setVisibility(true);
    }
  }

  return (
    <div className="whoweare-div">
      <br />
      <br />
      <br />
      <Grid container spacing={isDesktop ? 0 : 0}>
        <VisibilitySensor onChange={visibilityChange}>
          <Grid item xs={isDesktop ? 7 : 12}>
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
        </VisibilitySensor>
        <Grid item xs={isDesktop ? 5 : 12}>
          <br />
          <br />

          {visibility ? (
            <motion.div
              animate={{ scale: 1 }}
              initial={{ scale: 2 }}
              transition={{ type: "tween", duration: 0.4 }}
            >
              <p className="carousel-title-text">THE BEST FIGHT EVER!</p>
            </motion.div>
          ) : (
            <div>
              <br />
              <br />
              <br /> <br /> <br />
              <br />
              <br />
              <br /> <br /> <br />
            </div>
          )}

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
