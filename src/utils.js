import {MAX_CITIES_COUNT} from "./const.js";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getCityOffers = (offersList, selectedCity) => offersList.filter((offer) => offer.city.name === selectedCity.name);

export const getUniqueCities = (offers) => {
  const getUniqueObjectsArray = (array, key) => {
    return Object.values(array.reduce((acc, it) => Object.assign(acc, {[it[key]]: it}), {}));
  };

  const allCities = offers.map((offer) => offer.city);
  const uniqueCities = getUniqueObjectsArray(allCities, `name`).slice(0, MAX_CITIES_COUNT);

  return uniqueCities;
};

export const formatDate = (dateString) => new Date(dateString).toLocaleDateString(`en`, {month: `long`, year: `numeric`});

export const formatRating = (rating) => rating * 20 + `%`;

export const capitalize = (str) => str.replace(/(^|\s)\S/g, (a) => a.toUpperCase());
