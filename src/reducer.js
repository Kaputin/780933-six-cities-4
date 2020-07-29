import {extend, getDefaultCity, getCityOffers, getSortOffers} from "./utils.js";
import {offers} from "./mocks/offers.js";
import {cities} from "./mocks/cities.js";
import {SORT_OPTIONS} from "./mocks/sorting-options.js";

const initialState = {
  cities, // Изначальный список городов должен быть пустым
  selectedOffers: [],
  selectedCity: null,
  selectedSortOptions: SORT_OPTIONS[0],
};

initialState.selectedCity = getDefaultCity(cities);

initialState.selectedOffers = getCityOffers(offers, initialState.selectedCity);

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_CITIES: `LOAD_CITIES`,
  CHANGE_SORT_OPTION: `CHANGE_SORT_OPTION`,
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
  changeSortOption: (selectedSortOptions) => ({
    type: ActionType.CHANGE_SORT_OPTION,
    payload: selectedSortOptions,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      const city = action.payload;
      return extend(state, {
        selectedOffers: getCityOffers(offers, city),
        selectedCity: city,
        selectedSortOptions: SORT_OPTIONS[0],
      });
    case ActionType.LOAD_CITIES:
      const loadedCities = action.payload;
      return extend(state, {
        cities: loadedCities,
        selectedOffers: getCityOffers(offers, loadedCities[0]),
        selectedCity: loadedCities[0],
      });
    case ActionType.CHANGE_SORT_OPTION:
      const selectedOptions = action.payload;
      return extend(state, {
        selectedSortOptions: selectedOptions,
        selectedOffers: getSortOffers(state.selectedOffers, selectedOptions),
      });
  }
  return state;
};
