import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator as StateActionCreator} from "../../reducer/state/state.js";
import {CityPropTypes} from "../../propTypes.js";
import {getCities} from "../../reducer/data/selectors.js";
import {getSelectedCity} from "../../reducer/state/selectors.js";


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
          <li key={city.name} className="locations__item">
            <a className={`locations__item-link ${city.name === selectedCity.name ? `tabs__item--active` : ``} tabs__item`}>
              <span
                onClick={() => {
                  this.cityTitleClickHandler(city);
                }}>
                {city.name}
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
  cities: getCities(state),
  selectedCity: getSelectedCity(state),
});


const mapDispatchToProps = (dispatch) => ({
  onCityTitleClick(selectedCity) {
    dispatch(StateActionCreator.changeCity(selectedCity));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
