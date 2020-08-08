import {NameSpace} from "../name-space.js";
import {createSelector} from "reselect";
import {getOffers} from "../data/selectors.js";

export const getSelectedCity = (state) => {
  return state[NameSpace.STATE].selectedCity;
};
export const getSelectedSortingOptions = (state) => {
  return state[NameSpace.STATE].selectedSortingOptions;
};
export const getHoveredOffer = (state) => {
  return state[NameSpace.STATE].hoveredOffer;
};
export const getCurrentOffer = (state) => {
  return state[NameSpace.STATE].currentOffer;
};

export const getCityOffers = createSelector(
    getOffers,
    getSelectedCity,

    (offersList, selectedCity) => {
      return offersList.filter((offer) => offer.city.name === selectedCity.name);
    }
);

export const getSortOffers = createSelector(
    getCityOffers,
    getSelectedSortingOptions,

    (offers, selectedSortingOptions) => {
      const sortingOffers = offers.slice();
      switch (selectedSortingOptions) {
        case `Popular`:
          return sortingOffers;
        case `Price: low to high`:
          return sortingOffers.sort((a, b) => a.price - b.price);
        case `Price: high to low`:
          return sortingOffers.sort((a, b) => a.price - b.price).reverse();
        case `Top rated first`:
          return sortingOffers.sort((a, b) => a.rating - b.rating).reverse();
        default:
          return sortingOffers;
      }
    }
);
