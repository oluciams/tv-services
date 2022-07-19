import { createSlice } from '@reduxjs/toolkit';

export const signupSlice = createSlice({
	name: 'signup',
	initialState: {
		page: 0,
		name: '',
		lastname: '',
		buildingId:'',
		apartment: '',
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
		formUserConfirmation: (state, action) => {
			state.email = action.payload.email;
			state.phoneNumber = action.payload.phoneNumber;
		},
		incrementPage: (state, action) => {
			state.page = action.payload.page;
		},
		selectBuilding: (state, action) => {
			state.buildingId = action.payload.buildingId;
		}
	},
});

export const {
	formUserDetails,
	formUserAparment,
	formUserConfirmation,
	incrementPage,
	selectBuilding
} = signupSlice.actions;
