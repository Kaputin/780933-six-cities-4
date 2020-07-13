export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getDefaultCity = (citiesList) => {
  return citiesList[4].title;
};

export const getOffersByCities = (offersList, selectedCity) => offersList.filter((offer) => offer.city === selectedCity);
export const getCoordinatesByCities = (cities, selectedCity) => cities.find((city) => city.title === selectedCity).coordinates;
