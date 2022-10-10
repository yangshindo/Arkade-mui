import { Box, Grid } from "@mui/material/";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import useMediaQuery from "./Hooks/useMediaQuery";

function Tournament() {

  

  const [visibility, setVisibility] = useState(false);

  function visibilityChange(isVisible) {
    if (isVisible) {
      setVisibility(true);
    }
  }

  return (
    <VisibilitySensor onChange={visibilityChange}>
      <div className="tournament-div">
        {visibility ? <TournamentRender /> : null}
      </div>
    </VisibilitySensor>
  );
}

function TournamentRender() {

  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <div>
      <motion.div
        animate={{ scale: 1 }}
        initial={{ scale: 0.5 }}
        transition={{ type: "tween", duration: 3.3 }}
      >
        <Box
          sx={{
            border: "solid",
            borderRadius: "8%",
            padding: "5%",
            backgroundSize: "cover",
            backgroundImage: "url(https://imgur.com/6qhonqP.png)" ,
            "&:hover": {
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={isDesktop ? 6 : 12}>
              <h2 className="tournament-h2">2022 WORLD TOURNAMENT</h2>
              <p className="tournament-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident."
              </p>
              <hr className="tournament-hr" />
            </Grid>
            <Grid item xs={isDesktop ? 6 : 12}>
              <img
                src="https://i.imgur.com/dJcTjPj.png"
                alt="tournament-img"
                className="tournament-img"
              />
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </div>
  );
}

export default Tournament;
