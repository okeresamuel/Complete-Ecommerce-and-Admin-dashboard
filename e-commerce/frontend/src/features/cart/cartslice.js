import {createSlice} from "@reduxjs/toolkit"
import {toast} from "react-toastify"

const initialState = {
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{

    addToCart:(state, action)=>{
    let index = state.cart.findIndex((item)=> item._id === action.payload._id)
    if(index >= 0 ) {
     state.cart[index].qty += 1
     toast.info(`${action.payload.name} quantity increased to ${state.cart[index].qty}`)
     localStorage.setItem("cart", JSON.stringify(state.cart))
    }else{
       toast.success(`${action.payload.name} added to cart`)
       state.cart.push(action.payload)
       localStorage.setItem("cart", JSON.stringify(state.cart))
    }
    },

   removeFromcart:(state, action) =>{
     let itemsLeft = state.cart.filter(item => item._id !== action.payload._id ) 
     state.cart =  itemsLeft
     localStorage.setItem("cart", JSON.stringify(state.cart))
    },

    IncrementItem:(state, action) =>{
      state.cart.forEach(item => {
        if(item._id === action.payload._id){
           return {...item, qty:item.qty += 1}
        }
      })
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },

    DecrementItem:(state, action) =>{
        state.cart.forEach((item) =>{
          if(item._id === action.payload._id){
             return {...item, qty:item.qty -= 1}
          }
        })
        localStorage.setItem("cart", JSON.stringify(state.cart))
      },
   
      ClearCart:(state) =>{
        state.cart = []
        localStorage.setItem("cart", JSON.stringify(state.cart))
      }
}
})

export default cartSlice.reducer;
export const {addToCart, removeFromcart, IncrementItem, DecrementItem, ClearCart} = cartSlice.actions