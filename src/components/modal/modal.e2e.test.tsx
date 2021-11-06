import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PureModal } from './modal';

configure({
  adapter: new Adapter(),
});

test('Modal should close', () => {
  const setModalWindowUrl = jest.fn();

  const modal = mount(
    <PureModal setModalWindowUrl={setModalWindowUrl} photoUrl="some url" />,
  );

  const wrapperEl = modal.find('.modal-window__center-wrapper');
  wrapperEl.simulate('click');

  expect(setModalWindowUrl).toHaveBeenCalledTimes(1);
  expect(setModalWindowUrl).toHaveBeenNthCalledWith(1, null);
});
