import React from 'react';
import renderer from 'react-test-renderer';

import MainContent from './main-content.jsx';

describe(`Отрисовка представления MainContent`, () => {

  it(`В городе есть свободные места --> Отображение списка мест.`, () => {
    const data = {
      cityNames: [
        `Tokyo`,
        `Osaka`
      ],

      currentCityName: `Tokyo`,

      placesData: [
        {
          title: `Room in THE KNOT TOKYO Shinjuku`,
          type: `Room`,
          price: 100,
          rating: 85,
          imageURL: `hotel.jpg`,
          inBookmarks: true,
          isPremium: false
        },
        {
          title: `Room in THE KNOT TOKYO Shinjuku`,
          type: `Room`,
          price: 200,
          rating: 100,
          imageURL: `hotel.jpg`,
          inBookmarks: false,
          isPremium: true
        }
      ]
    };

    const view = renderer.create(<MainContent {...data}/>).toJSON();

    expect(view).toMatchSnapshot();
  });

  it(`В городе нет свободных мест --> Отображение сообщения, что мест нет.`, () => {
    const data = {
      cityNames: [
        `Tokyo`,
        `Osaka`
      ],

      currentCityName: `Tokyo`,

      placesData: []
    };

    const view = renderer.create(<MainContent {...data}/>).toJSON();

    expect(view).toMatchSnapshot();
  });
});
