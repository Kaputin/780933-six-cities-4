import {extend, getUniqueCities} from "../../utils.js";
import {parseOffer} from "../../adapters/offers.jsx";
import {parseComment} from "../../adapters/comments.jsx";

const initialState = {
  offers: [],
  cities: [],
  nearOffers: [],
  commentsCurrentOffer: [],
};

export const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
};

export const ActionCreator = {
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
  },
  loadComments: (offerId) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: offerId,
    };
  },
  loadNearOffers: (offerId) => {
    return {
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: offerId,
    };
  },
};

export const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },
  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data));
      });
  },
  loadNearOffers: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        dispatch(ActionCreator.loadNearOffers(response.data));
      });
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      const adaptedOffers = action.payload.map((offer) => parseOffer(offer));
      const uniqueCities = getUniqueCities(adaptedOffers);
      return extend(state, {
        offers: adaptedOffers,
        cities: uniqueCities,
      });
    case ActionType.LOAD_COMMENTS:
      const adaptedComments = action.payload.map((comment) => parseComment(comment));
      return extend(state, {
        commentsCurrentOffer: adaptedComments,
      });
    case ActionType.LOAD_NEAR_OFFERS:
      const adaptedNearOffers = action.payload.map((offer) => parseOffer(offer));
      return extend(state, {
        nearOffers: adaptedNearOffers,
      });
  }

  return state;
};
