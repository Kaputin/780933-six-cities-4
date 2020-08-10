import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionCreator, ActionType, Operation} from "./data.js";

const api = createAPI(() => {});

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

it(`Reducer must return nearOffers`, () => {
  expect(reducer({
    offers,
    cities: citiesTest,
    nearOffers: [],
    commentsCurrentOffer: [],
  }, {
    type: ActionType.LOAD_NEAR_OFFERS,
    payload: serverOffers,
  })).toEqual({
    offers,
    cities: citiesTest,
    nearOffers: offers,
    commentsCurrentOffer: [],
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.loadOffers(offers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    });

    expect(ActionCreator.loadComments(comments)).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    });

    expect(ActionCreator.loadNearOffers(offers)).toEqual({
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: offers,
    });
  });
});


describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const onSuccess = jest.fn();
    const offerLoader = Operation.loadOffers(onSuccess);

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });
      });
  });
});
