import { Button } from './Button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { selectBuilding } from '../store/slices/signup/signupSlice';


export const ItemAddress = ({
	buildingId, 
	nameBuilding,
	addressBuilding,
	setSearchBuilding }) => {

	const [isActive, setIsActive] = useState(true);
	const dispatch = useDispatch();
	

	const selectedAddress = () => {	
		setSearchBuilding(addressBuilding)
		setIsActive(false)
		dispatch(selectBuilding({buildingId}))
	
	}
	const closeBtn = () => {
		setSearchBuilding('')
		setIsActive(true)
	}
	
	return (
		<>
			<li className='col-md-6 d-flex justify-content-between shadow border p-1 m-auto my-2'>
				<div>
					<p className='text-primary my-1'>{ nameBuilding }</p>
					<small>{ addressBuilding }</small>
				</div>
				{
					isActive ?	
					<Button 
						className={'btn btn-primary mx-2 my-2'}
						text={'SELECT'}		
						fn={()=> selectedAddress()}					
					/>
					:
					<Button 
						className={'btn-close'}				
						fn={()=> closeBtn()}				
					/>	
				}		
			</li>
		</>
	);
};

ItemAddress.propTypes = {
	buildingId: PropTypes.number,
	nameBuilding: PropTypes.string,	
	addressBuilding: PropTypes.string,
	setSearchBuilding: PropTypes.func,
	
};
