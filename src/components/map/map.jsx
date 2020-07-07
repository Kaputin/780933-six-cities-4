import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {OfferPropTypes} from "../../propTypes.js";


export class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
    this.city = [52.38333, 4.9];
    this.zoom = 12;
    this.map = null;
  }

  componentDidMount() {
    this._initializeMap();
    this._createMarkers();
  }

  _initializeMap() {
    this.map = leaflet.map(this.mapRef.current, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(this.city, this.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
  }

  _createMarkers() {
    const {offers} = this.props;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });

    offers.forEach((offer) => {
      const offerCords = offer.coordinates;
      if (offerCords.length) {
        leaflet
        .marker(offerCords, {icon})
        .addTo(this.map);
      }
    });
  }

  render() {
    return (
      <div id="map" ref={this.mapRef} style={{width: `100%`, height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired
};
