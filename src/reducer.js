import {extend, getDefaultCity, getCityOffers, getSortOffers} from "./utils.js";
import {offers} from "./mocks/offers.js";
import {cities} from "./mocks/cities.js";
import {sortingOptions} from "./const.js";

const initialState = {
  cities, // Изначальный список городов должен быть пустым
  selectedCityOffers: [],
  selectedCity: null,
  selectedSortingOptions: sortingOptions[0],
  hoveredOffer: null,
};

initialState.selectedCity = getDefaultCity(cities);

initialState.selectedCityOffers = getCityOffers(offers, initialState.selectedCity);

const DEFAULT_CITY_OFFERS = initialState.selectedCityOffers;

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_CITIES: `LOAD_CITIES`,
  CHANGE_SORT_OPTION: `CHANGE_SORT_OPTION`,
  CHANGE_HOVERED_OFFER: `CHANGE_HOVERED_OFFER`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  loadCities: () => ({
    type: ActionType.LOAD_CITIES,
    payload: cities,
  }),
  changeSortOption: (selectedSortingOptions) => ({
    type: ActionType.CHANGE_SORT_OPTION,
    payload: selectedSortingOptions,
  }),
  changeHoveredOffer: (hoveredOffer) => ({
    type: ActionType.CHANGE_HOVERED_OFFER,
    payload: hoveredOffer,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      const city = action.payload;
      return extend(state, {
        selectedCityOffers: getCityOffers(offers, city),
        selectedCity: city,
        selectedSortingOptions: sortingOptions[0],
      });
    case ActionType.LOAD_CITIES:
      const loadedCities = action.payload;
      return extend(state, {
        cities: loadedCities,
        selectedCityOffers: getCityOffers(offers, loadedCities[0]),
        selectedCity: loadedCities[0],
      });
    case ActionType.CHANGE_SORT_OPTION:
      const selectedOptions = action.payload;
      return extend(state, {
        selectedSortingOptions: selectedOptions,
        selectedCityOffers: getSortOffers(state.selectedCityOffers, selectedOptions, DEFAULT_CITY_OFFERS),
      });
    case ActionType.CHANGE_HOVERED_OFFER:
      const selectedOffer = action.payload;
      return extend(state, {
        hoveredOffer: selectedOffer,
      });
  }
  return state;
};
