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
			<li className='col-6 d-flex justify-content-between shadow p-2 m-auto mb-2'>
				<div>
					<p className='text-primary'>{ nameBuilding }</p>
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
	buildingId: PropTypes.string,
	nameBuilding: PropTypes.string,	
	addressBuilding: PropTypes.string,
	setSearchBuilding: PropTypes.func,
	
};
