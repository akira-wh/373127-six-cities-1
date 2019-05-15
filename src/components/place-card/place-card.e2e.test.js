import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlaceCard from './place-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Клик по заголовку карты срабатывает`, () => {
  const placeData = {
    title: `Room in THE KNOT TOKYO Shinjuku`,
    type: `Room`,
    price: 200,
    rating: 100,
    imageURL: `hotel.jpg`,
    inBookmarks: false,
    isPremium: true
  };

  const onTitleLinkClick = jest.fn();

  const view = shallow(
      <PlaceCard
        placeData={placeData}
        onTitleLinkClick={onTitleLinkClick}
      />
  );

  const titleLink = view.find(`.place-card__name a`);
  titleLink.simulate(`click`, {
    preventDefault() {}
  });

  expect(onTitleLinkClick).toHaveBeenCalledTimes(1);
});
