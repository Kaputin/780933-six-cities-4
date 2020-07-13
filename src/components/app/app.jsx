import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {Main} from "../main/main.jsx";
import {OfferPropTypes, CityPropTypes} from "../../propTypes.js";

const offerTitleHandler = () => {};

export const App = (props) => {
  const {
    cities,
    selectedOffers,
    selectedCity,
    selectedCoordinates,
    onCityTitleClick,
  } = props;

  return (
    <Main
      offersCount={selectedOffers.length}
      offers={selectedOffers}
      cities={cities}
      selectedCity={selectedCity}
      selectedCoordinates={selectedCoordinates}
      onCityTitleClick={onCityTitleClick}
      onOfferTitleClick={offerTitleHandler} />
  );
};

App.propTypes = {
  cities: PropTypes.arrayOf(CityPropTypes).isRequired,
  selectedOffers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  selectedCity: PropTypes.string.isRequired,
  selectedCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  selectedOffers: state.selectedOffers,
  selectedCity: state.selectedCity,
  selectedCoordinates: state.selectedCoordinates,
});

const mapDispatchToProps = (dispatch) => ({
  onCityTitleClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
