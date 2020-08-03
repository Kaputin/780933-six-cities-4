import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {sortingOptions} from "../../const.js";

export class SortingOptions extends PureComponent {
  constructor(props) {
    super(props);

    this.sortOptionsListClickHandler = this.sortOptionsListClickHandler.bind(this);
    this.sortOptionClickHandler = this.sortOptionClickHandler.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  sortOptionsListClickHandler() {
    this.setState(
        (state) => ({
          isOpen: !state.isOpen
        })
    );
  }

  sortOptionClickHandler(option) {
    this.props.onSortingOptionClick(option);
    this.setState({isOpen: false});
  }

  render() {
    const {isOpen} = this.state;
    const {selectedSortingOptions} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.sortOptionsListClickHandler}>
          {selectedSortingOptions}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"/>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
          {sortingOptions.map((sortingOption) => (
            <li key={sortingOption} className={`places__option ${sortingOption === selectedSortingOptions ? `places__option--active` : ``}`} tabIndex="0" onClick={() => this.sortOptionClickHandler(sortingOption)}>{sortingOption}</li>
          ))}
        </ul>
      </form>
    );
  }
}

SortingOptions.propTypes = {
  selectedSortingOptions: PropTypes.string.isRequired,
  onSortingOptionClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  selectedSortingOptions: state.selectedSortingOptions,
});

const mapDispatchToProps = (dispatch) => ({
  onSortingOptionClick(sortingOption) {
    dispatch(ActionCreator.changeSortOption(sortingOption));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingOptions);
