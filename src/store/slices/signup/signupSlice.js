import { createSlice } from '@reduxjs/toolkit';

export const signupSlice = createSlice({
	name: 'signup',
	initialState: {
		page: 0,
		name: '',
		lastname: '',
		buildingId:'',
		apartment: '',
		planId: '',
		email: '',
		phoneNumber: '',
	},
	reducers: {
		formUserDetails: (state, action) => {
			state.name = action.payload.name;
			state.lastname = action.payload.lastname;
		},
		formUserAparment: (state, action) => {	
			state.apartment = action.payload.apartment;
		},
		selectBuilding: (state, action) => {
			state.buildingId = action.payload.buildingId;
		},
		formUserPlan: (state, action) => {
			state.planId = action.payload.planId;	
		},
		formUserConfirmation: (state, action) => {
			state.email = action.payload.email;
			state.phoneNumber = action.payload.phoneNumber;
		},
		incrementPage: (state, action) => {
			state.page = action.payload.page;
		}
	},
});

export const {
	formUserDetails,
	formUserAparment,
	formUserPlan,
	formUserConfirmation,
	incrementPage,
	selectBuilding
} = signupSlice.actions;
