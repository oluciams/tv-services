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
        formUserDetails: ( state, action ) => {
            state.name = action.payload.name;
            state.lastname = action.payload.lastname;            
        },

        formUserAddress: ( state, action ) => {
            state.address = action.payload.addres;
            state.apartment = action.payload.apartment;
        },

        formUserConfirmation: ( state, action ) => {
            state.email = action.payload.email;
            state.phoneNumber = action.payload.phoneNumber;
        },
    }
});


// Action creators are generated for each case reducer function
export const { formUserDetails, formUserAddress, formUserConfirmation } = signupSlice.actions;