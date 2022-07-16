import { useDispatch, useSelector } from 'react-redux';
import { incrementPage } from '../../store/slices/signup/signupSlice';
import { Button } from '../Button';

export const UserForm = () => {

	const dispatch = useDispatch();	
	const page = useSelector( (state) => state.signup.page )
	
	return (
		<>
			<h1 className='text-primary my-5 py-3'>The Best TV service around!</h1>
			<p className='my-4 fs-5'>Are you ready to enjoy ultra-best service?</p>			
			<Button
				className='btn btn-primary btn-lg my-4 py-2 px-4'
				text={`LET'S DO IT!`}
				fn={()=> 	dispatch( incrementPage ( { page: page + 1 } )) }	
			/>	
		</>
	);
};
