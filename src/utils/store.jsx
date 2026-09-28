import {createSlice,configureStore} from "@reduxjs/toolkit";

const statusSlice=createSlice({
  name:"statusSlice",
  initialState:{
    status:"Hero",
    errormsg:null
  },
  reducers:{
    StatusChanger:(state,action)=>{
      state.status=action.payload.newstatus;
      console.log("status is this ", state.status);
    },
    ErrorChanger:(state,action)=>{
      state.errormsg=action.payload.newerrormsg
    }
  }
})

const Store=configureStore({reducer:{
  statusReducer:statusSlice.reducer
}})

export default Store;
export const statusAction =statusSlice.actions;