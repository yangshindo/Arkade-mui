import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

function CharacterSelect() {
  return (
    <div className="character-select-div">
        <motion.div>
        <Box
        sx={{
          border: "solid",
          borderRadius: 3,
          borderWidth: 1,
          padding: "5%",
          backgroundImage: "url(https://i.imgur.com/bbCesRe.png)",
          opacity: 0.8,
          backgroundSize: "cover",
        }}
      >
        <h1 className="music-select-h1"> MUSIC SELECT</h1>
        <p className="music-select-p">Click one of the characters to play their theme!</p>
      <Grid container spacing={0}>
        <Grid item xs={4}>
        <motion.img whileHover={{
    scale: 1.05,
    transition: { duration: 0.2 },
  }} className="character-select-img" onClick="" src="https://i.imgur.com/C5kOjRF.jpg" />
        </Grid>
        <Grid item xs={4}>
          <motion.img whileHover={{
    scale: 1.05,
    transition: { duration: 0.2 },
  }} className="character-select-img"  src="https://i.imgur.com/JGCsn2Q.jpg" />
        </Grid>
        <Grid item xs={4}>
          <motion.img whileHover={{
    scale: 1.05,
    transition: { duration: 0.2 },
  }} className="character-select-img" src="https://i.imgur.com/5pNMKgi.jpg" />
        </Grid>
      </Grid>
      </Box>
      </motion.div>
    </div>
  );
}

export default CharacterSelect;
