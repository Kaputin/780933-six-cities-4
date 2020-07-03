import React from "react";
import PropTypes from "prop-types";
import {Main} from "../main/main.jsx";
import {OfferPropTypes} from "../../propTypes.js";

const offerTitleHandler = () => {};

export const App = ({offersCount, offers}) => {

  return (
    <Main offersCount={offersCount} offers={offers} onOfferTitleClick={offerTitleHandler} />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
};
