import { createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "../../helpers/api"


export const post_product = createAsyncThunk( "post_product", async ( Aproduct, {rejectWithValue})=>{
 try {
  await axios.post("http://localhost:5000/Aparel/post_products", {Aproduct})  
 } catch (error) {
  return rejectWithValue(error.message)
 }
})

export const get_product = createAsyncThunk("get_product", async(_, thunkApi)=>{
    let {rejectWithValue} = thunkApi
    try {
        let state = thunkApi.getState()
        let token = state.auth.user.token
        const config = {
            headers:{token}
          }    
    const response = await axios.get("http://localhost:5000/Aparel/get_products",  config )
    return response.data
    } catch (error) {
       return rejectWithValue(error.message)
    }
})
   