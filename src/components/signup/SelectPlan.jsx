import { useDispatch, useSelector } from 'react-redux';
import { formUserPlan, incrementPage } from '../../store/slices/signup/signupSlice';
import { Button } from '../Button';
import { useForm } from '../../hooks/useForm';
import { useEffect, useState } from 'react';
import { Card } from '../Card';

import axios from 'axios';


export const SelectPlan = () => {	

	const { plan, onInputChange} = useForm({plan: ''});

	const dispatch = useDispatch();
	const page = useSelector(state => state.signup.page);
	const id = useSelector(state => state.signup.buildingId);

	const [plansIdBuilding, setPlansIdBuilding] = useState();

	const getPlans = async () => {
		const { data } = await axios.get(`http://localhost:3000/buildings/${id}/plans`)
		setPlansIdBuilding(data)
	}

	useEffect(() => {
		getPlans()
	}, []);	

	useEffect(() => {
		dispatch(formUserPlan({planId: plan}))
	}, [plan]);
	

	if(!plansIdBuilding) return <h4>Loading . . . </h4>
		
	return (
		<>
			{
				plansIdBuilding.map(({id, label, price})=>
					<Card 
						key={id}
						id={id}						
						label={label}
						price={price}
						plan={plan}
						onInputChange={onInputChange}
					/>
				)
			}		
			<Button			
				className='btn btn-primary mx-2 my-5'
				text={'I AM READY!'}
				fn={() => dispatch(incrementPage({ page: page + 1 }))}		
			/>		
		</>
	);
};
