import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";

export const withLoader = (Component) => {
  class WithLoader extends PureComponent {

    componentDidMount() {
      const {loadOffers, checkAuth} = this.props;
      loadOffers();
      checkAuth();
    }

    render() {
      return (
        <Component
          {...this.props}
        />
      );
    }
  }

  WithLoader.propTypes = {
    loadOffers: PropTypes.func.isRequired,
    checkAuth: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    loadOffers() {
      dispatch(DataOperation.loadOffers());
    },
    checkAuth() {
      dispatch(UserOperation.checkAuth());
    },
  });

  return connect(null, mapDispatchToProps)(WithLoader);
};
