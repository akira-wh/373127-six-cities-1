import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header.jsx';
import Content from '../main-content/main-content.jsx';

/**
 * Представление Main Page.
 *
 * @function MainPage
 * @param {object} props — данные компонента
 * @return {object}
 */
const MainPage = (props) => {
  const {userLogin, cityNames, currentCityName, placesData} = props;

  return (
    <>
      <Header isRenderedOnMainPage={true} userLogin={userLogin}/>
      <Content cityNames={cityNames} currentCityName={currentCityName} placesData={placesData}/>
    </>
  );
};

/**
 * Валидация входных данных.
 */
MainPage.propTypes = {
  userLogin: PropTypes.string.isRequired,
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

export default MainPage;
