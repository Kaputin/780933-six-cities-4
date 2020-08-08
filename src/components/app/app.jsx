import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Main} from "../main/main.jsx";
import Property from "../property/property.jsx";
import {OfferPropTypes, CityPropTypes} from "../../propTypes.js";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {getSelectedCity, getCurrentOffer, getSortOffers} from "../../reducer/state/selectors.js";

export class App extends PureComponent {
  _renderApp() {
    const {
      selectedCityOffers,
      selectedCity,
      currentOffer,
    } = this.props;

    if (!currentOffer) {
      return (
        <Main
          offers={selectedCityOffers}
          selectedCity={selectedCity}
        />
      );
    }
    return (
      <Property
        offer={currentOffer}
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
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  selectedCityOffers: PropTypes.arrayOf(OfferPropTypes),
  selectedCity: CityPropTypes.isRequired,
  currentOffer: OfferPropTypes,
};

const mapStateToProps = (state) => ({
  selectedCity: getSelectedCity(state),
  selectedCityOffers: getSortOffers(state),
  currentOffer: getCurrentOffer(state),
});

export default connect(mapStateToProps)(App);
