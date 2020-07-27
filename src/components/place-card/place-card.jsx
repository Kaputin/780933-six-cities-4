import React from "react";
import PropTypes from "prop-types";
import {OfferPropTypes} from "../../propTypes.js";

export const PlaceCard = ({onOfferTitleClick, onOfferMouseEnter, offer, cardClass, wrapperClass}) => {
  const {
    mark,
    src,
    price,
    stars,
    title,
    type
  } = offer;

  const handleMouseEnter = (selectedOffer) => {
    onOfferMouseEnter(selectedOffer);
  };

  return (
    <article className={`${cardClass} place-card`} onMouseEnter={handleMouseEnter}>
      {mark && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${wrapperClass} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={src} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={stars}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={() => onOfferTitleClick(offer)}>
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};


PlaceCard.propTypes = {
  onOfferTitleClick: PropTypes.func.isRequired,
  onOfferMouseEnter: PropTypes.func.isRequired,
  offer: OfferPropTypes,
  cardClass: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string.isRequired,
};
