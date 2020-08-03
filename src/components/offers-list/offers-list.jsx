import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {OfferPropTypes} from "../../propTypes.js";

export const OffersList = ({onOfferTitleClick, offers}) => {

  return (
    <div className={`cities__places-list places__list tabs__content`}>
      {offers.map((offer) =>
        <PlaceCard
          onOfferTitleClick={onOfferTitleClick}
          offer={offer}
          key={offer.id}
          cardClass={`cities__place-card`}
          wrapperClass={`cities__image-wrapper`}
        />)
      }
    </div>
  );
};


OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};
