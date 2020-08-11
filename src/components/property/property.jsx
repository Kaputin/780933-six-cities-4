import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ReviewsList} from "../reviews-list/reviews-list.jsx";
import Map from "../map/map.jsx";
import Header from "../header/header.jsx";
import PostCommentForm from "../post-comment-form/post-comment-form.jsx";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {NearOffers} from "../near-offers/near-offers.jsx";
import {OfferPropTypes, CityPropTypes, ReviewPropTypes} from "../../propTypes.js";
import {AuthorizationStatus, MAX_PROPERTY_IMAGES, MAX_COMMENTS_COUNT} from "../../const.js";
import {getSelectedCity} from "../../reducer/state/selectors.js";
import {getComments, getNearOffers, getOfferById} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {formatRating, capitalize} from "../../utils.js";
import {withCommentForm} from '../../hocs/with-comment-form/with-comment-form.js';

const PostCommentFormWrapped = withCommentForm(PostCommentForm);

export class Property extends PureComponent {
  constructor(props) {
    super(props);

    this.bookmarkButtonClickHandler = this.bookmarkButtonClickHandler.bind(this);
  }

  componentDidMount() {
    const {loadData, offer} = this.props;
    loadData(offer.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.offer.id !== this.props.offer.id) {
      const {loadData, offer} = this.props;
      loadData(offer.id);
    }
  }

  bookmarkButtonClickHandler(offer) {
    this.props.onBookmarkButtonClick(offer);
  }

  render() {
    const {offer, selectedCity, nearOffers, commentsCurrentOffer, authorizationStatus} = this.props;
    const {
      bedrooms,
      maxAdults,
      goods,
      description,
      rating,
      type,
      isPremium,
      isFavorite,
      price,
      title,
      host,
      images,
    } = offer;

    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.slice(0, MAX_PROPERTY_IMAGES).map((image) => (
                  <div className="property__image-wrapper" key={image}>
                    <img className="property__image" src={image} alt="Photo studio"/>
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && <div className="property__mark"><span>Premium</span></div>}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button
                    className={`${isFavorite ? `property__bookmark-button--active` : ``} property__bookmark-button button`}
                    type="button"
                    onClick={() => {
                      if (authorizationStatus === AuthorizationStatus.AUTH) {
                        this.bookmarkButtonClickHandler(offer);
                      }
                    }}
                  >
                    <svg
                      className="property__bookmark-icon"
                      width="31"
                      height="33"
                      style={{stroke: (isFavorite ? `#4481c3` : ``), fill: (isFavorite ? `#4481c3` : ``)}}
                    >
                      <use xlinkHref="#icon-bookmark"/>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: formatRating(rating)}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {capitalize(type)}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((good) => (
                      <li className="property__inside-item" key={good}>
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={`/` + host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                    {host.isPro && <span className="property__user-status">Pro</span>}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsCurrentOffer.length}</span></h2>
                  {<ReviewsList reviews={commentsCurrentOffer.slice(0, MAX_COMMENTS_COUNT)} />}
                  {authorizationStatus === AuthorizationStatus.AUTH && <PostCommentFormWrapped offer={offer}/>}
                </section>
              </div>
            </div>
            <section className="property__map map">{<Map selectedCity={selectedCity} offers={nearOffers}/>}</section>
          </section>
          <div className="container">
            <NearOffers
              offers={nearOffers}
            />
          </div>
        </main>
      </div>
    );
  }
}

Property.propTypes = {
  offer: OfferPropTypes,
  selectedCity: CityPropTypes.isRequired,
  nearOffers: PropTypes.arrayOf(OfferPropTypes),
  commentsCurrentOffer: PropTypes.arrayOf(ReviewPropTypes).isRequired,
  loadData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onBookmarkButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  offer: getOfferById(state, props.match.params.id),
  commentsCurrentOffer: getComments(state),
  nearOffers: getNearOffers(state),
  selectedCity: getSelectedCity(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadData(currentOfferId) {
    dispatch(DataOperation.loadComments(currentOfferId));
    dispatch(DataOperation.loadNearOffers(currentOfferId));
  },
  onBookmarkButtonClick(offer) {
    dispatch(DataOperation.changeFavorite(offer));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Property);
