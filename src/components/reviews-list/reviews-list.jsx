import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Review} from "../review/review.jsx";
import {ReviewPropTypes} from "../../propTypes.js";

export class ReviewsList extends PureComponent {

  render() {
    const {reviews} = this.props;
    return (
      <ul className="reviews__list">
        {reviews.map((review) =>
          <Review
            review={review}
            key={review.id}
          />)
        }
      </ul>
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
};
