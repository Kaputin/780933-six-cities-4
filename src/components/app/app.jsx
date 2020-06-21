import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const offerTitleHandler = () => {};

const App = ({offersCount, offerTitles}) => {

  return (
    <Main offersCount={offersCount} offerTitles={offerTitles} onOfferTitleClick={offerTitleHandler} />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offerTitles: PropTypes.array.isRequired,
};

export default App;
