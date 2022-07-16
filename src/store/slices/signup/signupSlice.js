import { createSlice } from '@reduxjs/toolkit';

export const signupSlice = createSlice({
    name: 'signup',
    initialState: {  
      page: 0,  
      name: '',
      lastname: '',
      address: '',
      apartment: '',
      email: '',
      phoneNumber: '',

    },
    reducers: {
        formUserDetails: ( state, action ) => {
            console.log(action)
            state.name = action.payload.name;
            state.lastname = action.payload.lastname;            
        },
        formUserAddress: ( state, action ) => {
            state.address = action.payload.address;
            state.apartment = action.payload.apartment;
        },
        formUserConfirmation: ( state, action ) => {
            state.email = action.payload.email;
            state.phoneNumber = action.payload.phoneNumber;
        }, 
        incrementPage: (state, action) => {
            state.page = action.payload.page
        }      
    }
});

export const { formUserDetails, formUserAddress, formUserConfirmation, incrementPage } = signupSlice.actions;
