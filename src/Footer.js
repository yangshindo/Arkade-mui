import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import { Slide, Fade } from "@mui/material";

function Footer() {
  const [visibility, setVisibility] = useState(false);

  function visibilityChange(isVisible) {
    if (isVisible) {
      setVisibility(true);
    }
  }

  return (
    <div>
        <VisibilitySensor onChange={visibilityChange}>
      <div className="footer-div">
        <br />
        <br />
        {visibility ? (
          <div>
            <Fade in={true} timeout={4300}>
              <img
                alt="speechbubble-img"
                className="speechbubble-img"
                src="https://i.imgur.com/YQVkr6W.png"
              />
            </Fade>
            <Slide direction="left" in={visibility} timeout={500}>
              <img
                alt="chibimay-img"
                className="chibimay-img"
                src="https://i.imgur.com/EysIyUj.png"
              />
            </Slide>
          </div>
        ) : null}

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

export default Footer;