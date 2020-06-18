import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = ({rentalCount, placeCardName}) => {

  return (
    <Main rentalCount={rentalCount} placeCardName={placeCardName} />
  );
};

App.propTypes = {
  rentalCount: PropTypes.number.isRequired,
  placeCardName: PropTypes.array.isRequired,
};

export default App;
