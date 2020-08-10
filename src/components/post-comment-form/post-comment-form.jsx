import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {OfferPropTypes} from "../../propTypes.js";
import {connect} from 'react-redux';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {MIN_REVIEW_LENGTH, MAX_REVIEW_LENGTH, RATING_TITLES} from "../../const.js";

export const PostCommentForm = (props) => {
  const {
    offer,
    review,
    rating,
    isDisabled,
    isError,
    errorMessage,
    onInputChange,
    onSubmit,
    sendComment,
  } = props;

  return (
    <Fragment>
      {isError && <div style={{color: `red`}}>Error while posting comment: {errorMessage}. Try again.</div>}
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={(evt) => {
          evt.preventDefault();
          onSubmit(offer.id, sendComment);
        }}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {RATING_TITLES.map((name, i) => {
            const ratingValue = RATING_TITLES.length - i;

            return (
              <Fragment key={name}>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={ratingValue}
                  id={`${ratingValue}-stars`}
                  type="radio"
                  checked={rating === String(ratingValue)}
                  disabled={isDisabled}
                  onChange={onInputChange}
                />
                <label
                  htmlFor={`${ratingValue}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title={name}>
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>
              </Fragment>
            );
          })}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={review}
          disabled={isDisabled}
          onChange={onInputChange}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={!(rating && review.length >= MIN_REVIEW_LENGTH && review.length <= MAX_REVIEW_LENGTH)}>Submit</button>
        </div>
      </form>
    </Fragment>
  );
};

PostCommentForm.propTypes = {
  offer: OfferPropTypes.isRequired,
  review: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  sendComment: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendComment(id, comment) {
    return dispatch(DataOperation.sendComment(id, comment));
  },
});

export default connect(null, mapDispatchToProps)(PostCommentForm);
