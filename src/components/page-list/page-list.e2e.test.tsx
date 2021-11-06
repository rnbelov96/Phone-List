import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PurePageList } from './page-list';

configure({
  adapter: new Adapter(),
});

describe('Page List', () => {
  test('should set current page', () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    const setCurrentPage = jest.fn();

    const modal = mount(
      <PurePageList
        currentPage={1}
        pageList={[1, 2, 3, 4, 5, 6, 0, 88]}
        setCurrentPage={setCurrentPage}
      />,
    );

    const buttonEl = modal.find('.page-list__button').at(1);
    buttonEl.simulate('click');

    expect(setCurrentPage).toHaveBeenCalledTimes(1);
    expect(setCurrentPage).toHaveBeenNthCalledWith(1, 2);
  });

  test('should not react on current page', () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    const setCurrentPage = jest.fn();

    const modal = mount(
      <PurePageList
        currentPage={1}
        pageList={[1, 2, 3, 4, 5, 6, 0, 88]}
        setCurrentPage={setCurrentPage}
      />,
    );

    const buttonEl = modal.find('.page-list__button_current');
    buttonEl.simulate('click');

    expect(setCurrentPage).toHaveBeenCalledTimes(0);
  });

  test('should not react on inactive button', () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    const setCurrentPage = jest.fn();

    const modal = mount(
      <PurePageList
        currentPage={1}
        pageList={[1, 2, 3, 4, 5, 6, 0, 88]}
        setCurrentPage={setCurrentPage}
      />,
    );

    const buttonEl = modal.find('.page-list__button_inactive');
    buttonEl.simulate('click');

    expect(setCurrentPage).toHaveBeenCalledTimes(0);
  });
});
