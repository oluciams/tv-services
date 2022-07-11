import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Button } from '../Button';

export const SearchList = () => {
	const name = 'Alejandro';

	const { address, apartment, onInputChange, onResetForm } = useForm({
		address: '',
		apartment: '',
	});

	const navigate = useNavigate();

	const onFormSubmit = (e) => {
		e.preventDefault();	
		if (address && apartment) {
			const formUserAddress = { address, apartment };
			console.log(formUserAddress);
		}
		onResetForm();
		navigate('/selectPlan'); 

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
						type='search'
						placeholder='Street Address, City'
						name='address'
						value={address}
						onChange={onInputChange}
					/>
				<small>I can&#39;t find my address</small>
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
