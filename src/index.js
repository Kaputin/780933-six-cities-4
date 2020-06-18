import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  RENTAL_OFFERS_COUNT: 312
};

const placeCardName = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`
];

ReactDOM.render(
    <App rentalCount={Settings.RENTAL_OFFERS_COUNT} placeCardName={placeCardName}/>,
    document.querySelector(`#root`)
);
