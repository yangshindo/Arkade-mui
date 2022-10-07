import Slide from "@mui/material/Slide";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import useMediaQuery from "./Hooks/useMediaQuery";

function HeroText() {

  const isDesktop = useMediaQuery('(min-width: 769px)');

  return (

    <div className="herotext-div">
      <Slide direction="right" in="true" timeout={2500} >
        <h1 className={isDesktop ? "hero-h1-1" : "hero-h1-1-mobile"}>MATERIAL UI </h1>
      </Slide>
      <Slide direction="left" in="true" timeout={2500}>
        <h1 className={isDesktop ? "hero-h1-2" : "hero-h1-2-mobile"}>FRAMER MOTION</h1>
      </Slide>
      <div className="hero-img-div">
        <Fade in={true} timeout={2800} style={{transitionDelay: '2500ms'}}>
          <img
            className={isDesktop ? "hero-letsrock" : "hero-letsrock-mobile" }
            src="https://i.imgur.com/xd7SOG7.png"
            alt="hero-letsrock"
          ></img>
        </Fade>
        <Fade in={true} timeout={2800} style={{transitionDelay: '2500ms'}}>
          <img
            className={isDesktop ? "hero-slash" : "hero-slash-mobile" }
            src="https://i.imgur.com/YzATa3o.png"
            alt="hero-slash"
          ></img>
        </Fade>
      </div>
      <div className="expand-more-icon">
        <br />
        <br />
        <ExpandMoreIcon
          sx={{ color: "white", fontSize: "600%", textAlign: "center" }}
        />
      </div>
    </div>

  );
}

export default HeroText;
