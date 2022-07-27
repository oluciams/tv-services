import { formUserPlan } from "../slices/signup/signupSlice";

export const setNumberPlan = ({plan}) => {   
  return  ( dispatch ) => { 

    const planInteger =  parseInt(plan)

    dispatch(formUserPlan({planId: planInteger}));    
  }
}