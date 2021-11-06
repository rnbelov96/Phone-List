import React from 'react';
import renderer from 'react-test-renderer';
import { PureCard } from './card';

test('Card should render correctly', () => {
  const tree = renderer
    .create(
      <PureCard
        photoData={{
          albumId: 1,
          id: 1,
          thumbnailUrl: 'some url',
          title: 'Some title',
          url: 'some url',
        }}
        deletePhoto={() => {}}
        setModalWindowUrl={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
