import { DataInitialStateType } from '../../types/redux/data/types';
import {
  DataActionCreators,
  DataActionTypes,
  dataReducer,
} from './data';

const mockDataInitialState: DataInitialStateType = {
  photoList: [
    {
      albumId: 1,
      id: 1,
      thumbnailUrl: 'some url',
      title: 'Some title',
      url: 'some url',
    },
  ],
};

describe('Reducer', () => {
  test('should set photo list', () => {
    expect(
      dataReducer(mockDataInitialState, {
        type: DataActionTypes.SET_PHOTO_LIST,
        payload: [
          {
            albumId: 1,
            id: 1,
            thumbnailUrl: 'some url',
            title: 'Some title',
            url: 'some url',
          },
          {
            albumId: 1,
            id: 2,
            thumbnailUrl: 'some url',
            title: 'Some title',
            url: 'some url',
          },
        ],
      }),
    ).toEqual({
      ...mockDataInitialState,
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
          id: 2,
          thumbnailUrl: 'some url',
          title: 'Some title',
          url: 'some url',
        },
      ],
    });
  });

  test('should delete photo', () => {
    expect(
      dataReducer(mockDataInitialState, {
        type: DataActionTypes.DELETE_PHOTO,
        payload: 1,
      }),
    ).toEqual({
      photoList: [],
    });
  });
});

describe('Action creator', () => {
  test('for setting new photo list returns correct action', () => {
    expect(DataActionCreators.setPhotoList([])).toEqual({
      type: DataActionTypes.SET_PHOTO_LIST,
      payload: [],
    });
  });

  test('for deleting photo returns correct action', () => {
    expect(DataActionCreators.deletePhoto(1)).toEqual({
      type: DataActionTypes.DELETE_PHOTO,
      payload: 1,
    });
  });
});
