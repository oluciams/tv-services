import axios from "axios";
import { formUserPlan, selectBuilding } from "../slices/signup/signupSlice";

export const setNumberPlan = ({plan}) => {   
  return ( dispatch ) => { 

    const planInteger =  parseInt(plan);

    dispatch(formUserPlan({planId: planInteger}));    
  }
};

export const getBuildings = () => {   
  return async ( dispatch ) => {

    const { data }  = await axios.get('http://localhost:3000/buildings');
    console.log(data);

    dispatch(selectBuilding({ buildingId: data }));    
  }
}
