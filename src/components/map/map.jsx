import React, {Component} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: props,
    };
  }

  componentDidMount() {
    const {offers} = this.state.offers;

    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);
    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(map);

    for (const offer of offers) {
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(map);
    }
  }

  render() {
    return (
      <section className="cities__map map" id="map"></section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array,
};

export default Map;
