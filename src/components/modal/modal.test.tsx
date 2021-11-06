import React from 'react';
import renderer from 'react-test-renderer';
import { PureModal, ModalProps } from './modal';

const mockProps: ModalProps = {
  setModalWindowUrl: jest.fn(),
  photoUrl: 'some url',
};

test('Modal should render correctly', () => {
  const tree = renderer.create(<PureModal {...mockProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
