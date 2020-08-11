import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OfferPropTypes} from "../../propTypes.js";
import Header from "../header/header.jsx";
import {FavoritesEmpty} from "../favorites-empty/favorites-empty.jsx";
import {FavoritesList} from "../favorites-list/favorites-list.jsx";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getFavoriteOffers} from "../../reducer/data/selectors.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";

export class Favorites extends PureComponent {
  componentDidMount() {
    const {loadFavoriteOffers} = this.props;
    loadFavoriteOffers();
  }

  render() {
    const {favoriteOffers} = this.props;

    const favoriteOffersExist = favoriteOffers.length !== 0;

    return (
      <div className={`page ${favoriteOffersExist ? `` : `ppage--favorites-empty`}`}>
        <Header />
        <main className={`page__main page__main--favorites ${favoriteOffersExist ? `` : `page__main--favorites-empty`}`}>
          <div className="page__favorites-container container">
            {!favoriteOffersExist && <FavoritesEmpty/>}
            {favoriteOffersExist &&
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList favoriteOffers={favoriteOffers}/>
            </section>}
          </div>
        </main>
        <footer className="footer">
          <Link to="/" className="footer__logo-link">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </div>
    );
  }
}

Favorites.propTypes = {
  favoriteOffers: PropTypes.arrayOf(OfferPropTypes),
  loadFavoriteOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteOffers: getFavoriteOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteOffers() {
    dispatch(DataOperation.loadFavoriteOffers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
