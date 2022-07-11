import PropTypes from 'prop-types';

export const Button = ({ text, fn, className, type }) => {
	return (
		<button type={type} className={className} onClick={fn}>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	fn: PropTypes.func,
	className: PropTypes.string,
	type: PropTypes.string
};
