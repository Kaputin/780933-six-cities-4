import React from "react";
import PropTypes from "prop-types";
import {OffersList} from "../offers-list/offers-list.jsx";
import {Map} from "../map/map.jsx";
import {CitiesList} from "../cities-list/cities-list.jsx";
import {OfferPropTypes, CityPropTypes} from "../../propTypes.js";

export const Main = ({offersCount, offers, cities, selectedCity, onCityTitleClick, onOfferTitleClick}) => {

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          {<CitiesList cities={cities} selectedCity={selectedCity} onCityTitleClick={onCityTitleClick} />}
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersCount} places to stay in {selectedCity.title}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use href="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            {<OffersList onOfferTitleClick={onOfferTitleClick} offers={offers} />}
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">{<Map selectedCity={selectedCity} offers={offers} />}</section>
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
  selectedCity: CityPropTypes,
  onOfferTitleClick: PropTypes.func.isRequired,
  onCityTitleClick: PropTypes.func.isRequired
};
