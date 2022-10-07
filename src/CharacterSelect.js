import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { useContext } from "react";
import { MusicPlayerContext } from "./Contexts/MusicPlayerContext";
import VisibilitySensor from "react-visibility-sensor";
import useMediaQuery from "./Hooks/useMediaQuery";
import Container from "@mui/material/Container";

function CharacterSelect() {

  const isDesktop = useMediaQuery("(min-width: 769px)");

  const { setSongName, isPlayerOpen, setIsPlayerOpen } = useContext(MusicPlayerContext);

  function chaosClick(e) {
    e.stopPropagation()
    setIsPlayerOpen(true)
    setSongName("Drift - Happy Chaos Theme")
    console.log(isPlayerOpen)
  }
  function chippClick(e) {
    e.stopPropagation()
    setIsPlayerOpen(true)
    setSongName("Play The Hero - Chipp Zanuff Theme")
    console.log(isPlayerOpen)
  }
  function jackoClick(e) {
    e.stopPropagation()
    setIsPlayerOpen(true)
    setSongName("Perfection Can't Please Me - Jack-O' Theme")
    console.log(isPlayerOpen)
    
  }

  return (
    <div className={isDesktop ? "character-select-div" : "character-select-div-mobile"}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <motion.div>
      <VisibilitySensor>
       
        <Box
          className="music-select-background"
          sx={{
            border: "solid",
            borderRadius: 3,
            borderWidth: 1,
            paddingRight: "5%",
            paddingLeft: "5%",
            paddingBottom: "5%",
            paddinTop: "1%",
            backgroundSize: "cover",
          }}
        >
           <Container>
          <Grid container sx={{ textAlign: "center" }} spacing={1}>
          <Grid item xs={12}>
          <h1 className={isDesktop ? "music-select-h1" : "music-select-h1-mobile"}>
            {" "}
            <span style={{ color: "#ebebeb" }}>M</span>USIC{" "}
            <span style={{ color: "#ebebeb" }}>S</span>ELECT
          </h1>
          </Grid>
          <Grid item xs={12}>
          <p className={isDesktop ? "music-select-p" : "music-select-p-mobile"}>
            Click one of the character portraits to select a song!
          </p>
          </Grid>
          </Grid>
          <Grid container sx={{ textAlign: "center" }} spacing={4}>
            <Grid item xs={isDesktop ? 4 : 12}>
              <motion.img
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                  opacity: 1,
                }}
                className={isDesktop ? "character-select-img" : "character-select-img-mobile"}
                src="https://i.imgur.com/C5kOjRF.jpg"
                onClick={chaosClick}
              />
            </Grid>
            <Grid item xs={isDesktop ? 4 : 12}>
              <motion.img
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                  opacity: 1,
                }}
                className={isDesktop ? "character-select-img" : "character-select-img-mobile"}
                src="https://i.imgur.com/JGCsn2Q.jpg"
                onClick={chippClick}
              />
            </Grid>
            <Grid item xs={isDesktop ? 4 : 12}>
              <motion.img
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                  opacity: 1,
                }}
                className={isDesktop ? "character-select-img" : "character-select-img-mobile"}
                src="https://i.imgur.com/5pNMKgi.jpg"
                onClick={jackoClick}
              />
            </Grid>
          </Grid>
          </Container>
        </Box>
        </VisibilitySensor>
      </motion.div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default CharacterSelect;
