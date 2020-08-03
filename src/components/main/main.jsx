import React from "react";
import PropTypes from "prop-types";
import {OffersList} from "../offers-list/offers-list.jsx";
import Map from "../map/map.jsx";
import SortingOptions from "../sorting-options/sorting-options.jsx";
import {CitiesList} from "../cities-list/cities-list.jsx";
import {OfferPropTypes, CityPropTypes} from "../../propTypes.js";

export const Main = ({offersCount, offers, cities, selectedCity, onCityTitleClick, onOfferTitleClick}) => {

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList
            cities={cities}
            selectedCity={selectedCity}
            onCityTitleClick={onCityTitleClick}
          />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersCount} places to stay in {selectedCity.title}</b>
            {<SortingOptions />}
            <OffersList
              onOfferTitleClick={onOfferTitleClick}
              offers={offers}
            />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map
                selectedCity={selectedCity}
                offers={offers}
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  cities: PropTypes.arrayOf(CityPropTypes).isRequired,
  selectedCity: CityPropTypes.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
};
