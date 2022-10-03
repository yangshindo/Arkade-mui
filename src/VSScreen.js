import { useState } from "react";
import { Slide, Fade } from "@mui/material";
import VisibilitySensor from "react-visibility-sensor";

function VSScreen() {
  const [visibility, setVisibility] = useState(false);

  function visibilityChange(isVisible) {
    if (isVisible) {
      setVisibility(true);
    }
  }

  const animateText = {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 50 },
  };

  return (
    <VisibilitySensor onChange={visibilityChange} partialVisibility="bottom">
      <div className="vs-text-div">
        <p>&nbsp;</p>
        {visibility ? <VSRender />  : null}
        {visibility? <LyricsRender /> : null}

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        
      </div>
    </VisibilitySensor>
  );
}

function VSRender() {
  return (
    <div className="vs-img-div">
      <Slide direction="right" in={true} timeout={2000}>
        <img
          src="https://i.imgur.com/pMOzx4L.png"
          alt="cover-top"
          className="cover-top"
        />
      </Slide>
      <Slide direction="left" in={true} timeout={2000}>
        <img
          src="https://imgur.com/SBogBZv.png"
          alt="cover-bottom"
          className="cover-bottom"
        />
      </Slide>
      <LyricsRender />
    </div>
  );
}

function LyricsRender() {
  return (
    <div className="lyrics-div">
    <Fade in={true} timeout={2800} style={{ transitionDelay: "1000ms" }}>
      <p className="lyrics-text">If the words made you</p>
    </Fade>
    <Fade in={true} timeout={2800} style={{ transitionDelay: "1500ms" }}>
      <p className="lyrics-text">I dont need a new world order</p>
    </Fade>
    <Fade in={true} timeout={2800} style={{ transitionDelay: "2000ms" }}>
      <p className="lyrics-text">You soon you will know</p>
    </Fade>
    <Fade in={true} timeout={2800} style={{ transitionDelay: "2500ms" }}>
      <p className="lyrics-text">
        We already know the smell of the game
      </p>
    </Fade>
    </div>
  );
}

export default VSScreen;
