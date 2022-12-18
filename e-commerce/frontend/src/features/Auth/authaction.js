import  {createAsyncThunk} from "@reduxjs/toolkit" 
import axios  from "../../helpers/api"

// we Registered user by retriving info from our form and send that to to backend
export const registerUser = createAsyncThunk("authSlice", async (userInfo, {rejectWithValue})=>{
try {
 const response = await axios.post("http://localhost:5000/Aparel/register", userInfo)   
  localStorage.setItem("user", JSON.stringify(response))
  return response.data
} catch (error) {
    return rejectWithValue(error.response.data)
}
})

//  we login user by posting his/her data to the backend if the user exist in the database then we get back the token. 
export const loginUser = createAsyncThunk("authSlice", async (userInfo, {rejectWithValue})=>{
    try {
     const response = await axios.post("http://localhost:5000/Aparel/login", userInfo)   
     localStorage.setItem("user", JSON.stringify(response.data))
     return response.data
    } catch (error) {
       return rejectWithValue(error.response.data)
    }
})

// logout user. The user is logedout by removing his/her token from localstorage
export const logoutUser = createAsyncThunk("authSlice", async ()=>{
  localStorage.removeItem("user")
})