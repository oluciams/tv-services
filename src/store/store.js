import { configureStore } from "@reduxjs/toolkit";
import { signupSlice } from "./slices/signup/signupSlice";

export const store = configureStore( {
  reducer: {
    signup: signupSlice.reducer
  }  
});