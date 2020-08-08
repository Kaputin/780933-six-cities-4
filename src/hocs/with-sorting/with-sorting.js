import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator as StateActionCreator} from "../../reducer/state/state.js";
import {getSelectedSortingOptions} from "../../reducer/state/selectors.js";

export const withSorting = (Component) => {
  class WithSorting extends PureComponent {
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
        <Component
          {...this.props}
          isOpen={isOpen}
          sortOptionsListClickHandler={this.sortOptionsListClickHandler}
          sortOptionClickHandler={this.sortOptionClickHandler}
          selectedSortingOptions={selectedSortingOptions}
        />
      );
    }
  }

  WithSorting.propTypes = {
    selectedSortingOptions: PropTypes.string.isRequired,
    onSortingOptionClick: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => ({
    selectedSortingOptions: getSelectedSortingOptions(state),
  });

  const mapDispatchToProps = (dispatch) => ({
    onSortingOptionClick(sortingOption) {
      dispatch(StateActionCreator.changeSortOption(sortingOption));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithSorting);
};
