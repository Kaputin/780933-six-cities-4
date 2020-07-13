import PropTypes from 'prop-types';

export const OfferPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  mark: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  rating: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
}).isRequired;

export const CityPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
}).isRequired;
