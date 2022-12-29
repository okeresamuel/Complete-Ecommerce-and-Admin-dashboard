import  {createAsyncThunk} from "@reduxjs/toolkit" 
import axios  from "../../helpers/api"
import backendDomain from "../../helpers/backendDomain"

// we Registered user by retriving info from our form and send that to to backend
export const registerUser = createAsyncThunk("authActionRegister", async (userInfo, {rejectWithValue})=>{
try {
  const response = await axios.post(`${backendDomain}/Aparel/register`, userInfo)   
  localStorage.setItem("user", JSON.stringify(response))
  return response.data
} catch (error) {
  return rejectWithValue(error.response.data)
}
})

//  we login user by posting his/her data to the backend if the user exist in the database then we get back the token. 
export const loginUser = createAsyncThunk("authActionLogin", async (userInfo, {rejectWithValue})=>{
    try {
     const response = await axios.post(`${backendDomain}/Aparel/login`, userInfo)   
     localStorage.setItem("user", JSON.stringify(response.data))
     return response.data
    } catch (error) {
     return rejectWithValue(error.response.data)
    }
})

// logout user. The user is logedout by removing his/her token from localstorage
export const logoutUser = createAsyncThunk("authActionLogout", async ()=>{
  localStorage.removeItem("user")
})


// Get all users for the admin pages
export const getAllUser = createAsyncThunk("authActionGetallusers", async (_, thunkApi)=>{
let {rejectWithValue} = thunkApi
try {
let state = thunkApi.getState()
let token = state.auth.user.token
let config = {
 headers:{
   token
 }
}
   const response = await axios.get(`${backendDomain}/Aparel/AllUser`, config)   
    return response.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})