import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PureCard } from './card';

configure({
  adapter: new Adapter(),
});

describe('Card', () => {
  test('should be deleted', () => {
    const deletePhoto = jest.fn();

    const modal = mount(
      <PureCard
        photoData={{
          albumId: 1,
          id: 1,
          thumbnailUrl: 'some url',
          title: 'Some title',
          url: 'some url',
        }}
        deletePhoto={deletePhoto}
        setModalWindowUrl={() => {}}
      />,
    );

    const deleteButtonEl = modal.find('.list__item-btn');
    deleteButtonEl.simulate('click');

    expect(deletePhoto).toHaveBeenCalledTimes(1);
    expect(deletePhoto).toHaveBeenNthCalledWith(1, 1);
  });

  test('should open modal window', () => {
    const setModalWindowUrl = jest.fn();

    const modal = mount(
      <PureCard
        photoData={{
          albumId: 1,
          id: 1,
          thumbnailUrl: 'some url',
          title: 'Some title',
          url: 'some url 2',
        }}
        deletePhoto={() => {}}
        setModalWindowUrl={setModalWindowUrl}
      />,
    );

    const imgEl = modal.find('.list__item-img');
    imgEl.simulate('click');

    expect(setModalWindowUrl).toHaveBeenCalledTimes(1);
    expect(setModalWindowUrl).toHaveBeenNthCalledWith(1, 'some url 2');
  });
});
