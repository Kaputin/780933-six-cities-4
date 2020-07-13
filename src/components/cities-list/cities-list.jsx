import React from "react";
import PropTypes from "prop-types";
import {CityPropTypes} from "../../propTypes.js";

export const CitiesList = ({cities, selectedCity, onCityTitleClick}) => {

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city.id} className="locations__item">
          <a className={`locations__item-link ${city.title === selectedCity ? `tabs__item--active` : ``} tabs__item`}>
            <span
              onClick={(evt) => {
                evt.preventDefault();
                onCityTitleClick(city);
              }}
            >{city.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(CityPropTypes).isRequired,
  selectedCity: PropTypes.string.isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
};
