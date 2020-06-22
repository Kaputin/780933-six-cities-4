import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

const offersCount = 312;
const offerTitles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`
];

const onOfferTitleClick = jest.fn();

describe(`Render App`, () => {
  it(`Should offer title be pressed`, () => {

    const main = shallow(
        <Main
          offersCount={offersCount}
          offerTitles={offerTitles}
          onOfferTitleClick={onOfferTitleClick}
        />
    );

    const offerTitle = main.find(`h2.place-card__name`);

    offerTitle.first().simulate(`click`);

    expect(onOfferTitleClick).toHaveBeenCalled();
  });
});
