
import { buildings } from '../dataBuildings';
import PropTypes from 'prop-types';

export const Card = ({id}) => {	

	const plansId = buildings.filter(building => building._id === id)[0]
  const plansIdBuilding = plansId.plans

	return (
		<>   
      <div className='row row-cols-1 row-cols-md-2 g-4 mt-4'> 
        {
          plansIdBuilding.map(({idPlan, label, price }) =>
            <div key={idPlan}className='col'>                    
              <div className='card border-primary'>
                <div className='card-body'>
                  <h2 className='card-title'>{label}</h2>
                  <small>Service</small>    
                  <h1 className='text-primary'> $ {price}</h1>                
                </div>
              </div>
            </div>                     
          )
        }   
      </div>
    </>
  )
};

Card.propTypes = {
	id: PropTypes.string,	
};

