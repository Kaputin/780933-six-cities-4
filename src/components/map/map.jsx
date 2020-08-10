import React, {PureComponent} from "react";
import {connect} from "react-redux";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {OfferPropTypes, CityPropTypes} from "../../propTypes.js";
import {getHoveredOffer, getSelectedCity} from "../../reducer/state/selectors.js";

const offerIcon = leaflet.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [27, 39]
});

const activeOfferIcon = leaflet.icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [27, 39]
});

export class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.markers = [];
    this.mapRef = React.createRef();
    this.map = null;
  }

  componentDidMount() {
    this._initializeMap();
    this._createMarkers();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedCity !== prevProps.selectedCity || this.props.offers !== prevProps.offers || this.props.hoveredOffer !== prevProps.hoveredOffer) {
      this._updateMap();
      this._removeMarkers();
      this._createMarkers();
    }
  }

  _removeMarkers() {
    while (this.markers.length > 0) {
      this.map.removeLayer(this.markers.pop());
    }
  }

  _updateMap() {
    const {selectedCity} = this.props;
    const coordinates = [selectedCity.location.latitude, selectedCity.location.longitude];
    const zoom = selectedCity.location.zoom;
    this.map.setView(coordinates, zoom);
  }

  _initializeMap() {
    const {selectedCity} = this.props;
    const coordinates = [selectedCity.location.latitude, selectedCity.location.longitude];
    const zoom = selectedCity.location.zoom;
    this.map = leaflet.map(this.mapRef.current, {
      center: coordinates,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(coordinates, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
  }

  _createMarkers() {
    const {offers, hoveredOffer} = this.props;
    this.markers = [];

    offers.forEach((offer) => {
      const offerCords = [offer.location.latitude, offer.location.longitude];

      if (offerCords.length) {
        if (hoveredOffer && hoveredOffer.id === offer.id) {
          const marker = leaflet
          .marker(offerCords, {icon: activeOfferIcon})
          .addTo(this.map);

          this.markers.push(marker);

        } else {
          const marker = leaflet
          .marker(offerCords, {icon: offerIcon})
          .addTo(this.map);

          this.markers.push(marker);
        }
      }
    });
  }

  render() {
    return (
      <div id="map" ref={this.mapRef} style={{width: `100%`, height: `100%`}}/>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  hoveredOffer: OfferPropTypes,
  selectedCity: CityPropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  hoveredOffer: getHoveredOffer(state),
  selectedCity: getSelectedCity(state),
});

export default connect(mapStateToProps)(Map);
