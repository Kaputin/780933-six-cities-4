import {reducer, ActionCreator, ActionType} from "./state.js";

const offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      },
      name: `Amsterdam`,
    },
    description: `123`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 4,
      isPro: false,
      name: `Max`,
    },
    id: 0,
    images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    maxAdults: 5,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 4,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      },
      name: `Amsterdam`,
    },
    description: `123`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 4,
      isPro: false,
      name: `Max`,
    },
    id: 1,
    images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    maxAdults: 5,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 4,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
  }
];

const citiesTest = [
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam`,
  },
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam1`,
  },
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam2`,
  },
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam3`,
  },
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam4`,
  },
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam5`,
  }
];

const sortingOptions = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

const defaultCity = {
  name: `Amsterdam`,
  location: {
    latitude: 52.373057,
    longitude: 4.892557,
    zoom: 10,
  },
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    selectedCity: defaultCity,
    selectedSortingOptions: sortingOptions[0],
    hoveredOffer: null,
  });
});

it(`Reducer must return another selectedCity`, () => {
  expect(reducer({
    selectedCity: defaultCity,
    selectedSortingOptions: sortingOptions[0],
    hoveredOffer: null,
  }, {
    type: ActionType.CHANGE_CITY,
    payload: citiesTest[1],
  })).toEqual({
    selectedCity: citiesTest[1],
    selectedSortingOptions: sortingOptions[0],
    hoveredOffer: null,
  });
});

it(`Reducer must return new sorting option`, () => {
  expect(reducer({
    selectedCity: defaultCity,
    selectedSortingOptions: sortingOptions[0],
    hoveredOffer: null,
  }, {
    type: ActionType.CHANGE_SORT_OPTION,
    payload: sortingOptions[1],
  })).toEqual({
    selectedCity: defaultCity,
    selectedSortingOptions: sortingOptions[1],
    hoveredOffer: null,
  });
});

it(`Reducer must return new hoveredOffer`, () => {
  expect(reducer({
    selectedCity: defaultCity,
    selectedSortingOptions: sortingOptions[1],
    hoveredOffer: null,
  }, {
    type: ActionType.CHANGE_HOVERED_OFFER,
    payload: offers[0],
  })).toEqual({
    selectedCity: defaultCity,
    selectedSortingOptions: sortingOptions[1],
    hoveredOffer: offers[0],
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.changeCity(citiesTest[1])).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: citiesTest[1],
    });

    expect(ActionCreator.changeSortOption(sortingOptions[1])).toEqual({
      type: ActionType.CHANGE_SORT_OPTION,
      payload: sortingOptions[1],
    });

    expect(ActionCreator.changeHoveredOffer(offers[0])).toEqual({
      type: ActionType.CHANGE_HOVERED_OFFER,
      payload: offers[0],
    });
  });
});
