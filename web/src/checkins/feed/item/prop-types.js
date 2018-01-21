import PropTypes from 'prop-types';

export default PropTypes.shape({
  beverage: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired
}).isRequired;
