import React from 'react';
import renderer from 'react-test-renderer';

import MainPage from './main-page.jsx';

it(`Отрисовка представления MainPage`, () => {
  const data = {
    userLogin: `markwatney@arescrew.com`,

    cityNames: [
      `Chicago`,
      `Mars`
    ],

    currentCityName: `Mars`,

    placesData: [
      {
        title: `Habitation Module`,
        type: `Module`,
        price: 0,
        rating: 100,
        imageURL: `module.jpg`,
        inBookmarks: true,
        isPremium: true
      }
    ]
  };

  const view = renderer.create(<MainPage {...data}/>).toJSON();

  expect(view).toMatchSnapshot();
});
