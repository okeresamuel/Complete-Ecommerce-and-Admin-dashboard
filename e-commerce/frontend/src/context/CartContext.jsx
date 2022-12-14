import { createContext, useReducer } from "react"
//create a new context for the cart state and the function change the state
export const CartContext = createContext()
export const PassedValues = createContext({})

export const Context = (props) => {
  
    //create reducer function
    const reducer = (state,action) => {
    //create a switch statement to manage the action and payload. 
    switch (action.type)
    {
      case 'ADD':
        localStorage.setItem("cartItems", JSON.stringify(state))
        let addedItem = [...state, action.payload]
        if(addedItem){
          localStorage.setItem("cartItems", JSON.stringify(addedItem))
          return addedItem
        }
        break;

      case "DELETE":
         let AvailableItem = state.filter((items)=> items.id !== action.payload.id)
         if(AvailableItem){
           localStorage.setItem("cartItems", JSON.stringify(AvailableItem))
           return AvailableItem
         }
        break;
       
       case "INCREASE_CART_ITEM":
         let increased_item = state.map((item) => {
          if(item.id === action.payload.id){
            return {...item, qty:item.qty+1}
          }else{
            return item
          }
        })
      localStorage.setItem("cartItems", JSON.stringify(increased_item))
      return increased_item     
      
      case "DECREASE_CART_ITEM":
        let decreased_item = state.map((item) => {
          if(item.id === action.payload.id){
            return {...item, qty:item.qty-1}
          }else{
            return item
          }
        })
       localStorage.setItem("cartItems", JSON.stringify(decreased_item))
       return decreased_item
      
       case"CLEAR_CART":
       let emptycart =  state = []
       localStorage.setItem("cartItems", JSON.stringify(emptycart))
       return emptycart
    default: return state
    }
  }

//create a reducer to manage the state
const [state,dispatch] = useReducer(reducer, localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [])
const cartState = {state,dispatch}

return (
    <CartContext.Provider value={cartState}>{props.children}</CartContext.Provider>
 )
}


