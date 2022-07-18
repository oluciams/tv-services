import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { formUserAddress, incrementPage } from '../../store/slices/signup/signupSlice';
import { Button } from '../Button';
import { ItemAddress } from '../ItemAddress';
import { buildings } from '../../dataBuildings';
import { useState } from 'react';


export const SearchList = () => {
	const { address, apartment, onInputChange, onResetForm } = useForm({
		address: '',
		apartment: '',
	});
	const [searchCharacter, setSearchCharacter] = useState('');

	const dispatch = useDispatch();
	const name = useSelector(state => state.signup.name);
	const page = useSelector(state => state.signup.page);

	const handleSearchCharacter = (e)=>{
    const search1 = e.target.value  
    setSearchCharacter(search1)
  }

	const onFormSubmit = e => {
		e.preventDefault();
		if (address && apartment) {
			dispatch(formUserAddress({ address, apartment }));
			dispatch(incrementPage({ page: page + 1 }));
		}
		onResetForm();
	};

	return (
		<>
			<h4 className='mt-5'>Pleasure to meet you, {name} !</h4>
			<h4>What is your install address?</h4>
			<form
				className='row mt-5 pt-4 justify-content-center'
				onSubmit={onFormSubmit}
			>
				<div className='col-4'>
				<input
						className='form-control'
						type='text'
						placeholder='prueba'
						name='address'
						value={searchCharacter}
						onChange={handleSearchCharacter}
					/>				
					<input
						className='form-control'
						type='search'
						placeholder='Street Address, City'
						name='address'
						value={address}
						onChange={onInputChange}
					/>
					{/* <small>I can&#39;t find my address</small> */}
				</div>
				<div className='col-2'>
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
						searchCharacter ? 
						buildings
							.filter((item)=>{
								return Object.keys(item).some((key)=>item[key].toString().toLowerCase()
								.includes(searchCharacter.toLowerCase()));
							})		

							.map(({_id, name, address})=>
								<ItemAddress
									key={_id}
									nameBuilding={name}
									addressBuilding={address}
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