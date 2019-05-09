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

/**
 * Инициализация приложения.
 *
 * @function initApp
 */
const initApp = () => {
  ReactDOM.render(<App />, APP_ROOT);
};

initApp();
