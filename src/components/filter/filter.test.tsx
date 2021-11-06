import React from 'react';
import renderer from 'react-test-renderer';
import { PureFilter } from './filter';

test('Modal should render correctly', () => {
  const tree = renderer
    .create(
      <PureFilter
        setIdFilter={() => {}}
        albumIdList={[1, 2, 3]}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
