import PropTypes from 'prop-types';

export const OfferPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  adults: PropTypes.number.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  mark: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  stars: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    commentId: PropTypes.number.isRequired,
    commentRating: PropTypes.string.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      userId: PropTypes.number.isRequired,
      pro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired).isRequired
});

export const CityPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
});

export const ReviewPropTypes = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  commentId: PropTypes.number.isRequired,
  commentRating: PropTypes.string.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    pro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
});
