import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {OfferPropTypes} from "../../propTypes.js";


export class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.markers = [];
    this.mapRef = React.createRef();
    this.zoom = 12;
    this.map = null;
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });
  }

  componentDidMount() {
    this._initializeMap();
    this._createMarkers();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedCoordinates !== prevProps.selectedCoordinates || this.props.offers !== prevProps.offers) {
      this._updateMap();
      this._removeMarkers();
      this._createMarkers();
    }
  }

  _removeMarkers() { // пока не удаляет прочесть документацию
    this.markers.forEach((marker) => marker.remove());
  }

  _updateMap() {
    const {selectedCoordinates} = this.props;
    this.map.setView(selectedCoordinates, this.zoom);
  }

  _initializeMap() {
    const {selectedCoordinates} = this.props;
    this.map = leaflet.map(this.mapRef.current, {
      center: selectedCoordinates,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(selectedCoordinates, this.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
  }

  _createMarkers() {
    const {offers} = this.props;

    offers.forEach((offer) => {
      const offerCords = offer.coordinates;
      if (offerCords.length) {
        leaflet
        .marker(offerCords, this.icon)
        .addTo(this.map);
        this.markers.push(leaflet.marker(offerCords, this.icon));
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
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  selectedCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
};
