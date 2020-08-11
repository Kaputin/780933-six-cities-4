import {NameSpace} from "../name-space.js";
import {MAX_NEAR_CITIES} from "../../const.js";

export const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getFavoriteOffers = (state) => {
  return state[NameSpace.DATA].favoriteOffers;
};

export const getCities = (state) => {
  return state[NameSpace.DATA].cities;
};

export const getComments = (state) => {
  return state[NameSpace.DATA].commentsCurrentOffer;
};

export const getNearOffers = (state) => {
  return state[NameSpace.DATA].nearOffers.slice(0, MAX_NEAR_CITIES);
};

export const getOfferById = (state, id) => {
  const offers = getOffers(state);
  const filtredOffers = offers.filter((item) => item.id === Number(id));
  return filtredOffers[0];
};
