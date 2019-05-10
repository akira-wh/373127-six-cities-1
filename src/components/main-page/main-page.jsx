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
  const userLogin = props.data.userLogin;
  const cityNames = props.data.cityNames;
  const currentCityData = props.data.currentCityData;

  return (
    <>
      <Header isRenderedOnMainPage={true} userLogin={userLogin}/>
      <Content cityNames={cityNames} currentCityData={currentCityData}/>
    </>
  );
};

export default MainPage;
