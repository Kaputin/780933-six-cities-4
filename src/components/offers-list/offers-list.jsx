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
    const {onOfferTitleClick, offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <PlaceCard
            onOfferTitleClick={onOfferTitleClick}
            onOfferMouseEnter={this.handleSelect}
            offer={offer}
            key={offer.id}
          />)
        }
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};
