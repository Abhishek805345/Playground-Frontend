import {createSlice,configureStore} from "@reduxjs/toolkit";

const stateSlice=createSlice({
  name:"StateSlice",
  initialState:{
    status:"Hero"
  },
  reducers:{
    StatusChanger:(state,action)=>{
      state.status=action.payload.newstatus;
      console.log("status is this ", state.status);
    }
  }
})

const Store=configureStore({reducer:{
  statusReducer:stateSlice.reducer
}})

export default Store;
export const statusAction =stateSlice.actions;