import Slide from '@mui/material/Slide';

function HeroText() {
  return (
    <div>
        <Slide direction='right' in="true" timeout={2500}><h1 className="hero-h1-1">THE BEST FUN </h1></Slide>
        <Slide direction='left' in="true" timeout={2500}><h1 className="hero-h1-2">YOU EVER HAD!</h1></Slide>
    </div>
  );
}

export default HeroText