import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchvalue: ""
}

const searchSlice = createSlice({
    name:"searchField", 
    initialState,
    reducers:{
        search:((state, action)=>{
          return{
            ...state,
            searchvalue:action.payload
          }
        })}
})
export default searchSlice.reducer
export const {search} = searchSlice.actions