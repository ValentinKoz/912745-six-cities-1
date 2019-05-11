import React from 'react';
import PropTypes from "prop-types";

const PlaceCard = ({offer, onClick}) => {
  const {
    price,
    rating,
    name,
    type
  } = offer;

  return <article className="cities__place-card place-card">
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#" onClick={onClick}>
        <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price.value}</b>
          <span className="place-card__price-text">`&#47;&nbsp;{price.text}</span>
        </div>
        <button className="place-card__bookmark-button button" type="button" onClick={onClick}>
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${rating}%`}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#" onClick={onClick}>{name}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>;
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
  }),
  onClick: PropTypes.func,
};

export default PlaceCard;
