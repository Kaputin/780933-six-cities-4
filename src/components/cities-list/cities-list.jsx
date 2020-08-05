import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {CityPropTypes} from "../../propTypes.js";

export class CitiesList extends PureComponent {
  constructor(props) {
    super(props);

    this.cityTitleClickHandler = this.cityTitleClickHandler.bind(this);
  }

  cityTitleClickHandler(city) {
    this.props.onCityTitleClick(city);
  }

  render() {
    const {cities, selectedCity} = this.props;

    return (
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li key={city.id} className="locations__item">
            <a className={`locations__item-link ${city.title === selectedCity.title ? `tabs__item--active` : ``} tabs__item`}>
              <span
                onClick={() => {
                  this.cityTitleClickHandler(city);
                }}>
                {city.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(CityPropTypes).isRequired,
  selectedCity: CityPropTypes.isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  cities: state.cities,
  selectedCity: state.selectedCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityTitleClick(selectedCity) {
    dispatch(ActionCreator.changeCity(selectedCity));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
