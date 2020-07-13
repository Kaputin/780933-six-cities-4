import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";

const offers = [
  {
    id: 1,
    type: `Apartment`,
    mark: true,
    price: 120,
    src: `img/apartment-01.jpg`,
    rating: {width: `80%`},
    title: `Beautiful & luxurious apartment at great location`,
    coordinates: [52.3909553943508, 4.85309666406198]
  }, {
    id: 2,
    type: `Private room`,
    mark: false,
    price: 80,
    src: `img/room.jpg`,
    rating: {width: `80%`},
    title: `Wood and stone place`,
    coordinates: [52.369553943508, 4.85309666406198]
  }, {
    id: 3,
    type: `Apartment`,
    mark: false,
    price: 132,
    src: `img/apartment-02.jpg`,
    rating: {width: `80%`},
    title: `Canal View Prinsengracht`,
    coordinates: [52.3909553943508, 4.929309666406198]
  }, {
    id: 4,
    type: `Apartment`,
    mark: true,
    price: 180,
    src: `img/apartment-03.jpg`,
    rating: {width: `100%`},
    title: `Nice, cozy, warm big bed apartment`,
    coordinates: [52.3809553943508, 4.939309666406198]
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


const selectedCity = `Amsterdam`;
const selectedCoordinates = [51.1722, 6.46];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      cities={cities}
      offers={offers}
      selectedCity={selectedCity}
      selectedCoordinates={selectedCoordinates}
    />,
    {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
