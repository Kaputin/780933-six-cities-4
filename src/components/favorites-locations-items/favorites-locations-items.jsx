import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {OfferPropTypes, CityPropTypes} from "../../propTypes.js";

export const FavoritesLocationsItems = ({offers, city}) => {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => {
          return <PlaceCard
            key={offer.id}
            offer={offer}
            cardClass={`favorites__card`}
            wrapperClass={`favorites__image-wrapper`}
          />;
        })}
      </div>
    </li>
  );
};


FavoritesLocationsItems.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  city: CityPropTypes.isRequired,
};
