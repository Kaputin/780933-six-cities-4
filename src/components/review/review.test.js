import React from "react";
import renderer from "react-test-renderer";
import {Review} from "./review.jsx";

const review = {
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
