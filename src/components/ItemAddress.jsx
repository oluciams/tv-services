import { Button } from './Button';
import PropTypes from 'prop-types';
import { useState } from 'react';


export const ItemAddress = ({ 
	nameBuilding,
	addressBuilding,
	setSearchBuilding }) => {

	const [isActive, setIsActive] = useState(false);

	const selectedAddress = () => {
		setSearchBuilding(addressBuilding)
		setIsActive(true)
	
	}
	const closeBtn = () => {
		setSearchBuilding('')
		setIsActive(false)
	}
	
	return (
		<>
			<li 
				className='col-6 d-flex justify-content-between shadow p-2 m-auto mb-2'>
				<div>
					<p className='text-primary'>{ nameBuilding }</p>
					<small>{ addressBuilding }</small>
				</div>
				{
					!isActive ?

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
	nameBuilding: PropTypes.string,	
	addressBuilding: PropTypes.string,
	setSearchBuilding: PropTypes.func,
	
};
