import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {SORT_OPTIONS} from "../../mocks/sorting-options.js";

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
    this.props.onSortOptionClick(option);
    this.setState({isOpen: false});
  }

  render() {
    const {isOpen} = this.state;
    const {selectedSortOptions} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.sortOptionsListClickHandler}>
          {selectedSortOptions}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
          {SORT_OPTIONS.map((sortingOption) => (
            <li key={sortingOption} className={`places__option ${sortingOption === selectedSortOptions ? `places__option--active` : ``}`} tabIndex="0" onClick={() => this.sortOptionClickHandler(sortingOption)}>{sortingOption}</li>
          ))}
        </ul>
      </form>
    );
  }
}

SortingOptions.propTypes = {
  selectedSortOptions: PropTypes.string.isRequired,
  onSortOptionClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  selectedSortOptions: state.selectedSortOptions,
});

const mapDispatchToProps = (dispatch) => ({
  onSortOptionClick(sortingOption) {
    dispatch(ActionCreator.changeSortOption(sortingOption));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingOptions);
