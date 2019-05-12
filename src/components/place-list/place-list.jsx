import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import PlaceCard from "./../place-card/place-card.jsx";

class PlaceList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offer: 0,
    };
    this.updateOffer = this.updateOffer.bind(this);
  }

  updateOffer(it) {
    this.setState({
      offer: it,
    });
  }

  render() {
    const {offers} = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {offers.map((it, i) => {
        return <PlaceCard key={i} offer={it} onClick={this.updateOffer}/>;
      })}
    </div>;
  }
}

PlaceList.propTypes = {
  offers: PropTypes.array,
};

export default PlaceList;
