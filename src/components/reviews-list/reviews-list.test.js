import React from "react";
import renderer from "react-test-renderer";
import {ReviewsList} from "./reviews-list.jsx";

const reviews = [
  {
    comment: `12345`,
    date: `019-05-08T14:13:56.569Z`,
    id: 6,
    rating: 4,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      userId: 4,
      isPro: false,
      name: `Ilon`,
    },
  },
  {
    comment: `123`,
    date: `019-05-08T14:13:56.569Z`,
    id: 5,
    rating: 4,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      userId: 4,
      isPro: false,
      name: `Ilon`,
    },
  }
];


it(`Should ReviewsList render correctly`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={reviews}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
