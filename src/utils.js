export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getDefaultCity = (citiesList) => {
  return citiesList[0];
};

export const getCityOffers = (offersList, selectedCity) => offersList.filter((offer) => offer.city === selectedCity.title);
// export const getCityCoordinates = (citiesList, selectedCity) => cities.find((city) => city.title === selectedCity.title).coordinates;
// export const getCityById = (citiesList, id) => cities.find((city) => city.id === id); // потом уберу оставил, чтобы не забыть

export const getSortOffers = (offers, selectedSortOptions) => {
  const sortOffers = offers.slice(0);
  switch (selectedSortOptions) {
    case `Popular`:
      return sortOffers;
    case `Price: low to high`:
      return sortOffers.sort((a, b) => a.price - b.price);
    case `Price: high to low`:
      return sortOffers.sort((a, b) => a.price - b.price).reverse();
    case `Top rated first`:
      return sortOffers.sort((a, b) => a.rating - b.rating).reverse();
    default:
      return sortOffers;
  }
};
