import {extend} from "../../utils.js";
import {parseUser, parseLogin} from "../../adapters/user.jsx";
import {AuthorizationStatus} from "../../const.js";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userProfile: {},
};

export const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_USER_PROFILE: `GET_USER_PROFILE`,
};

export const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  getUserProfile: (profile) => {
    return {
      type: ActionType.GET_USER_PROFILE,
      payload: profile
    };
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.GET_USER_PROFILE:
      return extend(state, {
        userProfile: action.payload,
      });
  }

  return state;
};

export const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(({data}) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.getUserProfile(parseUser(data)));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, parseLogin(authData))
      .then(({data}) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.getUserProfile(parseUser(data)));
      });
  },
};
