import { createSlice } from "@reduxjs/toolkit";
import {get_product} from "../Allproducts/productaction"

const initialState = {
    products:[],
    error: false,
    loading:false,
    success:false,
    message:null
}

const productSlice = createSlice({
    name:"produts",
    initialState,
    reducers: {},
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
    })
})

export default productSlice.reducer