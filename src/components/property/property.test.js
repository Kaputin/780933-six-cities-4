import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Property} from "./property.jsx";

const mockStore = configureStore([]);

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

const offers = [
  {
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
  }, {
    id: 2,
    bedrooms: 2,
    adults: 2,
    goods: [`Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    rating: 4.7,
    city: `Amsterdam`,
    type: `Private room`,
    mark: false,
    price: 80,
    src: `img/room.jpg`,
    stars: {width: `80%`},
    title: `Wood and stone place`,
    coordinates: [52.369553943508, 4.85309666406198],
    reviews: [{
      comment: `AAAAAAAAAAAAAAAAAAAAAAAAAA`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 3,
      commentRating: `80%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Lisa`
      }
    }]
  }, {
    id: 3,
    bedrooms: 5,
    adults: 8,
    goods: [`Washing machine`, `Coffee machine`, `Dishwasher`],
    rating: 4.6,
    city: `Amsterdam`,
    type: `Apartment`,
    mark: false,
    price: 132,
    src: `img/apartment-02.jpg`,
    stars: {width: `80%`},
    title: `Canal View Prinsengracht`,
    coordinates: [52.3909553943508, 4.929309666406198],
    reviews: [{
      comment: `Cool`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 4,
      commentRating: `80%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Tom`
      }
    },
    {
      comment: `Nice`,
      date: `2019-05-08T14:13:56.569Z`,
      commentId: 5,
      commentRating: `100%`,
      user: {
        avatar: `img/avatar-max.jpg`,
        userId: 4,
        pro: false,
        name: `Ilon`
      }
    }]
  }
];


const selectedCity = {
  id: 1,
  title: `Amsterdam`,
  coordinates: [52.38333, 4.9]
};

it(`Should Property render correctly`, () => {
  const store = mockStore({
    currentOffer: null,
    hoveredOffer: null,
    selectedSortingOptions: `Popular`
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Property
            offer={offer}
            selectedCity={selectedCity}
            offers={offers}
          />,
        </Provider>,
        {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
