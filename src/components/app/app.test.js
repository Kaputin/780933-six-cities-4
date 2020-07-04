import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";

const offersCount = 312;
const offers = [
  {
    id: 1,
    type: `Apartment`,
    mark: true,
    price: 120,
    src: `img/apartment-01.jpg`,
    rating: {width: `80%`},
    title: `Beautiful & luxurious apartment at great location`
  }, {
    id: 2,
    type: `Private room`,
    mark: false,
    price: 80,
    src: `img/room.jpg`,
    rating: {width: `80%`},
    title: `Wood and stone place`
  }, {
    id: 3,
    type: `Apartment`,
    mark: false,
    price: 132,
    src: `img/apartment-02.jpg`,
    rating: {width: `80%`},
    title: `Canal View Prinsengracht`
  }, {
    id: 4,
    type: `Apartment`,
    mark: true,
    price: 180,
    src: `img/apartment-03.jpg`,
    rating: {width: `100%`},
    title: `Nice, cozy, warm big bed apartment`
  }
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offersCount={offersCount}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
