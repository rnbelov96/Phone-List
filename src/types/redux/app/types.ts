export interface AppInitialStateType {
  currentPage: number;
  modalWindowUrl: string | null;
  isDataLoading: boolean;
  idFilter: number;
}

export interface AppConstActionTypes {
  SET_MODAL_WINDOW_URL: 'SET_MODAL_WINDOW_URL';
  CHANGE_DATA_LOADING_STATUS: 'CHANGE_DATA_LOADING_STATUS';
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE';
  SET_ID_FILTER: 'SET_ID_FILTER';
}

export interface SetModalWindowUrlActionType {
  type: AppConstActionTypes['SET_MODAL_WINDOW_URL'];
  payload: string | null;
}

export interface ChangeDataLoadingStatusActionType {
  type: AppConstActionTypes['CHANGE_DATA_LOADING_STATUS'];
}

export interface SetCurrentPageActionType {
  type: AppConstActionTypes['SET_CURRENT_PAGE'];
  payload: number;
}

export interface SetIdFilterActionType {
  type: AppConstActionTypes['SET_ID_FILTER'];
  payload: number;
}

export type AppActionTypes =
  | SetModalWindowUrlActionType
  | ChangeDataLoadingStatusActionType
  | SetCurrentPageActionType
  | SetIdFilterActionType;
