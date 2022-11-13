import { Component } from "react"
import { useContext, useState, createContext } from "react"

//create a new context for the cart state and the function change the state
const CartContext = createContext()
const CartUpdateContext = createContext()

//custom hook to manage context in other comps
 const useCart = () => useContext(CartContext)
//custom hook to manage context in other comps
const useCartUpdate = () => useContext(CartUpdateContext)


const CartProvider = ({ childern }) => {
  //set up state using destructuring
  const [openCart, setOpenCart] = useState(true)

  //create a function to open and close the cart component
  const goToCart = () => {
    setOpenCart(openCart => !openCart)
  }
  //make both of those available in our return
  return (
    // this Component provides the state
    <CartContext.Provider value={openCart}>
      {/* this component provides the function to change the state*/}
      <CartUpdateContext.Provider value={goToCart}>
        {childern}
      </CartUpdateContext.Provider>
    </CartContext.Provider>

  )

}


export default CartProvider
export {useCart,useCartUpdate}