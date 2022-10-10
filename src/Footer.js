import VisibilitySensor from "react-visibility-sensor";
import { useState, useContext } from "react";
import { Slide, Fade } from "@mui/material";
import useMediaQuery from "./Hooks/useMediaQuery";
import { MusicPlayerContext } from "./Contexts/MusicPlayerContext";

function Footer() {

  const [visibility, setVisibility] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 769px)");

  function visibilityChange(isVisible) {
    if (isVisible) {
      if (isDesktop) {
      setVisibility(true)};
    }
  }

  return (
    <div>
        <VisibilitySensor onChange={visibilityChange}>
      <div className="footer-div">
        <br />
        <br />
        {visibility ?
          <MayAnimation />
         : null}
        <p className="footer-text">
          Privacy Policy &nbsp; / &nbsp; Terms of Use &nbsp; / &nbsp; Data
          Disclaimer
        </p>

        <p className="footer-text">João Mário - 2022</p>
      </div>
      </VisibilitySensor>
    </div>
  );
}

function MayAnimation() {

  const isPlayerOpen = useContext(MusicPlayerContext);


  return (
<div>
            <Fade in={true} timeout={4300}>
              <img
                alt="speechbubble-img"
                className="speechbubble-img"
                src="https://i.imgur.com/YQVkr6W.png"
              />
            </Fade>
            <Slide direction="left" in={true} timeout={500}>
              <img
                alt="chibimay-img"
                className="chibimay-img"
                src="https://i.imgur.com/EysIyUj.png"
              />
            </Slide>
            
          </div>
  )
}

export default Footer;