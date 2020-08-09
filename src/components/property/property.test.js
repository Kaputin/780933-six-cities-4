import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Property} from "./property.jsx";
import {AuthorizationStatus} from "../../const.js";
import {NameSpace} from "../../reducer/name-space.js";
import thunk from "redux-thunk";
import {StaticRouter as Router} from "react-router-dom";

const mockStore = configureStore([thunk]);

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
  id: 0,
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

const selectedOffers = [
  {
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
    id: 0,
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
  },
  {
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
  }
];

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

const citiesTest = [
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam`,
  },
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam1`,
  },
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam2`,
  },
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam3`,
  },
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam4`,
  },
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: `Amsterdam5`,
  }
];

it(`Should Property render correctly`, () => {
  const store = mockStore({
    [NameSpace.STATE]: {
      selectedCity: citiesTest[0],
      selectedSortingOptions: `Popular`,
      hoveredOffer: null,
    },
    [NameSpace.DATA]: {
      selectedOffers,
      cities: citiesTest,
      nearOffers: [],
      commentsCurrentOffer: [],
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userProfile: {},
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <Property
              offer={offer}
              selectedCity={citiesTest[0]}
              nearOffers={selectedOffers}
              commentsCurrentOffer={reviews}
              loadData={() => {}}
            />,
          </Router>
        </Provider>,
        {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
