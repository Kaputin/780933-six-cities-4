import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {Main} from "../main/main.jsx";
import {Property} from "../property/property.jsx";
import {OfferPropTypes, CityPropTypes} from "../../propTypes.js";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

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

// App.defaultProps = { // потом уберу оставил, чтобы не забыть
//   selectedCity: {
//     id: 1,
//     title: `Amsterdam`,
//     coordinates: [52.38333, 4.9]
//   }
// };

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.offerTitleClickHandler = this.offerTitleClickHandler.bind(this);

    this.state = {
      currentOffer: null
    };
  }

  offerTitleClickHandler(offer) {
    this.setState({
      currentOffer: offer
    });
  }

  _renderApp() {
    const {
      cities,
      selectedOffers,
      selectedCity,
      onCityTitleClick,
    } = this.props;

    if (!this.state.currentOffer) {
      return (
        <Main
          offersCount={selectedOffers.length}
          offers={selectedOffers}
          cities={cities}
          selectedCity={selectedCity}
          onCityTitleClick={onCityTitleClick}
          onOfferTitleClick={this.offerTitleClickHandler} />
      );
    }
    return <Property offer={this.state.currentOffer} />;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-component">
            <Property offer={this.props.selectedOffers[0]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  cities: PropTypes.arrayOf(CityPropTypes).isRequired,
  selectedOffers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  selectedCity: CityPropTypes,
  onCityTitleClick: PropTypes.func.isRequired,
};

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
