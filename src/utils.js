export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getDefaultCity = (citiesList) => {
  return citiesList[0];
};

export const getCityOffers = (offersList, selectedCity) => offersList.filter((offer) => offer.city === selectedCity.title);
// export const getCityCoordinates = (citiesList, selectedCity) => cities.find((city) => city.title === selectedCity.title).coordinates;
// export const getCityById = (citiesList, id) => cities.find((city) => city.id === id); // потом уберу оставил, чтобы не забыть
