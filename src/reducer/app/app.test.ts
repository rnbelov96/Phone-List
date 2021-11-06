import { AppInitialStateType } from '../../types/redux/app/types';
import { AppActionCreators, AppActionTypes, appReducer } from './app';

const mockAppInitialState: AppInitialStateType = {
  modalWindowUrl: null,
  isDataLoading: true,
  currentPage: 1,
  idFilter: 0,
};

describe('Reducer', () => {
  test('should set modal window url', () => {
    expect(
      appReducer(mockAppInitialState, {
        type: AppActionTypes.SET_MODAL_WINDOW_URL,
        payload: 'some url',
      }),
    ).toEqual({
      ...mockAppInitialState,
      modalWindowUrl: 'some url',
    });
  });

  test('should change data loading status', () => {
    expect(
      appReducer(mockAppInitialState, {
        type: AppActionTypes.CHANGE_DATA_LOADING_STATUS,
      }),
    ).toEqual({
      ...mockAppInitialState,
      isDataLoading: !mockAppInitialState.isDataLoading,
    });
  });

  test('should set current page', () => {
    expect(
      appReducer(mockAppInitialState, {
        type: AppActionTypes.SET_CURRENT_PAGE,
        payload: 2,
      }),
    ).toEqual({
      ...mockAppInitialState,
      currentPage: 2,
    });
  });

  test('should set id filter', () => {
    expect(
      appReducer(mockAppInitialState, {
        type: AppActionTypes.SET_ID_FILTER,
        payload: 3,
      }),
    ).toEqual({
      ...mockAppInitialState,
      idFilter: 3,
    });
  });
});

describe('Action creator', () => {
  test('for setting modal window url returns correct action', () => {
    expect(AppActionCreators.setModalWindowUrl('some url')).toEqual({
      type: AppActionTypes.SET_MODAL_WINDOW_URL,
      payload: 'some url',
    });
  });

  test('for setting changing data loading status returns correct action', () => {
    expect(AppActionCreators.changeDataLoadingStatus()).toEqual({
      type: AppActionTypes.CHANGE_DATA_LOADING_STATUS,
    });
  });

  test('for setting setting current page returns correct action', () => {
    expect(AppActionCreators.setCurrentPage(3)).toEqual({
      type: AppActionTypes.SET_CURRENT_PAGE,
      payload: 3,
    });
  });

  test('for setting setting id filter returns correct action', () => {
    expect(AppActionCreators.setIdFilter(3)).toEqual({
      type: AppActionTypes.SET_ID_FILTER,
      payload: 3,
    });
  });
});
