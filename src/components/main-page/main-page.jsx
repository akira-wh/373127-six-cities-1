import React from 'react';

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

export default MainPage;
