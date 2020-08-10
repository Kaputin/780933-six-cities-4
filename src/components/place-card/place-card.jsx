import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator as StateActionCreator} from "../../reducer/state/state.js";
import {OfferPropTypes} from "../../propTypes.js";
import {Link} from "react-router-dom";
import {getHoveredOffer} from "../../reducer/state/selectors.js";
import {formatRating, capitalize} from "../../utils.js";

export class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

    this.offerMouseEnterHandler = this.offerMouseEnterHandler.bind(this);
  }

  offerMouseEnterHandler(hoveredOffer) {
    this.props.onOfferHover(hoveredOffer);
  }

  render() {
    const {offer, cardClass, wrapperClass} = this.props;
    const {
      id,
      isPremium,
      previewImage,
      price,
      rating,
      title,
      type
    } = offer;

    return (
      <article className={`${cardClass} place-card`} onMouseEnter={() => this.offerMouseEnterHandler(offer)} onMouseLeave={() => this.offerMouseEnterHandler(null)} >
        {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
        <div className={`${wrapperClass} place-card__image-wrapper`}>
          <a href="#">
            <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use href="#icon-bookmark"/>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: formatRating(rating)}}/>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${id}`}>{title}</Link>
          </h2>
          <p className="place-card__type">{capitalize(type)}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  offer: OfferPropTypes.isRequired,
  cardClass: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string.isRequired,
  onOfferHover: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  hoveredOffer: getHoveredOffer(state),
});

const mapDispatchToProps = (dispatch) => ({
  onOfferHover(hoveredOffer) {
    dispatch(StateActionCreator.changeHoveredOffer(hoveredOffer));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceCard);
