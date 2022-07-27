import { formUserPlan } from "../slices/signup/signupSlice";

export const setNumberPlan = ({plan}) => {
  
  return  ( dispatch, getState ) => {  

    const planInteger =  parseInt(plan)
    dispatch(formUserPlan({planId: planInteger}));
    
  }
}