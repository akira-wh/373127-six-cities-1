import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card.jsx';

/**
 * Представление контентной части Main Page.
 *
 * @function MainContent
 * @param {object} props — данные компонента
 * @return {object}
 */
const MainContent = (props) => {
  const {cityNames, currentCityName, placesData} = props;

  return (
    <main className="page__main  page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <div className="cities  tabs">
        <section className="locations  container">
          <ul className="locations__list  tabs__list">

            {
              cityNames.map((cityName, i) => {
                const linkActiveModifier = (cityName === currentCityName) ? `tabs__item--active` : ``;

                return (
                  <li className="locations__item" key={`cityID-${i}`}>
                    <a className={`locations__item-link  tabs__item  ${linkActiveModifier}`}>
                      <span>{cityName}</span>
                    </a>
                  </li>
                );
              })
            }

          </ul>
        </section>
      </div>


      <div className="cities__places-wrapper">

        {
          placesData.length ?
            (
              <div className="cities__places-container  container">
                <section className="cities__places  places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {placesData.length} places to stay in {currentCityName}
                  </b>

                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex="0">
                      Popular
                      <svg className="places__sorting-arrow" width="7" height="4">
                        <use xlinkHref="#icon-arrow-select" />
                      </svg>
                    </span>
                    <ul className="places__options  places__options--custom  places__options--opened">
                      <li className="places__option  places__option--active" tabIndex="0">Popular</li>
                      <li className="places__option" tabIndex="0">Price: low to high</li>
                      <li className="places__option" tabIndex="0">Price: high to low</li>
                      <li className="places__option" tabIndex="0">Top rated first</li>
                    </ul>
                  </form>

                  <div className="cities__places-list  places__list  tabs__content">

                    {
                      placesData.map((placeData, i) => <PlaceCard {...placeData} key={`placeID-${i}`}/>)
                    }

                  </div>
                </section>

                <div className="cities__right-section">
                  <section className="cities__map  map"></section>
                </div>
              </div>
            ) :
            (
              <div className="cities__places-container  cities__places-container--empty  container">
                <section className="cities__no-places">
                  <div className="cities__status-wrapper  tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">
                      We could not find any property availbale at the moment in {currentCityName}
                    </p>
                  </div>
                </section>

                <div className="cities__right-section"></div>
              </div>
            )
        }

      </div>
    </main>
  );
};

/**
 * Валидация входных данных.
 */
MainContent.propTypes = {
  cityNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCityName: PropTypes.string.isRequired,
  placesData: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        imageURL: PropTypes.string.isRequired,
        inBookmarks: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired
      }).isRequired
  ).isRequired
};

export default MainContent;
