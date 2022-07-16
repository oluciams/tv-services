import { createSlice } from '@reduxjs/toolkit';

export const signupSlice = createSlice({
    name: 'signup',
    initialState: {    
      name: '',
      lastname: '',
      address: '',
      apartment: '',
      email: '',
      phoneNumber: '',

    },
   
    reducers: {
        addDataToForm: ( state, {payload} ) => {
            console.log("state", {...state})
            console.log("payload", {...payload})
           
            state = { ...state, ...payload };           
            console.log("state final", state)         
        },
    }
    // reducers: {
    //     formUserDetails: ( state, action ) => {
    //         console.log(action)
    //         state.name = action.payload.name;
    //         state.lastname = action.payload.lastname;            
    //     },

    //     formUserAddress: ( state, action ) => {
    //         state.address = action.payload.address;
    //         state.apartment = action.payload.apartment;
    //     },

    //     formUserConfirmation: ( state, action ) => {
    //         state.email = action.payload.email;
    //         state.phoneNumber = action.payload.phoneNumber;
    //     },
        
    // }
});

export const { formUserDetails, formUserAddress, formUserConfirmation, addDataToForm } = signupSlice.actions;
