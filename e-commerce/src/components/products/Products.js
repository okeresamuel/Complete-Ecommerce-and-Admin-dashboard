import { Button } from "@mui/material";
import { items } from "../../data/items";
import "./products.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify"
import { useContext, useEffect, useState} from "react";
import axios from "axios"


const Products = ({searchValue}) => {
  //setup dispatch
  const cartState = useContext(CartContext);
  const dispatch  = cartState.dispatch

  
// // fetches the data from crudcrud
// const [cart, setCart] = useState("")
// localStorage.setItem("item", JSON.stringify(cart))
//    useEffect(()=>{
//     axios.get("https://crudcrud.com/api/1b1e06476e4542d1ba1997f7584c912f/Itemincart",).then((res)=>{
//       setCart(res.data)
//     })
//    },[])

  
  
/* validates if the data is already in cart before 
   posting to cart if the data is present then cart
    quantity shall be increased */
   function AddTocart(item){
        const foundItem = cartState.state?.findIndex((items) => items?.id === item?.id)
        if(foundItem >= 0){
          cartState.state[foundItem].qty += 1
          toast.info(`${item?.name} Quantity has been increased to ${cartState.state[foundItem].qty}`)
        }else{
          toast.success(`${item?.name} added to cart`)         
          dispatch({type: "ADD", payload: {...item, qty: 1}})
          console.log(cartState)
        }
   }

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
                    <ShoppingCartIcon className="Shopping_Button" onClick={(()=>AddTocart(item))} />
                  </span>
                </div>
              </div>
            ))}
        </div>
      );
    };
    export default Products;