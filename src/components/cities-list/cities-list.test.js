import React from "react";
import renderer from "react-test-renderer";
import {CitiesList} from "./cities-list.jsx";

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

const selectedCity = {
  id: 1,
  title: `Amsterdam`,
  coordinates: [52.38333, 4.9]
};

it(`Should OffersList render correctly`, () => {
  const tree = renderer
    .create(<CitiesList
      cities={cities}
      selectedCity={selectedCity}
      onCityTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
