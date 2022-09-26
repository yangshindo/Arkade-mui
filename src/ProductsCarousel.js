import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function ProductsCarousel(props)
{
    var items = [
        {
            image: "https://i.imgur.com/50XSuJf.png[/img]",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            image: "https://i.imgur.com/QNg91O9.png",
            description: "Hello World!"
        },
        {
            image: "https://i.imgur.com/FbMO3CI.png",
            description: "Hello World!"
        },
        {
            image: "https://i.imgur.com/hPZtiBa.png",
            description: "Hello"
        },
        {
            image: "https://i.imgur.com/iHs7A9n.png",
            description: "Hitbox"
        }
    ]

    return (
        <div >
        <div className="products-carousel-div">
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </div>
        </div>
    )
}

function Item(props)
{
    return (
        <Paper>
            <img className='carousel-product-img' src={props.item.image} />
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default ProductsCarousel