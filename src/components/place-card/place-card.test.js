import React from "react";
import renderer from "react-test-renderer";
import {PlaceCard} from "./place-card.jsx";

const offer = {
  id: 1,
  type: `Apartment`,
  mark: true,
  price: 120,
  src: `img/apartment-01.jpg`,
  rating: {width: `80%`},
  title: `Beautiful & luxurious apartment at great location`
};

it(`Should PlaceCard render correctly`, () => {
  const tree = renderer
    .create(<PlaceCard
      onOfferTitleClick={() => {}}
      onOfferMouseEnter={() => {}}
      offer={offer}
      key={offer.id}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
