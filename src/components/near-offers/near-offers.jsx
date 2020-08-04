import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {OfferPropTypes} from "../../propTypes.js";

export const NearOffers = ({offers}) => {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className={`near-places__list places__list tabs__content`}>
        {offers.map((offer) =>
          <PlaceCard
            offer={offer}
            key={offer.id}
            cardClass={`near-places__card`}
            wrapperClass={`near-places__image-wrapper`}
          />)
        }
      </div>
    </section>
  );
};


NearOffers.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
};
