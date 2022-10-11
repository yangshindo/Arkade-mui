import Slide from "@mui/material/Slide";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";


function HeroText() {


  return (

    <div className="herotext-div">
      <Slide direction="right" in="true" timeout={2500} >
        <h1 className="hero-h1-1">MATERIAL UI </h1>
      </Slide>
      <Slide direction="left" in="true" timeout={2500}>
        <h1 className="hero-h1-2">FRAMER MOTION</h1>
      </Slide>
      <div className="hero-img-div">
        <Fade in={true} timeout={2800} style={{transitionDelay: '2500ms'}}>
          <img
            className="hero-letsrock" 
            src="https://i.imgur.com/xd7SOG7.png"
            alt="hero-letsrock"
          ></img>
        </Fade>
        <Fade in={true} timeout={2800} style={{transitionDelay: '2500ms'}}>
          <img
            className="hero-slash"
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
