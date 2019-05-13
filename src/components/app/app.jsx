import React from 'react';

import MainPage from '../main-page/main-page.jsx';

/**
 * Представление всего приложения.
 *
 * @function App
 * @param {object} props — данные компонента
 * @return {object}
 */
const App = (props) => <MainPage {...props}/>;

export default App;
