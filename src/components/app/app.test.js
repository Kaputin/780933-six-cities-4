import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const offersCount = 312;
const offerTitles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offersCount={offersCount}
      offerTitles={offerTitles}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
