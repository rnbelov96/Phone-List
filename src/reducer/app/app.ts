import {
  AppInitialStateType,
  AppConstActionTypes,
  AppActionTypes,
  SetModalWindowUrlActionType,
  ChangeDataLoadingStatusActionType,
  SetCurrentPageActionType,
  SetIdFilterActionType,
} from '../../types/redux/app/types';

const initialState: AppInitialStateType = {
  modalWindowUrl: null,
  isDataLoading: true,
  currentPage: 1,
  idFilter: 0,
};

const ActionTypes: AppConstActionTypes = {
  SET_MODAL_WINDOW_URL: 'SET_MODAL_WINDOW_URL',
  CHANGE_DATA_LOADING_STATUS: 'CHANGE_DATA_LOADING_STATUS',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_ID_FILTER: 'SET_ID_FILTER',
};

const ActionCreators = {
  setModalWindowUrl: (
    url: string | null,
  ): SetModalWindowUrlActionType => ({
    type: ActionTypes.SET_MODAL_WINDOW_URL,
    payload: url,
  }),

  setIdFilter: (id: number): SetIdFilterActionType => ({
    type: ActionTypes.SET_ID_FILTER,
    payload: id,
  }),

  changeDataLoadingStatus: (): ChangeDataLoadingStatusActionType => ({
    type: ActionTypes.CHANGE_DATA_LOADING_STATUS,
  }),

  setCurrentPage: (page: number): SetCurrentPageActionType => ({
    type: ActionTypes.SET_CURRENT_PAGE,
    payload: page,
  }),
};

const reducer = (
  state = initialState,
  action: AppActionTypes,
): AppInitialStateType => {
  switch (action.type) {
    case ActionTypes.CHANGE_DATA_LOADING_STATUS:
      return {
        ...state,
        isDataLoading: !state.isDataLoading,
      };

    case ActionTypes.SET_MODAL_WINDOW_URL:
      return {
        ...state,
        modalWindowUrl: action.payload,
      };

    case ActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case ActionTypes.SET_ID_FILTER:
      return {
        ...state,
        idFilter: action.payload,
        currentPage: 1,
      };

    default:
      return state;
  }
};

export {
  reducer as appReducer,
  ActionCreators as AppActionCreators,
  ActionTypes as AppActionTypes,
};
