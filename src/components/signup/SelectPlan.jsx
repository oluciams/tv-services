import { useDispatch, useSelector } from 'react-redux';
import { formUserPlan, incrementPage } from '../../store/slices/signup/signupSlice';
import { Button } from '../Button';
import { buildings } from '../../dataBuildings';
import { useForm } from '../../hooks/useForm';


export const SelectPlan = () => {	

	const { plan, onInputChange} = useForm({plan: ''});

	const dispatch = useDispatch();
	const page = useSelector(state => state.signup.page);
	const id = useSelector(state => state.signup.buildingId);

	const plansId = buildings.filter(building => building._id === id)[0]
  const plansIdBuilding = plansId.plans

	dispatch(formUserPlan({ plan }));
		
	return (
		<>
			<div className='row row-cols-1 row-cols-md-2 g-4 mt-4'> 
        {
          plansIdBuilding.map(({idPlan, label, price }) =>
            <div key={idPlan}className='col'>                    
              <div className='card border-primary'>
                <div className='card-body'>
                  <h2 className='card-title'>{label}</h2>
                  <small>Service</small>    
                  <h1 className='text-primary'> $ {price}</h1>                
                </div>
								<div>			
									<input
										className='mb-3' 
										type='radio'
										id={label}
										name='plan'
										value={label}
										checked={plan === {label}}
										onChange={onInputChange}
									/>				
								</div>
              </div>
            </div>                     
          )
        }   
      </div>			
			<Button
				type='submit'
				className='btn btn-primary mx-2 my-5'
				text={'I AM READY!'}
				fn={() => dispatch(incrementPage({ page: page + 1 }))}
			/>
		</>
	);
};
