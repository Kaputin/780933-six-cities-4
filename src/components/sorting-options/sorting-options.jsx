import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {SortinTypes} from "../../const.js";

export class SortingOptions extends PureComponent {
  render() {
    const {isOpen, selectedSortingOptions, sortOptionClickHandler, sortOptionsListClickHandler} = this.props;
    const sortsKeys = Object.keys(SortinTypes);
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={sortOptionsListClickHandler}>
          {selectedSortingOptions}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"/>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
          {sortsKeys.map((sortingOption) => (
            <li key={sortingOption} className={`places__option ${SortinTypes[sortingOption] === selectedSortingOptions ? `places__option--active` : ``}`} tabIndex="0" onClick={() => sortOptionClickHandler(SortinTypes[sortingOption])}>{SortinTypes[sortingOption]}</li>
          ))}
        </ul>
      </form>
    );
  }
}

SortingOptions.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  selectedSortingOptions: PropTypes.string.isRequired,
  sortOptionClickHandler: PropTypes.func.isRequired,
  sortOptionsListClickHandler: PropTypes.func.isRequired,
};
