import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { formUserDetails, incrementPage } from '../../store/slices/signup/signupSlice';
import { Button } from '../Button';

export const UserDetails = () => {

	const { name, lastname, onInputChange, onResetForm } = useForm({
		name: '',
		lastname: '',
	});

	const dispatch = useDispatch();	
	const page = useSelector( (state) => state.signup.page )

	const onFormSubmit = e => {
		e.preventDefault();
		if (name && lastname) {
			dispatch( formUserDetails( { name, lastname } ))		
			dispatch( incrementPage ( { page: page + 1 } ))
		}
		onResetForm();
	};	

	return (
		<>
			<h4 className='my-4 py-3'>
				Awesome! Let&#39;s get started with the basics
			</h4>
			<form className='my-5' onSubmit={onFormSubmit}>
				<div className='mb-3 col-3 mx-auto'>
					<input
						className='form-control mb-3'
						type='text'
						placeholder='First Name'
						name='name'
						value={name}
						onChange={onInputChange}
					/>
					<input
						className='form-control mb-3'
						type='text'
						placeholder='Last Name'
						name='lastname'
						value={lastname}
						onChange={onInputChange}
					/>
				</div>
				<Button
					type='submit'
					className='btn btn-primary btn-lg my-5 py-2 px-4'
					text={'NEXT'}							  
				/>
			</form>
		</>
	);
};
