import { PhotoType } from '../../general-types';

export interface DataInitialStateType {
  photoList: PhotoType[];
}

export interface DataActionConstType {
  SET_PHOTO_LIST: 'SET_PHOTO_LIST';
  DELETE_PHOTO: 'DELETE_PHOTO';
}

export interface SetPhotoListActionType {
  type: DataActionConstType['SET_PHOTO_LIST'];
  payload: PhotoType[];
}

export interface DeletePhotoActionType {
  type: DataActionConstType['DELETE_PHOTO'];
  payload: number
}

export type DataActionTypes = SetPhotoListActionType | DeletePhotoActionType;
