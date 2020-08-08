import React from "react";
import renderer from "react-test-renderer";
import {Review} from "./review.jsx";

const review = {
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
};

it(`Should Review render correctly`, () => {
  const tree = renderer
    .create(<Review
      review={review}
      key={review.commentId}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
