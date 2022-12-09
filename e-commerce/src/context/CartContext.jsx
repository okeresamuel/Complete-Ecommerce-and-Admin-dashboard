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
        return [...state, action.payload]
      default: return state
    }
  }

  //create a reducer to manage the state
  const [state,dispatch] = useReducer(reducer, [])
  const cartState = {state,dispatch}

  return (
    <CartContext.Provider value={cartState}>{props.children}</CartContext.Provider>
  )
}


