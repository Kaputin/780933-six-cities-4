import {NameSpace} from "../name-space.js";

export const getAuthorizationStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

export const getUserProfile = (state) => state[NameSpace.USER].userProfile || null;
