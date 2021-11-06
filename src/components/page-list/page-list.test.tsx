import React from 'react';
import renderer from 'react-test-renderer';
import { PurePageList } from './page-list';

test('Page List should render correctly', () => {
  const tree = renderer
    .create(
      <PurePageList
        currentPage={1}
        pageList={[1, 2, 3, 4, 5, 6, 0, 81]}
        setCurrentPage={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
