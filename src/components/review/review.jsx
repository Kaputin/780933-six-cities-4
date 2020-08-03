import React from "react";
import {ReviewPropTypes} from "../../propTypes.js";

export const Review = ({review}) => {
  const {
    comment,
    date,
    commentId,
    commentRating,
    user
  } = review;
  const {
    avatar,
    userId,
    pro,
    name
  } = user;

  return (
    <li className="reviews__item" id={commentId}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name" id={userId}>
          {name}
        </span>
        {pro && <span className="property__user-status">Pro</span>}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${commentRating}`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
};


Review.propTypes = {
  review: ReviewPropTypes.isRequired,
};
