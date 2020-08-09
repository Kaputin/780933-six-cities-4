import {reducer, ActionCreator, ActionType} from "./user.js";
import {AuthorizationStatus} from "../../const.js";

const userProfile = {
  avatar: `123.img`,
  email: `123@mail.ru`,
  id: 123,
  isPro: false,
  name: `123`,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userProfile: {},
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userProfile: {},
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    userProfile: {},
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
    userProfile: {},
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userProfile: {},
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
    userProfile: {},
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    userProfile: {},
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userProfile: {},
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userProfile: {},
  });
});

it(`Reducer should change user profile by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
    userProfile: {},
  }, {
    type: ActionType.GET_USER_PROFILE,
    payload: userProfile,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    userProfile,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });
});
