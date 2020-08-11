import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import SignIn from "../sign-in/sign-in.jsx";
import {Main} from "../main/main.jsx";
import Property from "../property/property.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import Favorites from "../favorites/favorites.jsx";
import {OfferPropTypes, CityPropTypes} from "../../propTypes.js";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {getSelectedCity, getSortOffers} from "../../reducer/state/selectors.js";

export class App extends PureComponent {
  render() {
    const {
      selectedCityOffers,
      selectedCity,
    } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              offers={selectedCityOffers}
              selectedCity={selectedCity}
            />
          </Route>
          <Route exact path="/login" component={SignIn}/>
          <Route exact path="/offer/:id" component={Property}/>
          <PrivateRoute
            exact
            path="/favorites"
            render={() => {
              return (
                <Favorites/>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  selectedCityOffers: PropTypes.arrayOf(OfferPropTypes),
  favoriteOffers: PropTypes.arrayOf(OfferPropTypes),
  selectedCity: CityPropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  selectedCity: getSelectedCity(state),
  selectedCityOffers: getSortOffers(state),
});

export default connect(mapStateToProps)(App);
