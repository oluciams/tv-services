import PropTypes from 'prop-types';

export const Card = ({ idPlan, label, price, plan, onInputChange }) => {	

	return (
		<>   
      <div className='row row-cols-1 row-cols-md-2 g-4 mt-4'>        
        <div key={idPlan}className='col'>                    
          <div className='card border-primary'>
            <div className='card-body'>
              <h2 className='card-title'>{label}</h2>
              <small>Service</small>    
              <h1 className='text-primary'> $ {price}</h1>                
            </div>
            <div>				
              <input
                className='form-check-input mb-3' 
                type='radio'						
                id={label}
                name='plan'
                value={label}
                checked={plan === {label}}
                onChange={onInputChange}
              />						
            </div>
          </div>
        </div>         
      </div>
    </>
  )
};

Card.propTypes = {
	idPlan: PropTypes.string,	
  label: PropTypes.string,	
  price: PropTypes.string,
  plan: PropTypes.string,
  onInputChange: PropTypes.func,	
};

