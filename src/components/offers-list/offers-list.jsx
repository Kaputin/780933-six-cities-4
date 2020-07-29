import React from "react";
import PropTypes from "prop-types";
import {PlaceCard} from "../place-card/place-card.jsx";
import {OfferPropTypes} from "../../propTypes.js";

export const OffersList = ({onOfferTitleClick, onOfferMouseEnter, offers, placeClass, cardClass, wrapperClass}) => {

  return (
    <div className={`${placeClass} places__list tabs__content`}>
      {offers.map((offer) =>
        <PlaceCard
          onOfferTitleClick={onOfferTitleClick}
          onOfferMouseEnter={onOfferMouseEnter}
          offer={offer}
          key={offer.id}
          cardClass={cardClass}
          wrapperClass={wrapperClass}
        />)
      }
    </div>
  );
};


OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  onOfferMouseEnter: PropTypes.func.isRequired,
  placeClass: PropTypes.string.isRequired,
  cardClass: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string.isRequired
};
