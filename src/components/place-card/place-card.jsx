import React from 'react';
import PropTypes from 'prop-types';

/**
 * Представление карты Place.
 *
 * @function PlaceCard
 * @param {object} props — данные компонента
 * @return {object}
 */
const PlaceCard = (props) => {
  const placeData = props.placeData;
  const onTitleLinkClick = props.onTitleLinkClick;

  return (
    <article className="cities__place-card  place-card">

      {
        placeData.isPremium ?
          <div className="place-card__mark"><span>Premium</span></div> : null
      }

      <div className="cities__image-wrapper  place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image"
            src={placeData.imageURL}
            width="260" height="200"
            alt="Place image" />
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{placeData.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button className={
            `place-card__bookmark-button  button  ` +
            (placeData.inBookmarks ? `place-card__bookmark-button--active` : ``)
          } type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {placeData.inBookmarks ? `In` : `To`} bookmarks
            </span>
          </button>
        </div>

        <div className="place-card__rating  rating">
          <div className="place-card__stars  rating__stars">
            <span style={{width: `${placeData.rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <a href="#" onClick={onTitleLinkClick}>{placeData.title}</a>
        </h2>

        <p className="place-card__type">{placeData.type}</p>
      </div>
    </article>
  );
};

/**
 * Валидация входных данных.
 */
PlaceCard.propTypes = {
  placeData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    inBookmarks: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired
  }).isRequired,
  onTitleLinkClick: PropTypes.func.isRequired
};

export default PlaceCard;
