import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

it(`Отрисовка представления App`, () => {
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

  const view = renderer.create(<App {...data}/>).toJSON();

  expect(view).toMatchSnapshot();
});
