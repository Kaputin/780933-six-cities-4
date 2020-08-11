import React from "react";
import PropTypes from "prop-types";
import {OfferPropTypes} from "../../propTypes.js";
import {FavoritesLocationsItems} from "../favorites-locations-items/favorites-locations-items.jsx";

import {getUniqueCities} from "../../utils.js";

export const FavoritesList = ({favoriteOffers}) => {

  const uniqueCities = getUniqueCities(favoriteOffers);

  return (
    <ul className="favorites__list">
      {uniqueCities.map((city, i) => {
        const favoriteCityOffers = favoriteOffers.filter((favoriteOffer) => {
          return favoriteOffer.city.name === city.name;
        });

        return <FavoritesLocationsItems
          key={i}
          offers={favoriteCityOffers}
          city={city}
        />;
      })}
    </ul>
  );
};


FavoritesList.propTypes = {
  favoriteOffers: PropTypes.arrayOf(OfferPropTypes).isRequired,
};
