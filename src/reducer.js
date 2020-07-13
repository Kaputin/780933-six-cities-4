import {extend, getDefaultCity, getOffersByCities, getCoordinatesByCities} from "./utils.js";
import {offers} from "./mocks/offers.js";
import {cities} from "./mocks/cities.js";

const initialState = {
  cities,
  selectedOffers: [],
  selectedCity: ``,
  selectedCoordinates: [],
};

initialState.selectedCity = getDefaultCity(cities);
initialState.selectedCoordinates = getCoordinatesByCities(cities, initialState.selectedCity);
initialState.selectedOffers = getOffersByCities(offers, initialState.selectedCity);


export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city.title,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        selectedOffers: getOffersByCities(offers, action.payload),
        selectedCity: action.payload,
        selectedCoordinates: getCoordinatesByCities(cities, action.payload),
      });
  }

  return state;
};
