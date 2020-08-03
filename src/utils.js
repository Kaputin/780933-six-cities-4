export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getDefaultCity = (citiesList) => {
  return citiesList[0];
};

export const getCityOffers = (offersList, selectedCity) => offersList.filter((offer) => offer.city === selectedCity.title);
// export const getCityCoordinates = (citiesList, selectedCity) => cities.find((city) => city.title === selectedCity.title).coordinates;
// export const getCityById = (citiesList, id) => cities.find((city) => city.id === id); // потом уберу оставил, чтобы не забыть

export const getSortOffers = (offers, selectedSortingOptions, defaultOffers) => {
  const sortingOffers = offers.slice(0);
  switch (selectedSortingOptions) {
    case `Popular`:
      return defaultOffers;
    case `Price: low to high`:
      return sortingOffers.sort((a, b) => a.price - b.price);
    case `Price: high to low`:
      return sortingOffers.sort((a, b) => a.price - b.price).reverse();
    case `Top rated first`:
      return sortingOffers.sort((a, b) => a.rating - b.rating).reverse();
    default:
      return sortingOffers;
  }
};
