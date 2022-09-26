import Slide from '@mui/material/Slide';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

function HeroText() {


  return (
    <div>
        <Slide direction='right' in="true" timeout={2500}><h1 className="hero-h1-1">MATERIAL UI </h1></Slide>
        <Slide direction='left' in="true" timeout={2500}><h1 className="hero-h1-2">DEMONSTRATION</h1></Slide>
        <Fade in={true} timeout={3500}><img className="hero-letsrock" src="https://i.imgur.com/jvEhD9d.png" alt="hero-letsrock"></img></Fade>
        <div className="expand-more-icon">
        <ExpandMoreIcon sx={{ color: "white", fontSize: "600%", textAlign: "center" }} />
        </div>
    </div>
  );
}

export default HeroText