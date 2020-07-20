import {reducer, ActionType} from "./reducer.js";

const cities = [
  {
    id: 1,
    title: `Amsterdam`,
    coordinates: [52.38333, 4.9]
  },
  {
    id: 2,
    title: `Paris`,
    coordinates: [48.85341, 2.3488]
  },
  {
    id: 3,
    title: `Cologne`,
    coordinates: [50.93333, 6.95]
  },
  {
    id: 4,
    title: `Brussels`,
    coordinates: [50.85045, 4.34878]
  },
  {
    id: 5,
    title: `Hamburg`,
    coordinates: [53.57532, 10.01534]
  },
  {
    id: 6,
    title: `Dusseldorf`,
    coordinates: [51.1722, 6.46]
  }
];

const offersFirstCity = [
  {
    id: 1,
    city: `Amsterdam`,
    type: `Apartment`,
    mark: true,
    price: 120,
    src: `img/apartment-01.jpg`,
    rating: {width: `80%`},
    title: `Beautiful & luxurious apartment at great location`,
    coordinates: [52.3909553943508, 4.85309666406198]
  }, {
    id: 2,
    city: `Amsterdam`,
    type: `Private room`,
    mark: false,
    price: 80,
    src: `img/room.jpg`,
    rating: {width: `80%`},
    title: `Wood and stone place`,
    coordinates: [52.369553943508, 4.85309666406198]
  }, {
    id: 3,
    city: `Amsterdam`,
    type: `Apartment`,
    mark: false,
    price: 132,
    src: `img/apartment-02.jpg`,
    rating: {width: `80%`},
    title: `Canal View Prinsengracht`,
    coordinates: [52.3909553943508, 4.929309666406198]
  }, {
    id: 4,
    city: `Amsterdam`,
    type: `Apartment`,
    mark: true,
    price: 180,
    src: `img/apartment-03.jpg`,
    rating: {width: `100%`},
    title: `Nice, cozy, warm big bed apartment`,
    coordinates: [52.3809553943508, 4.939309666406198]
  }
];

const offersSecondCity = [
  {
    id: 5,
    city: `Paris`,
    type: `Apartment`,
    mark: true,
    price: 180,
    src: `img/apartment-03.jpg`,
    rating: {width: `100%`},
    title: `Nice, cozy, warm big bed apartment`,
    coordinates: [48.8534090000000, 2.3488010000000]
  }, {
    id: 6,
    city: `Paris`,
    type: `Private room`,
    mark: false,
    price: 80,
    src: `img/room.jpg`,
    rating: {width: `80%`},
    title: `Wood and stone place`,
    coordinates: [48.853599, 2.348900]
  }, {
    id: 7,
    city: `Paris`,
    type: `Apartment`,
    mark: true,
    price: 180,
    src: `img/apartment-03.jpg`,
    rating: {width: `100%`},
    title: `Nice, cozy, warm big bed apartment`,
    coordinates: [48.85359666, 2.348200]
  }
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    cities,
    selectedOffers: offersFirstCity,
    selectedCity: cities[0],
  });
});

it(`Reducer must return another selectedCity & offers`, () => {
  expect(reducer({
    cities,
    selectedOffers: [],
    selectedCity: null,
  }, {
    type: ActionType.CHANGE_CITY,
    payload: cities[1],
  })).toEqual({
    cities,
    selectedOffers: offersSecondCity,
    selectedCity: cities[1],
  });
});
