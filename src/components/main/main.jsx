import React from "react";
import PropTypes from "prop-types";
import {OffersList} from "../offers-list/offers-list.jsx";
import Map from "../map/map.jsx";
import {SortingOptions} from "../sorting-options/sorting-options.jsx";
import CitiesList from "../cities-list/cities-list.jsx";
import {MainEmpty} from "../main-empty/main-empty.jsx";
import {OfferPropTypes, CityPropTypes} from "../../propTypes.js";
import {withSorting} from "../../hocs/with-sorting/with-sorting.js";

const SortingOptionsWrapped = withSorting(SortingOptions);

export const Main = ({offers, cities, selectedCity}) => {

  return (
    <main className={`page__main page__main--index ${offers.length === 0 ? `page__main--index-empty` : ``}` }>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList
            cities={cities}
          />
        </section>
      </div>
      {offers.length === 0
        ?
        <MainEmpty selectedCity={selectedCity}/>
        :
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {selectedCity.title}</b>
              {<SortingOptionsWrapped />}
              <OffersList
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
      }
    </main>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes),
  cities: PropTypes.arrayOf(CityPropTypes).isRequired,
  selectedCity: CityPropTypes.isRequired,
};
