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

it(`Should offer title be pressed`, () => {
  const onOfferTitleClick = jest.fn();

  const main = shallow(
      <Main
        offersCount={offersCount}
        offerTitles={offerTitles}
        onOfferTitleClick={onOfferTitleClick}
      />
  );
  main.find(`h2.place-card__name`).forEach((offerTitle) => {
    offerTitle.simulate(`click`);
  });

  expect(onOfferTitleClick.mock.calls.length).toBe(offerTitles.length);
});

// it(`Should offer title be pressed`, () => {
//   const onOfferTitleClick = jest.fn();
//
//   const main = shallow(
//       <Main
//         offersCount={offersCount}
//         offerTitles={offerTitles}
//         onOfferTitleClick={onOfferTitleClick}
//       />
//   );
//
//   const offerTitle = main.find(`h2.place-card__name`);
//
//   // offerTitle.first().simulate(`click`);
//   offerTitle.at(1).simulate(`click`);
//
//   expect(onOfferTitleClick.mock.calls.length).toBe(1);
// });
