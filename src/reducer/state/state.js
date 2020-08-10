import {extend} from "../../utils.js";
import {sortingOptions} from "../../const.js";

const defaultCity = {
  name: `Amsterdam`,
  location: {
    latitude: 52.373057,
    longitude: 4.892557,
    zoom: 10,
  },
};

const initialState = {
  selectedCity: defaultCity,
  selectedSortingOptions: sortingOptions[0],
  hoveredOffer: null,
};

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT_OPTION: `CHANGE_SORT_OPTION`,
  CHANGE_HOVERED_OFFER: `CHANGE_HOVERED_OFFER`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
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
        selectedCity: city,
        selectedSortingOptions: sortingOptions[0],
      });
    case ActionType.CHANGE_SORT_OPTION:
      const selectedOptions = action.payload;
      return extend(state, {
        selectedSortingOptions: selectedOptions,
      });
    case ActionType.CHANGE_HOVERED_OFFER:
      const selectedOffer = action.payload;
      return extend(state, {
        hoveredOffer: selectedOffer,
      });
  }
  return state;
};
