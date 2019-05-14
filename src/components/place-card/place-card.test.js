import React from 'react';
import renderer from 'react-test-renderer';

import PlaceCard from './place-card.jsx';

it(`Отрисовка представления PlaceCard`, () => {
  const placeData = {
    title: `Room in THE KNOT TOKYO Shinjuku`,
    type: `Room`,
    price: 200,
    rating: 100,
    imageURL: `hotel.jpg`,
    inBookmarks: false,
    isPremium: true
  };

  const view = renderer.create(<PlaceCard {...placeData} />).toJSON();

  expect(view).toMatchSnapshot();
});
