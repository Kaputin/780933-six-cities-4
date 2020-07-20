import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";

const offers = [
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
  }, {
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
  }, {
    id: 8,
    city: `Cologne`,
    type: `Private room`,
    mark: false,
    price: 80,
    src: `img/room.jpg`,
    rating: {width: `80%`},
    title: `Wood and stone place`,
    coordinates: [50.93333999, 6.9666]
  }, {
    id: 9,
    city: `Cologne`,
    type: `Apartment`,
    mark: true,
    price: 180,
    src: `img/apartment-03.jpg`,
    rating: {width: `100%`},
    title: `Nice, cozy, warm big bed apartment`,
    coordinates: [50.933559, 6.9211]
  }, {
    id: 10,
    city: `Brussels`,
    type: `Private room`,
    mark: false,
    price: 80,
    src: `img/room.jpg`,
    rating: {width: `80%`},
    title: `Wood and stone place`,
    coordinates: [50.850400, 4.3487111]
  }, {
    id: 11,
    city: `Hamburg`,
    type: `Apartment`,
    mark: true,
    price: 180,
    src: `img/apartment-03.jpg`,
    rating: {width: `100%`},
    title: `Nice, cozy, warm big bed apartment`,
    coordinates: [53.575333333, 10.015399999]
  }, {
    id: 12,
    city: `Hamburg`,
    type: `Apartment`,
    mark: true,
    price: 180,
    src: `img/apartment-03.jpg`,
    rating: {width: `100%`},
    title: `Nice, cozy, warm big bed apartment`,
    coordinates: [53.5758777, 10.0154444]
  }, {
    id: 13,
    city: `Dusseldorf`,
    type: `Apartment`,
    mark: true,
    price: 180,
    src: `img/apartment-03.jpg`,
    rating: {width: `100%`},
    title: `Nice, cozy, warm big bed apartment`,
    coordinates: [51.172999, 6.47777]
  }, {
    id: 14,
    city: `Dusseldorf`,
    type: `Apartment`,
    mark: true,
    price: 120,
    src: `img/apartment-01.jpg`,
    rating: {width: `80%`},
    title: `Beautiful & luxurious apartment at great location`,
    coordinates: [51.1755, 6.469999]
  }
];

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

it(`Should Main render correctly`, () => {

  const tree = renderer
    .create(<Main
      offersCount={offers.length}
      offers={offers}
      cities={cities}
      selectedCity={cities[0]}
      onCityTitleClick={() => {}}
      onOfferTitleClick={() => {}}
    />,
    {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
