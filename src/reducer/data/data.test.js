// import {reducer, ActionCreator, ActionType} from "./data.js";
import {reducer, ActionType} from "./data.js";

const offers = [
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
      name: `Paris`,
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

const serverOffers = [
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.3909553943508,
        "longitude": 4.85309666406198,
        "zoom": 10
      },
      "name": `Amsterdam`,
    },
    "description": `123`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/avatar-max.jpg`,
      "id": 4,
      "is_pro": false,
      "name": `Max`,
    },
    "id": 0,
    "images": [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.3909553943508,
      "longitude": 4.85309666406198,
      "zoom": 10,
    },
    "max_adults": 5,
    "preview_image": `img/apartment-01.jpg`,
    "price": 120,
    "rating": 4,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `Apartment`,
  },
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.3909553943508,
        "longitude": 4.85309666406198,
        "zoom": 10
      },
      "name": `Paris`,
    },
    "description": `123`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/avatar-max.jpg`,
      "id": 4,
      "is_pro": false,
      "name": `Max`,
    },
    "id": 1,
    "images": [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.3909553943508,
      "longitude": 4.85309666406198,
      "zoom": 10,
    },
    "max_adults": 5,
    "preview_image": `img/apartment-01.jpg`,
    "price": 120,
    "rating": 4,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `Apartment`,
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
    name: `Paris`,
  },
];

const comments = [
  {
    comment: `123`,
    date: `2019-07-15T16:15:06.577Z`,
    id: 1,
    rating: 5,
    user: {
      avatarUrl: `123.jpg`,
      isPro: true,
      name: `123`,
      userId: 1,
    }
  },
  {
    comment: `123456`,
    date: `2019-07-15T16:15:06.577Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `123.jpg`,
      isPro: true,
      name: `123`,
      userId: 1,
    }
  },
];

const serverComments = [
  {
    "comment": `123`,
    "date": `2019-07-15T16:15:06.577Z`,
    "id": 1,
    "rating": 5,
    "user": {
      "avatar_url": `123.jpg`,
      "is_pro": true,
      "name": `123`,
      "id": 1,
    }
  },
  {
    "comment": `123456`,
    "date": `2019-07-15T16:15:06.577Z`,
    "id": 1,
    "rating": 4,
    "user": {
      "avatar_url": `123.jpg`,
      "is_pro": true,
      "name": `123`,
      "id": 1,
    }
  },
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    offers: [],
    cities: [],
    nearOffers: [],
    commentsCurrentOffer: [],
  });
});

it(`Reducer must return another cities & offers`, () => {
  expect(reducer({
    offers: [],
    cities: [],
    nearOffers: [],
    commentsCurrentOffer: [],
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: serverOffers,
  })).toEqual({
    offers,
    cities: citiesTest,
    nearOffers: [],
    commentsCurrentOffer: [],
  });
});

it(`Reducer must return comments`, () => {
  expect(reducer({
    offers,
    cities: citiesTest,
    nearOffers: [],
    commentsCurrentOffer: [],
  }, {
    type: ActionType.LOAD_COMMENTS,
    payload: serverComments,
  })).toEqual({
    offers,
    cities: citiesTest,
    nearOffers: [],
    commentsCurrentOffer: comments,
  });
});
//
// it(`Reducer must return near offers`, () => {
//   expect(reducer({
//     selectedCity: defaultCity,
//     selectedSortingOptions: sortingOptions[1],
//     hoveredOffer: null,
//   }, {
//     type: ActionType.CHANGE_HOVERED_OFFER,
//     payload: offers[0],
//   })).toEqual({
//     selectedCity: defaultCity,
//     selectedSortingOptions: sortingOptions[1],
//     hoveredOffer: offers[0],
//   });
// });
//
// describe(`Action creators work correctly`, () => {
//   it(`Action creator for require authorization returns correct action`, () => {
//     expect(ActionCreator.changeCity(citiesTest[1])).toEqual({
//       type: ActionType.CHANGE_CITY,
//       payload: citiesTest[1],
//     });
//
//     expect(ActionCreator.changeSortOption(sortingOptions[1])).toEqual({
//       type: ActionType.CHANGE_SORT_OPTION,
//       payload: sortingOptions[1],
//     });
//
//     expect(ActionCreator.changeHoveredOffer(offers[0])).toEqual({
//       type: ActionType.CHANGE_HOVERED_OFFER,
//       payload: offers[0],
//     });
//   });
// });
