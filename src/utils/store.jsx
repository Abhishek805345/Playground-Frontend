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
const userSlice=createSlice({
  name:"UserSlice",
  initialState:{
    isAuthenticated:false,
    _id:null,
    fullname:null,
    email:null
  },
  reducers:{
    isAuthenticatedChanger:(state,action)=>{
      state.isAuthenticated=!state.isAuthenticated;
    },
    idChanger:(state,action)=>{
      state._id=action.payload.new_id;
    },
    fullnameChanger:(state,action)=>{
      state.fullname=action.payload.newfullname;
    },
    emailChanger:(state,action)=>{
      state.email=action.payload.newemail;
    }
  }
})

const Store=configureStore({reducer:{
  statusReducer:statusSlice.reducer,
  userReducer:userSlice.reducer
}})

export default Store;
export const statusAction =statusSlice.actions;
export const userAction= userSlice.actions;