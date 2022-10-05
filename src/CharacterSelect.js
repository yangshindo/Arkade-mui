import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

function CharacterSelect() {
  return (
    
    <div className="character-select-div">
      <br />
      <br />
      <br />
        <motion.div>
        <Box
        sx={{
          border: "solid",
          borderRadius: 3,
          borderWidth: 1,
          paddingRight: "5%",
          paddingLeft: "5%",
          paddingBottom: "5%",
          paddinTop: "1%",
          backgroundImage: "url(https://i.imgur.com/bbCesRe.png)",
          backgroundSize: "cover"
        }}
      >
        <h1 className="music-select-h1"> <span style={{color: "#950101"}}>M</span>USIC <span style={{color: "#950101"}}>S</span>ELECT</h1>
        <p className="music-select-p">Click one of the character portraits to play their theme!</p>
      <Grid container sx={{textAlign: "center" }} spacing={1}>
        <Grid item xs={4}>
        <motion.img whileHover={{
    scale: 1.05,
    transition: { duration: 0.2 },
    opacity: 1
  }} className="character-select-img" onClick="" src="https://i.imgur.com/C5kOjRF.jpg" />
        </Grid>
        <Grid item xs={4}>
          <motion.img whileHover={{
    scale: 1.05,
    transition: { duration: 0.2 },
    opacity: 1
  }} className="character-select-img"  src="https://i.imgur.com/JGCsn2Q.jpg" />
        </Grid>
        <Grid item xs={4}>
          <motion.img whileHover={{
    scale: 1.05,
    transition: { duration: 0.2 },
    opacity: 1
  }} className="character-select-img" src="https://i.imgur.com/5pNMKgi.jpg" />
        </Grid>
      </Grid>
      </Box>
      </motion.div>
      <br />
      <br />
      <br />
    </div>
  );
}


export default CharacterSelect;
