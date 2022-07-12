import { createSlice } from '@reduxjs/toolkit';

export const signupSlice = createSlice({
    name: 'signup',
    initialState: {    
      name: '',
      lastname: ''      
    },
    reducers: {
        formUserDetails: (state,  action ) => {
            state.name = action.payload.name;
            state.lastname = action.payload.lastname;
        },
    }
});


// Action creators are generated for each case reducer function
export const { formUserDetails } = signupSlice.actions;