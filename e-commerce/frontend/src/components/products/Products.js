import "./products.css";
import {useEffect} from "react";
import Product from "./product/product";
import {get_product} from "../../features/Allproducts/productaction"
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../features/cart/cartslice"
import Loader from "../../pages/components/Loader/loader"

  const Products = () => {
  const {products, sortedproducts, loading} = useSelector((state)=>  state.product)
  const {searchvalue} = useSelector((state)=>  state.search)
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(get_product())
  }, [dispatch])
   
 
//push item to cart 
function addtocart(item){
   dispatch(addToCart(item))
}

return (
    <div className="Products__display">
      {/* if The sorted items are available the show sorted items else show all products */}
      {
       sortedproducts.length === 0 ? ( products?.filter((product) => {
       if (!searchvalue){ return product; } 
       return product.name.toLowerCase().includes(searchvalue.toLowerCase()) ? product : ""
       }).map((product) => <Product item={product} addtocart={addtocart}/>)
       ) : (
        sortedproducts?.filter((product) => {
        if (!searchvalue){ return product; } 
        return product.name.toLowerCase().includes(searchvalue.toLowerCase()) ? product : ""
        }).map((product) => <Product item={product} addtocart={addtocart}/>)
       )}

       {loading ? <Loader />  : ""}       
    </div>
  );
};
export default Products;
