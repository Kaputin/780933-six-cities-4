import {extend, getDefaultCity, getCityOffers} from "./utils.js";
import {offers} from "./mocks/offers.js";
import {cities} from "./mocks/cities.js";

const initialState = {
  cities, // Изначальный список городов должен быть пустым
  selectedOffers: [],
  selectedCity: null,
};
//
// const initialState = { // потом уберу оставил, чтобы не забыть
//   cities: [],
//   selectedCityOffers: [],
//   selectedCity: {
//     id: 1,
//     title: `Amsterdam`,
//     coordinates: [52.38333, 4.9]
//   }
// };

// const initialState = {
//   cities: [],
//   selectedCityOffers: [],
//   selectedCity: ``,
//   coordinates: [],
// };

initialState.selectedCity = getDefaultCity(cities);

initialState.selectedOffers = getCityOffers(offers, initialState.selectedCity);

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_CITIES: `LOAD_CITIES`,
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
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      const city = action.payload;
      return extend(state, {
        selectedOffers: getCityOffers(offers, city),
        selectedCity: city,
      });
    case ActionType.LOAD_CITIES:
      const loadedCities = action.payload;
      return extend(state, {
        cities: loadedCities,
        selectedOffers: getCityOffers(offers, loadedCities[0]),
        selectedCity: loadedCities[0],
      });
  }
  return state;
};
