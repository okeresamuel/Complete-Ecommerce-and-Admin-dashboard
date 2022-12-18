import React from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";



function Product({item, addtocart}) {
    
  return (
        <div className="shirt__container" key={item._id}>
        <div className="Favorite_Icon">
           <FavoriteBorderIcon />
        </div>

        {item.tag && (
          <div className="Promo_Iconz">
            <Button style={{ backgroundColor: "hsl(250deg 57% 97%)", opacity: "85%", color: "blue",  }} >
              {item.tag}
            </Button>
          </div>
        )}

        <img className="shirt__img" src={item.image} alt="shirts" />

        <div className="sub__shirtcontainer">
          <h3>{item.name}</h3>
           <span className="priceand__cartbtnContainer">
            {`Price: $${item.price}`}
            <ShoppingCartIcon className="Shopping_Button" onClick={(()=>{ addtocart(item) })} />
          </span>
        </div>
      </div>
  )
}

export default Product