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
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <div className="vs-img-div">
      <Slide direction="right" in={true} timeout={3000} style={{ transitionDelay: "1800ms" }}>
        <img
          src={
            isDesktop
              ? "https://i.imgur.com/pMOzx4L.png"
              : "https://imgur.com/mGoQlsQ.png"
          }
          alt="cover-top"
          className={isDesktop ? "cover-top" : "cover"}
        />
      </Slide>
      {isDesktop ? (
        <Slide direction="left" in={true} timeout={3000} style={{ transitionDelay: "1800ms" }}>
          <img
            src="https://imgur.com/SBogBZv.png"
            alt="cover-bottom"
            className="cover-bottom"
          />
        </Slide>
      ) : null}

      <LyricsRender />
    </div>
  );
}

function LyricsRender() {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <div className="lyrics-div">
      <Fade in={true} timeout={2800} style={{ transitionDelay: "800ms" }}>
        <p className="lyrics-text">
          If the words made you
        </p>
      </Fade>
      <Fade in={true} timeout={2800} style={{ transitionDelay: "1500ms" }}>
        <p className="lyrics-text">
          I dont need a new world order
        </p>
      </Fade>
      <Fade in={true} timeout={2800} style={{ transitionDelay: "2100ms" }}>
        <p className="lyrics-text">
          You soon you will know
        </p>
      </Fade>
      <Fade in={true} timeout={2800} style={{ transitionDelay: "2700ms" }}>
        <p className="lyrics-text">
          We already know the smell of the game!
        </p>
      </Fade>
      <Fade
        in={true}
        timeout={3000}
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
