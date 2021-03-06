import {MAX_CITIES_COUNT, RATING_STAR_WIDTH} from "./const.js";

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

export const formatRating = (rating) => rating * RATING_STAR_WIDTH + `%`;

export const capitalize = (str) => str.replace(/(^|\s)\S/g, (a) => a.toUpperCase());

export const changeKeyItemInArray = (array, newItem, key) => {
  return array.map((item) => {
    if (item.id === newItem.id) {
      return extend(item, {
        [key]: !item[key],
      });
    }
    return item;
  });
};


export const getSortedReviews = (array) => array.sort((a, b) => new Date(b.date) - new Date(a.date));
