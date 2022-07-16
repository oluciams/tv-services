import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { formUserDetails } from '../../store/slices/signup/signupSlice';
import { Button } from '../Button';

export const UserDetails = () => {

	const { name, lastname, onInputChange, onResetForm } = useForm({
		name: '',
		lastname: '',
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onFormSubmit = e => {
		e.preventDefault();
		if (name && lastname) {
			dispatch( formUserDetails( { name, lastname } ))		
		}
		onResetForm();
		navigate('/searchList');
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
