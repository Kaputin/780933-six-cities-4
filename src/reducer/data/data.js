import {extend, getUniqueCities, changeKeyItemInArray} from "../../utils.js";
import {parseOffer, parseOfferToPost} from "../../adapters/offers.jsx";
import {parseComment, parseCommentToPost} from "../../adapters/comments.jsx";

const initialState = {
  offers: [],
  cities: [],
  nearOffers: [],
  commentsCurrentOffer: [],
  favoriteOffers: [],
};

export const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  CHANGE_FAVORITE: `CHANGE_FAVORITE`,
};

export const ActionCreator = {
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
  },
  loadFavoriteOffers: (favoriteOffers) => {
    return {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: favoriteOffers,
    };
  },
  changeFavorite: (offer) => {
    return {
      type: ActionType.CHANGE_FAVORITE,
      payload: offer,
    };
  },
  loadComments: (loadedcomments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: loadedcomments,
    };
  },
  loadNearOffers: (loadedNearOffers) => {
    return {
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: loadedNearOffers,
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
  loadFavoriteOffers: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavoriteOffers(response.data));
      });
  },
  changeFavorite: (offer) => (dispatch, getState, api) => {
    const status = offer.isFavorite ? 0 : 1;

    return api.post(`/favorite/${offer.id}/${status}`, parseOfferToPost(offer))
      .then(() => {
        dispatch(ActionCreator.changeFavorite(offer));
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
  sendComment: (id, newComment) => (dispatch, getState, api) => {
    return api.post(`/comments/${id}`, parseCommentToPost(newComment))
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data));
        return response;
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
    case ActionType.LOAD_FAVORITE_OFFERS:
      const adaptedFavoriteOffers = action.payload.map((offer) => parseOffer(offer));
      return extend(state, {
        favoriteOffers: adaptedFavoriteOffers,
      });
    case ActionType.CHANGE_FAVORITE:
      let newFavoriteOffers = state.favoriteOffers;
      const offers = state.offers;
      const nearOffers = state.nearOffers;

      if (action.payload.isFavorite === true) {
        newFavoriteOffers.splice(action.payload.index, 1);
      } else {
        const newOffer = extend(action.payload, {
          isFavorite: true,
        });
        newFavoriteOffers.push(newOffer);
      }
      return extend(state, {
        offers: changeKeyItemInArray(offers, action.payload, `isFavorite`),
        nearOffers: changeKeyItemInArray(nearOffers, action.payload, `isFavorite`),
        favoriteOffers: newFavoriteOffers,
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
