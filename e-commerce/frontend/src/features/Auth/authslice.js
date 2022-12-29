import  { createSlice } from "@reduxjs/toolkit"
import { registerUser, loginUser, getAllUser} from "./authaction"

const User = JSON.parse(localStorage.getItem("user"))

// initial redux state
const initialState = {
  user: User ? User : null,
  Alluser: [],
  error: false,
  loading: false,
  message: false,
}


const authslice = createSlice({
  name:"auth",
  initialState,
  reducers:{ 
    resetAuthState:(state)=>{
      state.user = null
      state.error = false
      state.loading = false
      state.message = false
    }
  },

  //Registeration
  extraReducers: (builder)=>{
  builder.addCase(registerUser.pending, (state,) =>{
    return{
      ...state,
      user: null,
      error: false,
      loading: true
    }

  }).addCase(registerUser.fulfilled,  (state, action)=>{
    return{
      ...state,
      user: action.payload,
      error: false,
      loading: false
    }
  }).addCase(registerUser.rejected, (state, action)=>{
    return{
      ...state,
      user: null,
      error: true,
      loading: false,
      message: action.payload
    }
  })
  
  //login
  builder.addCase(loginUser.pending, (state)=>{
    return{
      ...state,
      user: null,
      error: false,
      loading: true
    }
  }).addCase(loginUser.fulfilled, (state, action)=>{
    return{
      ...state,
      user: action.payload,
      error: false,
      loading: false,
      message: false
    }
  }).addCase(loginUser.rejected, (state, action)=>{
    return{
      ...state,
      user: null,
      error: true,
      loading: false,
      message: action.payload
    }
  })

  // Allusers
  builder.addCase(getAllUser.pending, (state)=>{
    return{
      ...state,
      Alluser: null,
      error: false,
      loading: true
    }
  }).addCase(getAllUser.fulfilled, (state, action)=>{
    return{
      ...state,
      Alluser: action.payload,
      error: false,
      loading: false,
    }
  }).addCase(getAllUser.rejected, (state, action)=>{
    return{
      ...state,
      Alluser: null,
      error: true,
      loading: false,
      message: action.payload
    } 
  })
}


})
 
   
   
  

export default authslice.reducer
export const  { resetAuthState } = authslice.actions