import React from 'react';
import PropTypes from 'prop-types';

import MainPage from '../main-page/main-page.jsx';

/**
 * Представление всего приложения.
 *
 * @function App
 * @param {object} props — данные компонента
 * @return {object}
 */
const App = (props) => <MainPage {...props}/>;

/**
 * Валидация входных данных.
 */
App.propTypes = {
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

export default App;
