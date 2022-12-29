import { createSlice } from "@reduxjs/toolkit";
import {get_product, delete_product, update_product} from "../Allproducts/productaction"

const initialState = {
    products:[],
    sortedproducts:[],
    error: false,
    loading:false,
    success:false,
    message:null
}

const productSlice = createSlice({
    name:"produts",
    initialState,
    reducers: {
        sortedproducts:(state, action)=>{
          return {...state, sortedproducts:action.payload}
        }
    },
    extraReducers: ((builder)=>{
        builder.addCase(get_product.pending, (state,) => {
         return {
            ...state,
            error: false,
            loading:true,
            success:false,
            message:null
         }
        })
        .addCase(get_product.fulfilled, (state, action)=>{
            return {
                ...state,
                products:action.payload,
                error: false,
                loading:false,
                success:true,
             }
        })  
        .addCase(get_product.rejected, (state, action)=>{
            return {
                ...state,
                error: true,
                loading:false,
                success:false,
                message:action.payload
             }
        })

        // delete product
        builder.addCase(delete_product.pending, (state, action)=>{
            return {
                ...state,
                error: false,
                loading:true,
                success:false,
                message:null
             }
        })
        .addCase(delete_product.fulfilled, (state, action)=> {
            return {
                ...state,
                products:state.products.filter((product)=> product._id !== action.payload._id ),
                error: false,
                loading:false,
                success:true,
            }
        })
        .addCase(delete_product.rejected, (state, action)=>{
            return {
                ...state,
                error: true,
                loading:false,
                success:false,
                message:action.payload
            }
        })

        // update product
        builder.addCase(update_product.pending, (state)=>{
            return{
                ...state,
                error: false,
                loading:true,
                success:false,
                message:null 
            }
        })
        .addCase(update_product.fulfilled, (state, action)=>{  
         return{
                ...state,
                products:state.products.map((product) =>  product._id === action.payload._id ? action.payload : product),
                error: false,
                loading:false,
                success:true,
            }
        })
        .addCase(update_product.rejected, (state, action)=>{
            return{
                ...state,
                error: true,
                loading:false,
                success:false,
                message:action.payload 
            }
        })
    })
})

export default productSlice.reducer
export const {sortedproducts} = productSlice.actions 