import { createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "../../helpers/api"
import backendDomain from "../../helpers/backendDomain";


export const post_product = createAsyncThunk( "post_product", async ( Aproduct, thunkApi)=>{
 let {getState, rejectWithValue} = thunkApi
 let state = getState()
 let token = state.auth.user.token
 let config = {
     headers:{token}
 }
 try {
  await axios.post(`${backendDomain}/Aparel/post_products`, Aproduct, config)  
 } catch (error) {
  return rejectWithValue(error.message)
 }
})

export const get_product = createAsyncThunk("get_product", async(_, thunkApi)=>{
    let {rejectWithValue} = thunkApi
    try {
    const response = await axios.get(`${backendDomain}/Aparel/get_products`)
    return response.data
    } catch (error) {
       return rejectWithValue(error.message)
    }
})

export const update_product = createAsyncThunk("update_product", async(Aproduct, thunkApi)=>{
    let {rejectWithValue} = thunkApi
    try {
      let state = thunkApi.getState()
      let token = state.auth.user.token
      const config = {
            headers:{token}
          }   
    const {id, name, price, tag} = Aproduct;
    const response = await axios.patch(`${backendDomain}/Aparel/update_product/${id}`, {name, price, tag}, config)
    return response.data
    } catch (error) {
       return rejectWithValue(error.message)
    }
})


export const delete_product = createAsyncThunk("delete_product", async(id, thunkApi)=>{
    let {rejectWithValue} = thunkApi
    try {
        let state = thunkApi.getState()
        let token = state.auth.user.token
        const config = {
            headers:{token}
          }    
       let deleted = await axios.delete(`${backendDomain}/Aparel/delete_product/${id}`,  config )
        return deleted.data
     }  catch (error) {
        return rejectWithValue(error.message)
    }
})


   