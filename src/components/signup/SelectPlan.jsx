import { useDispatch, useSelector } from 'react-redux';
import { incrementPage } from '../../store/slices/signup/signupSlice';
import { Button } from '../Button';
import { Card } from '../Card';

export const SelectPlan = () => {

	const dispatch = useDispatch();	
	const page = useSelector( (state) => state.signup.page )

	return (
		<>
			<Card />
			<Button
				type='submit'
				className='btn btn-primary mx-2 my-5'
				text={'I AM READY!'}
				fn={()=> 	dispatch( incrementPage ( { page: page + 1 } )) }	
			/>
		</>
	);
};
