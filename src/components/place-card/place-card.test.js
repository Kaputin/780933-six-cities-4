import React from "react";
import renderer from "react-test-renderer";
import {PlaceCard} from "./place-card.jsx";

const offer = {
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
};


it(`Should PlaceCard render correctly`, () => {
  const tree = renderer
    .create(<PlaceCard
      onOfferHover={() => {}}
      onOfferTitleClick={() => {}}
      offer={offer}
      key={offer.id}
      cardClass={`cities__place-card`}
      wrapperClass={`cities__image-wrapper`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
