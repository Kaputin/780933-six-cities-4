import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {Map} from "./map.jsx";

const mockStore = configureStore([]);

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

const selectedCity = {
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 10
  },
  name: `Amsterdam`,
};

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
};

it(`Should Map render correctly`, () => {
  const store = mockStore({
    currentOffer: null,
    hoveredOffer: null,
    selectedSortingOptions: `Popular`
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Map
            offers={selectedOffers}
            hoveredOffer={offer}
            selectedCity={selectedCity}
          />,
        </Provider>,
        {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
