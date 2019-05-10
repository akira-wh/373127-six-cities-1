import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

/**
 * Селектор root-контейнера приложения.
 *
 * @constant
 * @type {string}
 */
const APP_ROOT_SELECTOR = `#root`;

/**
 * Root-контейнер приложения.
 *
 * @constant
 * @type {node}
 */
const APP_ROOT = document.querySelector(APP_ROOT_SELECTOR);

// Временный набор данных.
const data = {
  userLogin: `Oliver.conner@gmail.com`,

  cityNames: [
    `Amsterdam`,
    `Paris`,
    `Cologne`,
    `Brussels`,
    `Hamburg`,
    `Dusseldorf`
  ],

  currentCityData: {
    name: `Amsterdam`,
    placesData: [
      {
        title: `Beautiful & luxurious apartment at great location`,
        type: `Apartment`,
        price: 120,
        rating: 93,
        imageURL: `img/apartment-01.jpg`,
        inBookmarks: false,
        isPremium: true
      },
      {
        title: `Wood and stone place`,
        type: `Private room`,
        price: 80,
        rating: 80,
        imageURL: `img/room.jpg`,
        inBookmarks: true,
        isPremium: false
      },
      {
        title: `Canal View Prinsengracht`,
        type: `Apartment`,
        price: 132,
        rating: 80,
        imageURL: `img/apartment-02.jpg`,
        inBookmarks: false,
        isPremium: false
      },
      {
        title: `Nice, cozy, warm big bed apartment`,
        type: `Apartment`,
        price: 180,
        rating: 100,
        imageURL: `img/apartment-02.jpg`,
        inBookmarks: false,
        isPremium: true
      },
      {
        title: `Wood and stone place`,
        type: `Private room`,
        price: 80,
        rating: 80,
        imageURL: `img/room.jpg`,
        inBookmarks: true,
        isPremium: false
      }
    ]
  }
};

/**
 * Инициализация приложения.
 *
 * @function initApp
 */
const initApp = () => {
  ReactDOM.render(<App data={data}/>, APP_ROOT);
};

initApp();
