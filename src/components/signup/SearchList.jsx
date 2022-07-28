import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { formUserAparment, incrementPage } from '../../store/slices/signup/signupSlice';
import { Button } from '../Button';
import { ItemAddress } from '../ItemAddress';
import { useEffect, useState } from 'react';
import axios from 'axios';


export const SearchList = () => {
	const { apartment, onInputChange, onResetForm } = useForm({	
		apartment: '',
	});
	const [searchBuilding, setSearchBuilding] = useState('');
	const [buildings, setBuildings] = useState();

	const dispatch = useDispatch();
	const name = useSelector(state => state.signup.name);
	const page = useSelector(state => state.signup.page);
	
	const handleSearchBuilding = (e)=>{
    const search1 = e.target.value  
    setSearchBuilding(search1)		
  }

	const onFormSubmit = e => {
		e.preventDefault();
		if (apartment) {
			dispatch(formUserAparment({ apartment }));
			dispatch(incrementPage({ page: page + 1 }));
		}
		onResetForm();
	};

	const getBuildings = async () => {	
		const { data }  = await axios.get('http://localhost:3000/buildings');
		setBuildings(data);		
	}

	useEffect(() => {
		getBuildings()
	}, []);

	return (
		<>
			<h4 className='mt-5'>Pleasure to meet you, {name} !</h4>
			<h4>What is your install address?</h4>
			<form
				className='row mt-5 pt-4 justify-content-center'
				onSubmit={onFormSubmit}
			>
				<div className='col-md-4'>
				<input
						className='form-control'
						type='text'
						placeholder='Street Address, City'
						name='buildingId'
						value={searchBuilding}
						onChange={handleSearchBuilding}
					/>				
				</div>
				<div className='col-md-2'>
					<input
						className='form-control'
						type='search'
						placeholder='Apt #'
						name='apartment'
						value={apartment}
						onChange={onInputChange}
					/>
				</div>
				<section>				
				

					{
						searchBuilding ? 
						buildings
							.filter(building => 
								building.name.match(new RegExp(searchBuilding, "i"))	||
								building.address.match(new RegExp(searchBuilding, "i"))	||
								building.city.match(new RegExp(searchBuilding, "i"))	||
								building.state.match(new RegExp(searchBuilding, "i")) 							
								// 	||
								// building.postal.match(new RegExp(searchBuilding, "i"))
							)

							.map(({id, name, address})=>
								<ItemAddress
									key={id}
									buildingId={id}
									nameBuilding={name}
									addressBuilding={address}		
									setSearchBuilding={setSearchBuilding}
								/>
							)
						:
						<small>I can&#39;t find my address</small>
					}				
				</section>
				<div>
					<Button
						type='submit'
						className='btn btn-primary btn-lg my-5 py-2 px-5'
						text={'YES!'}
					/>
				</div>
			</form>
		</>
	);
};