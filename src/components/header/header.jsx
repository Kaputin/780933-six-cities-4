import React from "react";
import PropTypes from "prop-types";
import {UserPropTypes} from "../../propTypes.js";
import {getAuthorizationStatus, getUserProfile} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../const.js";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

export const Header = ({userProfile, authorizationStatus}) => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {authorizationStatus === AuthorizationStatus.NO_AUTH && <Link to="/login" className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__login">Sign in</span>
                </Link>}
                {authorizationStatus === AuthorizationStatus.AUTH && <Link to="/favorites" className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">{userProfile.email}</span>
                </Link>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


Header.propTypes = {
  userProfile: UserPropTypes,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userProfile: getUserProfile(state),
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(Header);
