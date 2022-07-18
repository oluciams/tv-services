import { Button } from './Button';
import PropTypes from 'prop-types';

export const ItemAddress = ({ nameBuilding, addressBuilding }) => {
	return (
		<>
			<li className='col-6 list-group-item d-flex justify-content-between shadow p-2 m-auto mb-2 bg-body rounded'>
				<div>
					<p className='text-primary'>{ nameBuilding }</p>
					<small>{ addressBuilding }</small>
				</div>
				<Button 
					className='btn btn-primary mx-2 my-2'
					text={'SELECT'}
				/>
			</li>
		</>
	);
};

ItemAddress.propTypes = {
	nameBuilding: PropTypes.string,	
	addressBuilding: PropTypes.string,
	
};
