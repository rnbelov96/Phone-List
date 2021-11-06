import {
  getCurrentPage,
  getDataLoadingStatus,
  getIdFilter,
  getModalWindowUrl,
} from './selectors';

describe('Selector', () => {
  test('getModalWindowUrl must return a modal window url', () => {
    expect(
      getModalWindowUrl({
        app: {
          currentPage: 1,
          idFilter: 1,
          isDataLoading: false,
          modalWindowUrl: 'some url',
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
    ).toBe('some url');
  });

  test('getDataLoadingStatus must return a loading status', () => {
    expect(
      getDataLoadingStatus({
        app: {
          currentPage: 1,
          idFilter: 1,
          isDataLoading: false,
          modalWindowUrl: 'some url',
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
    ).toBeFalsy();
  });

  test('getIdFilter must return a id filter', () => {
    expect(
      getIdFilter({
        app: {
          currentPage: 1,
          idFilter: 1,
          isDataLoading: false,
          modalWindowUrl: 'some url',
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
    ).toBe(1);
  });

  test('getCurrentPage must return a current page', () => {
    expect(
      getCurrentPage({
        app: {
          currentPage: 4,
          idFilter: 1,
          isDataLoading: false,
          modalWindowUrl: 'some url',
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
    ).toBe(4);
  });
});
