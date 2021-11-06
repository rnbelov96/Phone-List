import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PureFilter } from './filter';

configure({
  adapter: new Adapter(),
});

test('Filter should set filter id', () => {
  const setIdFilter = jest.fn();

  const modal = mount(
    <PureFilter albumIdList={[1, 2, 3]} setIdFilter={setIdFilter} />,
  );

  const selectEl = modal.find('select');
  selectEl.simulate('change', { target: { value: 1 } });

  expect(setIdFilter).toHaveBeenCalledTimes(1);
  expect(setIdFilter).toHaveBeenNthCalledWith(1, 1);
});
