import {createSlice,configureStore} from "@reduxjs/toolkit";

const stateSlice=createSlice({
  name:"StateSlice",
  initialState:{
    status:"Hero"
  },
  reducers:{
    StatusChanger:(state,action)=>{
      state.status=action.payload.newstatus;
    }
  }
})

const Store=configureStore({reducer:{
  stateReducer:stateSlice
}})

export default Store;
export const stateAction =stateSlice.actions;