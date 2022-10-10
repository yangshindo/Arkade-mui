import BottomNavigation from "@mui/material/BottomNavigation";
import Paper from "@mui/material/Paper";
import { useContext, useState } from "react";
import { MusicPlayerContext } from "./Contexts/MusicPlayerContext";
import { Slide } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function MusicPlayer() {

  const {isPlayerOpen, setIsPlayerOpen, songName} = useContext(MusicPlayerContext);

  let songSource = ""
  if (songName === "Drift - Happy Chaos Theme") {
      songSource = "https://audio.jukehost.co.uk/a4b8yEV3YCFCxrRyuf0zgQlgTDmfJbYH"
    }
  if (songName === "Play The Hero - Chipp Zanuff Theme") {
    songSource = "https://audio.jukehost.co.uk/ZBf5lJo4sVfpNdP1zIsp9DI3Idok2N8c"
  } 
  if (songName === "Perfection Can't Please Me - Jack-O' Theme") {
    songSource = "https://audio.jukehost.co.uk/3q6m9g7ehzomGCtlonsQSS4YNQS0u2H2"
  }



  return (
<Slide direction="up" in={isPlayerOpen} timeout={2000} >
<Paper
  sx={{
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
    },
  }}
  elevation={3}
>
  <BottomNavigation showLabels>
    <audio
      id="audio1"
      controls="controls"
      preload="auto"
      src={songSource}
      type="audio/mp3"
    ></audio>
    <p className="song-name">{songName}</p>
    <p>
    &nbsp;
    &nbsp;&nbsp;</p>
    <IconButton onClick={() => setIsPlayerOpen(false)}><CloseIcon /></IconButton>
  </BottomNavigation>
</Paper>
</Slide>
  
  );
}

export default MusicPlayer;


