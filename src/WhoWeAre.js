
import Carousel from "react-material-ui-carousel";
import Grid from '@mui/material/Grid';

//MAKE FOREGROUND MOVE FASTER THAN BACKGROUND

function WhoWeAre() {
  /*
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
} 
*/


  return (
    
      <Grid container spacing={2}>
  <Grid item xs={6}>
<Carousel interval={5000} indicators={false} navButtonsAlwaysInvisible={true}>
      <img className="carousel-round-img" src='https://i.imgur.com/XGyZjaZ.png' alt='prepare.png'></img>
      <img className="carousel-round-img" src='https://i.imgur.com/9qd4ABQ.png' alt='hit.png'></img>
    </Carousel>
  </Grid>
  <Grid item xs={6}>
    <p className="carousel-side-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id."</p>
  </Grid>
</Grid>
  );
}

export default WhoWeAre;
