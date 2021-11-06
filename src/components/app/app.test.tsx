import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createApi } from '../../api';
import App from './app';

const api = createApi();

const mockStore = configureStore([thunk.withExtraArgument(api)]);

describe('App', () => {
  test('should render loading screen', () => {
    const store = mockStore({
      app: {
        modalWindowUrl: null,
        isDataLoading: true,
        currentPage: 1,
        idFilter: 0,
      },
      data: {
        photoList: [
          {
            albumId: 1,
            id: 1,
            thumbnailUrl: 'some url',
            title: 'Some title',
            url: 'some url',
          },
          {
            albumId: 2,
            id: 2,
            thumbnailUrl: 'some url',
            title: 'Some title',
            url: 'some url',
          },
          {
            albumId: 3,
            id: 3,
            thumbnailUrl: 'some url',
            title: 'Some title',
            url: 'some url',
          },
        ],
      },
    });
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render main screen', () => {
    const store = mockStore({
      app: {
        modalWindowUrl: null,
        isDataLoading: false,
        currentPage: 1,
        idFilter: 0,
      },
      data: {
        photoList: [
          {
            albumId: 1,
            id: 1,
            thumbnailUrl: 'some url',
            title: 'Some title',
            url: 'some url',
          },
          {
            albumId: 1,
            id: 1,
            thumbnailUrl: 'some url',
            title: 'Some title',
            url: 'some url',
          },
          {
            albumId: 1,
            id: 1,
            thumbnailUrl: 'some url',
            title: 'Some title',
            url: 'some url',
          },
        ],
      },
    });
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render modal window', () => {
    const store = mockStore({
      app: {
        modalWindowUrl: 'some url',
        isDataLoading: false,
        currentPage: 1,
        idFilter: 0,
      },
      data: {
        photoList: [
          {
            albumId: 1,
            id: 1,
            thumbnailUrl: 'some url',
            title: 'Some title',
            url: 'some url',
          },
          {
            albumId: 1,
            id: 1,
            thumbnailUrl: 'some url',
            title: 'Some title',
            url: 'some url',
          },
          {
            albumId: 1,
            id: 1,
            thumbnailUrl: 'some url',
            title: 'Some title',
            url: 'some url',
          },
        ],
      },
    });
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
