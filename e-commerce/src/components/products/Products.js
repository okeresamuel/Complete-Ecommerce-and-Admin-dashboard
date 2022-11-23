import { Button } from "@mui/material";
import { items } from "../../data/items";
import "./products.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CartContext } from "../../context/CartContext";
import { useContext,} from "react";

const Products = ({searchValue}) => {
  //setup dispatch
  const cartState = useContext(CartContext);
  const dispatch = cartState.dispatch;



  return (
    <div className="Products__display">
      {items?.filter((item) => {
         if (!searchValue){ return item; } 
         return item.name.toLowerCase().includes(searchValue.toLowerCase()) ? item : ""
        })
        .map((item) => (
            <div className="shirt__container" key={item.id}>
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
                <ShoppingCartIcon className="Shopping_Button" onClick={(()=>{ dispatch({ type: "ADD", payload: item }) })} />
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Products;
