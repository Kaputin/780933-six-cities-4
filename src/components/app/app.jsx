import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {Main} from "../main/main.jsx";
import {OfferPropTypes, CityPropTypes} from "../../propTypes.js";

const offerTitleHandler = () => {};

export class App extends PureComponent {
  constructor(props) {
    super(props);
  }


  // export const App = (props) => { // потом уберу оставил, чтобы не забыть
  //   const {
  //     loadCities,
  //     cities,
  //     selectedOffers,
  //     selectedCity,
  //     selectedCoordinates,
  //     onCityTitleClick,
  //   } = props;

  // componentDidMount() {
  //   this.prop.loadCities();
  // }

  render() {
    const {
      // loadCities, // потом уберу оставил, чтобы не забыть
      cities,
      selectedOffers,
      selectedCity,
      onCityTitleClick,
    } = this.props;

    return (
      <Main
        offersCount={selectedOffers.length}
        offers={selectedOffers}
        cities={cities}
        selectedCity={selectedCity}
        onCityTitleClick={onCityTitleClick}
        onOfferTitleClick={offerTitleHandler} />
    );
  }
}

App.propTypes = {
  cities: PropTypes.arrayOf(CityPropTypes).isRequired,
  selectedOffers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  selectedCity: CityPropTypes,
  onCityTitleClick: PropTypes.func.isRequired,
};

// App.defaultProps = { // потом уберу оставил, чтобы не забыть
//   selectedCity: {
//     id: 1,
//     title: `Amsterdam`,
//     coordinates: [52.38333, 4.9]
//   }
// };

const mapStateToProps = (state) => ({
  cities: state.cities,
  selectedOffers: state.selectedOffers,
  selectedCity: state.selectedCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityTitleClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  loadCities() {
    dispatch(ActionCreator.loadCities());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
