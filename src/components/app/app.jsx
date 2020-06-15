import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {rentalOffersCount} = props;

  return (
    <Main rentalOffersCount={rentalOffersCount} />
  );
};

export default App;
