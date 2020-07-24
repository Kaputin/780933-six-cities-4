export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getDefaultCity = (citiesList) => {
  return citiesList[0];
};

export const getOffersByCities = (offersList, selectedCity) => offersList.filter((offer) => offer.city === selectedCity.title);
export const getCoordinatesByCities = (cities, selectedCity) => cities.find((city) => city.title === selectedCity.title).coordinates;
// export const getCityById = (cities, id) => cities.find((city) => city.id === id); // потом уберу оставил, чтобы не забыть
