import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {OfferPropTypes} from "../../propTypes.js";

export class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

    this.offerMouseEnterHandler = this.offerMouseEnterHandler.bind(this);
    this.offerTitleClickHandler = this.offerTitleClickHandler.bind(this);
  }

  offerMouseEnterHandler(hoveredOffer) {
    this.props.onOfferHover(hoveredOffer);
  }

  offerTitleClickHandler(currentOffer) {
    this.props.onOfferTitleClick(currentOffer);
  }

  render() {
    const {offer, cardClass, wrapperClass} = this.props;
    const {
      mark,
      src,
      price,
      stars,
      title,
      type
    } = offer;

    return (
      <article className={`${cardClass} place-card`} onMouseEnter={() => this.offerMouseEnterHandler(offer)} onMouseLeave={() => this.offerMouseEnterHandler(null)} >
        {mark && <div className="place-card__mark"><span>Premium</span></div>}
        <div className={`${wrapperClass} place-card__image-wrapper`}>
          <a href="#">
            <img className="place-card__image" src={src} width="260" height="200" alt="Place image"/>
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
              <span style={stars}/>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name" onClick={() => this.offerTitleClickHandler(offer)}>
            <a href="#">{title}</a>
          </h2>
          <p className="place-card__type">{type}</p>
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
  onOfferTitleClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  hoveredOffer: state.hoveredOffer,
  currentOffer: state.currentOffer,
});

const mapDispatchToProps = (dispatch) => ({
  onOfferHover(hoveredOffer) {
    dispatch(ActionCreator.changeHoveredOffer(hoveredOffer));
  },
  onOfferTitleClick(currentOffer) {
    dispatch(ActionCreator.changeCurrentOffer(currentOffer));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceCard);
