import { getPageNumberList, getPhotoList, getPhotosToShow } from './selectors';

describe('Selector', () => {
  test('getPhotoList must return a photo list', () => {
    expect(
      getPhotoList({
        app: {
          currentPage: 1,
          idFilter: 1,
          isDataLoading: false,
          modalWindowUrl: null,
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
      }),
    ).toEqual([
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
    ]);
  });

  test('getPhotosToShow must return correct list', () => {
    expect(
      getPhotosToShow({
        app: {
          currentPage: 1,
          idFilter: 1,
          isDataLoading: false,
          modalWindowUrl: null,
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
      }),
    ).toEqual([
      {
        albumId: 1,
        id: 1,
        thumbnailUrl: 'some url',
        title: 'Some title',
        url: 'some url',
      },
    ]);
  });

  test('getPageNumberList must return correct list', () => {
    expect(
      getPageNumberList({
        app: {
          currentPage: 1,
          idFilter: 1,
          isDataLoading: false,
          modalWindowUrl: null,
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
      }),
    ).toEqual([1]);
  });
});
