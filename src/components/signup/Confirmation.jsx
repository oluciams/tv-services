import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Button } from '../Button';

export const Confirmation = () => {
	const { email, phoneNumber, onInputChange, onResetForm } = useForm({
		email: '',
		phoneNumber: '',
	});
	const navigate = useNavigate();

	const onFormSubmit = e => {
		e.preventDefault();
		if (email && phoneNumber) {
			const formUserConfirmation = { email, phoneNumber };
			console.log(formUserConfirmation);
		}
		onResetForm();
		navigate('/success');
	};

	return (
		<>
			<h4 className='my-4 py-3'>Great news! Your first month&#39;s free!</h4>
			<p>
				To get set up, just provide your email and phone number and we remind
				you when the free trial ends.
			</p>
			<form className='my-5' onSubmit={onFormSubmit}>
				<div className='mb-3 col-6 mx-auto'>
					<input
						className='form-control mb-3'
						type='email'
						placeholder='Email'
						name='email'
						value={email}
						onChange={onInputChange}
					/>
					<input
						className='form-control mb-3'
						type='number'
						placeholder='Phone Number'
						name='phoneNumber'
						value={phoneNumber}
						onChange={onInputChange}
					/>
					<small>I have a prome code!</small>
				</div>
				<Button
					type='submit'
					className='btn btn-primary btn-lg my-5 py-2 px-4'
					text={'SUSCRIBE NOW!'}
				/>
			</form>
		</>
	);
};
