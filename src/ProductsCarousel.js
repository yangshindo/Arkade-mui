import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function ProductsCarousel(props)
{
    const items = [
       
        {
            image: "https://i.imgur.com/FbMO3CI.png",
            description: "FX-A FightStick"
        },
        {
            image: "https://i.imgur.com/hPZtiBa.png",
            description: "FX-B FightStick"
        },
        {
            image: "https://i.imgur.com/iHs7A9n.png",
            description: "HITBOX"
        },
        {
            image: "https://i.imgur.com/QNg91O9.png",
            description: "Adaptable Lever Model 29B"
        }
    ]

    return (
        <div >
        <div className="products-carousel-div">
            <Paper sx={{backgroundColor: "whitesmoke"}}>
        <Carousel>
            
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
           
        </Carousel>
        <br />
        </Paper>
 
        </div>
        </div>
    )
}

function Item(props)
{
    return (
        <div>
            <img className='product-img' src={props.item.image} />
            <p className="product-text">{props.item.description}</p>
           
            <Button sx={{color: "black", borderColor: "black"}} variant="outlined" className="shopping-cart-button">
            <AddShoppingCartIcon /> Add to Shopping Cart
            </Button>
        </div>
    )
}

export default ProductsCarousel