import { useState } from 'react';
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Slide } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import VisibilitySensor from 'react-visibility-sensor';


function ProductsCarousel(props) {

   const [visibility, setVisibility] = useState(false)

   function visibilityChange(isVisible) {
    if (isVisible) {
        setVisibility(true)
    }
   }


  const items = [
    {
      image: "https://i.imgur.com/FbMO3CI.png",
      description: "FX-A FightStick",
    },
    {
      image: "https://i.imgur.com/hPZtiBa.png",
      description: "FX-B FightStick",
    },
    {
      image: "https://i.imgur.com/iHs7A9n.png",
      description: "HITBOX",
    },
    {
      image: "https://i.imgur.com/QNg91O9.png",
      description: "Adaptable Lever Model 29B",
    },
  ];

  return (
    
    <div>
       
      <div className="products-carousel-div">
      
        <Paper sx={{ backgroundColor: "whitesmoke" }}>
            <VisibilitySensor onChange={visibilityChange} partialVisibility={(true)}>
          <Carousel>
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
          </VisibilitySensor >
          <br />
        </Paper>{" "}
        {visibility ? <div><Slide direction="left" in={true} timeout={3650}>
          <img
            src="https://i.imgur.com/5370P4I.png"
            alt="ino"
            className="ino-img"
          />
        </Slide></div>  : null}
      </div>
      
    </div>
    
  );
}

function Item(props) {
  return (
    <div>
      <img className="product-img" src={props.item.image} alt="product-img" />
      <p className="product-text">{props.item.description}</p>
      <Button
        sx={{ color: "black", borderColor: "black" }}
        variant="outlined"
        className="shopping-cart-button"
      >
        <AddShoppingCartIcon />
        &nbsp; Add to Shopping Cart
      </Button>
    </div>
  );
}

export default ProductsCarousel;
