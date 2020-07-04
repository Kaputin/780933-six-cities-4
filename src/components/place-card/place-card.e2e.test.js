import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card";

Enzyme.configure({
  adapter: new Adapter(),
});

const offer = {
  id: 1,
  type: `Apartment`,
  mark: true,
  price: 120,
  src: `img/apartment-01.jpg`,
  rating: {width: `80%`},
  title: `Beautiful & luxurious apartment at great location`
};

const onOfferTitleClick = jest.fn();
const onOfferMouseEnter = jest.fn();

describe(`PlaceCard e2e tests`, () => {
  it(`Should OfferTitle be pressed`, () => {

    const placeCard = shallow(
        <PlaceCard
          onOfferTitleClick={onOfferTitleClick}
          onOfferMouseEnter={onOfferMouseEnter}
          offer={offer}
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
          onOfferMouseEnter={onOfferMouseEnter}
          offer={offer}
        />
    );

    const placeCardComponent = placeCard.find(`.place-card`);

    placeCardComponent.simulate(`mouseenter`);

    expect(onOfferMouseEnter).toHaveBeenCalled();
  });
});
