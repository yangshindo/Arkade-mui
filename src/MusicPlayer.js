import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

function MusicPlayer() {
    



    return (
        <div className="music-player-div">
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, opacity: 0.75, "&:hover": {
            opacity: 1,
          } }} elevation={3}>
        <BottomNavigation
          showLabels
        >
          <BottomNavigationAction label="Play" icon={<PlayArrowIcon />} />
          <BottomNavigationAction label="Stop" icon={<StopIcon />} />
          <p className="song-name">Play the Hero - Chipp Zanuff Theme</p>
        </BottomNavigation>
      </Paper>
      </div>
    )
}

export default MusicPlayer


/* <nav class="navbar fixed-bottom navbar-expand-lg navbar-dark" style="background-color: #90B77D">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item">
        <audio id="sumeru" src="audio/SumeruTavern.mp3" preload="auto"></audio>
        <button class="music-player replay" onclick="document.getElementById('sumeru').currentTime = 0;"><i class="fa-solid fa-rotate-left"></i></button>
        <button class="music-player" onclick="document.getElementById('sumeru').play();"><i class="fa-solid fa-play"></i></button>
        <button class="music-player" onclick="document.getElementById('sumeru').pause();"><i class="fa-solid fa-pause"></i></button>
        <script>
          var vid = document.getElementById("sumeru");
          window.onload = function setHalfVolume() {
            vid.volume = 0.2
          }
        </script>
      </li>
    </ul>
  </nav> */