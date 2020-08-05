import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Main} from "../main/main.jsx";
import {Property} from "../property/property.jsx";
import {OfferPropTypes, CityPropTypes} from "../../propTypes.js";
import {BrowserRouter, Route, Switch} from 'react-router-dom';


export class App extends PureComponent {
  _renderApp() {
    const {
      cities,
      selectedCityOffers,
      selectedCity,
      currentOffer,
    } = this.props;

    if (!currentOffer) {
      return (
        <Main
          offers={selectedCityOffers}
          cities={cities}
          selectedCity={selectedCity}
        />
      );
    }
    return (
      <Property
        offer={currentOffer}
        selectedCity={selectedCity}
        offers={selectedCityOffers}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-component">
            <Property
              offer={this.props.selectedCityOffers[0]}
              selectedCity={this.props.cities[0]}
              offers={this.props.selectedCityOffers}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  cities: PropTypes.arrayOf(CityPropTypes).isRequired,
  selectedCityOffers: PropTypes.arrayOf(OfferPropTypes),
  selectedCity: CityPropTypes.isRequired,
  currentOffer: OfferPropTypes,
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  selectedCityOffers: state.selectedCityOffers,
  selectedCity: state.selectedCity,
  currentOffer: state.currentOffer,
});

export default connect(mapStateToProps)(App);
