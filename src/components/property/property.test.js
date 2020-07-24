import React from "react";
import renderer from "react-test-renderer";
import {Property} from "./property.jsx";

const offer = {
  id: 1,
  bedrooms: 3,
  adults: 4,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  rating: 4.8,
  city: `Amsterdam`,
  type: `Apartment`,
  mark: true,
  price: 120,
  src: `img/apartment-01.jpg`,
  stars: {width: `80%`},
  title: `Beautiful & luxurious apartment at great location`,
  coordinates: [52.3909553943508, 4.85309666406198]
};

it(`Should Property render correctly`, () => {
  const tree = renderer
    .create(<Property
      offer={offer}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
