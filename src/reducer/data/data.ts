import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { FullStateType, PhotoType } from '../../types/general-types';
import {
  DataActionConstType,
  DataInitialStateType,
  DataActionTypes,
  SetPhotoListActionType,
  DeletePhotoActionType,
} from '../../types/redux/data/types';
import { AppActionCreators } from '../app/app';
import { AppActionTypes } from '../../types/redux/app/types';

const initialState: DataInitialStateType = {
  photoList: [],
};

const ActionTypes: DataActionConstType = {
  SET_PHOTO_LIST: 'SET_PHOTO_LIST',
  DELETE_PHOTO: 'DELETE_PHOTO',
};

const ActionCreators = {
  setPhotoList: (photoList: PhotoType[]): SetPhotoListActionType => ({
    type: ActionTypes.SET_PHOTO_LIST,
    payload: photoList,
  }),

  deletePhoto: (id: number): DeletePhotoActionType => ({
    type: ActionTypes.DELETE_PHOTO,
    payload: id,
  }),
};

const reducer = (
  state = initialState,
  action: DataActionTypes,
): DataInitialStateType => {
  switch (action.type) {
    case ActionTypes.SET_PHOTO_LIST:
      return {
        ...state,
        photoList: action.payload,
      };

    case ActionTypes.DELETE_PHOTO:
      return {
        ...state,
        photoList: state.photoList.filter(photo => photo.id !== action.payload),
      };

    default:
      return state;
  }
};

type ThunkType = ThunkAction<
  void,
  FullStateType,
  AxiosInstance,
  DataActionTypes | AppActionTypes
>;
const Operation = {
  loadPhotoList: (): ThunkType => (dispatch, getState, api) => {
    api.get('/').then(response => {
      const { data } = response;
      dispatch(ActionCreators.setPhotoList(data));
      dispatch(AppActionCreators.changeDataLoadingStatus());
    });
  },
};

export {
  reducer as dataReducer,
  ActionCreators as DataActionCreators,
  ActionTypes as DataActionTypes,
  Operation as DataOperation,
};
