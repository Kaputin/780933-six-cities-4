import React from "react";
import renderer from "react-test-renderer";
import {ReviewsList} from "./reviews-list.jsx";

const reviews = [
  {
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
