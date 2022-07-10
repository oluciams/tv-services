import PropTypes from 'prop-types';

export const Button = ({ text, fn, className }) => {
  return (
    
    <button
      type="submit"
      className={ className }
      onClick={ fn } 
      >
      { text }
    </button>
  )  
}

Button.propTypes = {
  text: PropTypes.string,  
  fn: PropTypes.func,
  className: PropTypes.string,  
}