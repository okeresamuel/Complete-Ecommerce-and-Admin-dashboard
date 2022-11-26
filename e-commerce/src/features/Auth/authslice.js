import  { createSlice } from "@reduxjs/toolkit"
import { registerUser, loginUser} from "../Auth/authaction"

const User = JSON.parse(localStorage.getItem("user"))

// initial redux state
const initialState = {
  user: User ? User : null,
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
  extraReducers:{
    [registerUser.pending]: (state,)=>{
      state.user = null
      state.error = false
      state.loading = true
    },

    [registerUser.fulfilled]: (state, action)=>{
      state.user = action.payload
      state.error = false
      state.loading = false
    },
    [registerUser.rejected]: (state, action)=>{
      state.user = null
      state.error = true
      state.loading = false
      state.message = action.payload
    },

    // login slice
    [loginUser.pending]:(state,)=>{
      state.user = null
      state.error = false
      state.loading = true
    },

    [loginUser.fulfilled]:(state, action)=>{
      state.user = action.payload
      state.error = false
      state.loading = false
      state.message = false
    },
    [loginUser.rejected]:(state, action)=>{
      state.user = null
      state.error = true
      state.loading = false
      state.message = action.payload
    }
  }
})
export default authslice.reducer
export const  { resetAuthState } = authslice.actions