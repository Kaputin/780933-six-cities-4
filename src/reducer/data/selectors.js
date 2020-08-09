import {NameSpace} from "../name-space.js";

export const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getCities = (state) => {
  return state[NameSpace.DATA].cities;
};

export const getComments = (state) => {
  return state[NameSpace.DATA].commentsCurrentOffer;
};

export const getNearOffers = (state) => {
  return state[NameSpace.DATA].nearOffers;
};

export const getOfferById = (state, id) => {
  const offers = getOffers(state);
  const filtredOffers = offers.filter((item) => item.id === Number(id));
  return filtredOffers[0];
};
