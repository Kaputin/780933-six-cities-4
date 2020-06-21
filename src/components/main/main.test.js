import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const offersCount = 312;
const offerTitles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`
];

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      offersCount={offersCount}
      offerTitles={offerTitles}
      onOfferTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
