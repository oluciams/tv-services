import { useDispatch } from "react-redux";
import { incrementPage } from "../../store/slices/signup/signupSlice";
import { Button } from "../Button";

export const Success = () => {
	const dispatch = useDispatch();
	return (
		<>
			<h1 className='text-primary my-4'>Congratulations!!!!</h1>
			<h2 className='my-4'>
				Your subscription has been
				<br />
				Successful
			</h2>
			<Button
					className='btn btn-primary btn-lg my-4 py-2 px-4'
					text={'Back to Home'}
					fn={()=> 	dispatch( incrementPage ( { page: 0 } )) }	
				/>	
		</>
	);
};
