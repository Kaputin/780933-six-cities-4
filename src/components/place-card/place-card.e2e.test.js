import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card";

Enzyme.configure({
  adapter: new Adapter(),
});

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

const onOfferTitleClick = jest.fn();
const onOfferHover = jest.fn();

describe(`PlaceCard e2e tests`, () => {
  it(`Should OfferTitle be pressed`, () => {

    const placeCard = shallow(
        <PlaceCard
          onOfferTitleClick={onOfferTitleClick}
          onOfferHover={onOfferHover}
          offer={offer}
          key={offer.id}
          cardClass={`cities__place-card`}
          wrapperClass={`cities__image-wrapper`}
        />
    );

    const offerTitle = placeCard.find(`h2.place-card__name`);

    offerTitle.first().simulate(`click`);

    expect(onOfferTitleClick).toHaveBeenCalled();
  });
});

describe(`Offer select e2e`, () => {
  it(`Should Offer be selected`, () => {

    const placeCard = shallow(
        <PlaceCard
          onOfferTitleClick={onOfferTitleClick}
          onOfferHover={onOfferHover}
          offer={offer}
          key={offer.id}
          cardClass={`cities__place-card`}
          wrapperClass={`cities__image-wrapper`}
        />
    );

    const placeCardComponent = placeCard.find(`.place-card`);

    placeCardComponent.simulate(`mouseenter`);

    expect(onOfferHover).toHaveBeenCalled();
  });
});
