import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card";

Enzyme.configure({
  adapter: new Adapter(),
});

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
  coordinates: [52.3909553943508, 4.85309666406198],
  reviews: [{
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    commentId: 1,
    commentRating: `80%`,
    user: {
      avatar: `img/avatar-max.jpg`,
      userId: 4,
      pro: false,
      name: `Max`
    }
  },
  {
    comment: `123.`,
    date: `2019-05-08T14:13:56.569Z`,
    commentId: 2,
    commentRating: `100%`,
    user: {
      avatar: `img/avatar-max.jpg`,
      userId: 4,
      pro: true,
      name: `Ann`
    }
  }]
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
          onOfferMouseEnter={onOfferMouseEnter}
          offer={offer}
          key={offer.id}
          cardClass={`cities__place-card`}
          wrapperClass={`cities__image-wrapper`}
        />
    );

    const placeCardComponent = placeCard.find(`.place-card`);

    placeCardComponent.simulate(`mouseenter`);

    expect(onOfferMouseEnter).toHaveBeenCalled();
  });
});
