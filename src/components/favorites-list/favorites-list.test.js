import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {FavoritesList} from "./favorites-list.jsx";
import {AuthorizationStatus} from "../../const.js";
import {NameSpace} from "../../reducer/name-space.js";
import thunk from "redux-thunk";
import {StaticRouter as Router} from "react-router-dom";

const mockStore = configureStore([thunk]);

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

it(`Should FavoritesList render correctly`, () => {
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
            <FavoritesList
              favoriteOffers={selectedOffers}
            />,
          </Router>
        </Provider>,
        {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
