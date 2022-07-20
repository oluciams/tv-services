import { useDispatch, useSelector } from 'react-redux';
import { formUserPlan, incrementPage } from '../../store/slices/signup/signupSlice';
import { Button } from '../Button';
import { buildings } from '../../dataBuildings';
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';
import { Card } from '../Card';


export const SelectPlan = () => {	

	const { plan, onInputChange} = useForm({plan: ''});

	const dispatch = useDispatch();
	const page = useSelector(state => state.signup.page);
	const id = useSelector(state => state.signup.buildingId);

	const plansId = buildings.filter(building => building._id === id)[0]
  const plansIdBuilding = plansId.plans

	useEffect(() => {
		if(plan){	
			dispatch(formUserPlan({ plan }));
		}
		
	}, [plan]);	
		
	return (
		<>
			{
				plansIdBuilding.map(({idPlan, label, price})=>
					<Card 
						key={idPlan}
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
