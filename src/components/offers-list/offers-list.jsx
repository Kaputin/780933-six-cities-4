import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {PlaceCard} from "../place-card/place-card.jsx";
import {OfferPropTypes} from "../../propTypes.js";

export class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      selectedOffer: null,
    };
  }

  handleSelect(offer) {
    this.setState({
      selectedOffer: offer
    });
  }

  render() {
    const {onOfferTitleClick, offers, placeClass, cardClass, wrapperClass} = this.props;
    return (
      <div className={`${placeClass} places__list tabs__content`}>
        {offers.map((offer) =>
          <PlaceCard
            onOfferTitleClick={onOfferTitleClick}
            onOfferMouseEnter={this.handleSelect}
            offer={offer}
            key={offer.id}
            cardClass={cardClass}
            wrapperClass={wrapperClass}
          />)
        }
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  placeClass: PropTypes.string.isRequired,
  cardClass: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string.isRequired
};
