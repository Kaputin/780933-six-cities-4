import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  RENTAL_OFFERS_COUNT: 312
};

const offerTitles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`
];

ReactDOM.render(
    <App offersCount={Settings.RENTAL_OFFERS_COUNT} offerTitles={offerTitles}/>,
    document.querySelector(`#root`)
);
