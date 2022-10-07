import { useState } from "react";
import { Slide, Fade } from "@mui/material";
import VisibilitySensor from "react-visibility-sensor";
import useMediaQuery from "./Hooks/useMediaQuery";

function VSScreen() {
  const [visibility, setVisibility] = useState(false);

  function visibilityChange(isVisible) {
    if (isVisible) {
      setVisibility(true);
    }
  }

  return (
    <VisibilitySensor onChange={visibilityChange} partialVisibility="bottom">
      <div className="vs-text-div">
        <p>&nbsp;</p>
        {visibility ? <VSRender /> : null}
        {visibility ? <LyricsRender /> : null}

        <br />
        <br />
      </div>
    </VisibilitySensor>
  );
}

function VSRender() {
  return (
    <div className="vs-img-div">
      <Slide direction="right" in={true} timeout={1500}>
        <img
          src="https://i.imgur.com/pMOzx4L.png"
          alt="cover-top"
          className="cover-top"
        />
      </Slide>
      <Slide direction="left" in={true} timeout={1500}>
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
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <div className={isDesktop ? "lyrics-div" : "lyrics-div-mobile"}>
      <Fade in={true} timeout={2800} style={{ transitionDelay: "800ms" }}>
        <p className={isDesktop ? "lyrics-text" : "lyrics-text-mobile"}>
          If the words made you
        </p>
      </Fade>
      <Fade in={true} timeout={2800} style={{ transitionDelay: "1400ms" }}>
        <p className={isDesktop ? "lyrics-text" : "lyrics-text-mobile"}>
          I dont need a new world order
        </p>
      </Fade>
      <Fade in={true} timeout={2800} style={{ transitionDelay: "2000ms" }}>
        <p className={isDesktop ? "lyrics-text" : "lyrics-text-mobile"}>
          You soon you will know
        </p>
      </Fade>
      <Fade in={true} timeout={2800} style={{ transitionDelay: "2600ms" }}>
        <p className={isDesktop ? "lyrics-text" : "lyrics-text-mobile"}>
          We already know the smell of the game!
        </p>
      </Fade>
      <Fade
        in={true}
        timeout={2800}
        style={{
          transitionDelay: "2900ms",
          fontSize: "400%",
          lineHeight: "1%",
        }}
      >
        {isDesktop ? <p className="lyrics-text">♫</p> : <p></p>}
      </Fade>
      <div className="album-sale-div"></div>
    </div>
  );
}

export default VSScreen;
