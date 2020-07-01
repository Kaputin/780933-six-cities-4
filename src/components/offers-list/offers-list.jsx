import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {PlaceCard} from "../place-card/place-card.jsx";

export class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.handleOfferTarget = this.handleOfferTarget.bind(this);

    this.state = {
      targetOffer: null,
    };
  }

  handleOfferTarget(offer) {
    this.setState({
      targetOffer: offer
    });
  }

  render() {
    const {onOfferTitleClick, offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <PlaceCard onOfferTitleClick={onOfferTitleClick} onOfferTarget={this.handleOfferTarget} offer={offer} key={offer.id} />)}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};
