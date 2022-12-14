import { items } from "../../data/items";
import "./products.css";
import { CartContext } from "../../context/CartContext";
import { SearchContext } from "../../context/SearchContext"
import { useContext} from "react";
import { toast } from "react-toastify"
import Product from "./product/product";

const Products = () => {

  //setup dispatch for cart
  const cartState = useContext(CartContext);
  const dispatch = cartState.dispatch;
  
  //typed in value from the search box
  const search = useContext(SearchContext)
  const [searchValue] = search

  //push item to cart 
  function addtocart(item){
  const foundItem = cartState.state.findIndex((items) => items.id === item.id)
  if(foundItem >= 0){
    cartState.state[foundItem].qty += 1
    toast.info(`${item.name} Quantity has been increased to ${cartState.state[foundItem].qty}`)
  }else{
    dispatch({ type: "ADD", payload:item})
    toast.success(`${item.name} added to cart`)   
  }
}

return (
    <div className="Products__display">
      {items?.filter((item) => {
         if (!searchValue){ return item; } 
         return item.name.toLowerCase().includes(searchValue.toLowerCase()) ? item : ""
        })
        .map((item) => <Product item={item} addtocart={addtocart}/>)}
    </div>
  );
};
export default Products;
