import { AppInitialStateType } from './redux/app/types';
import { DataInitialStateType } from './redux/data/types';

export interface FullStateType {
  data: DataInitialStateType;
  app: AppInitialStateType;
}

export interface PhotoType {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export type MockAxiosInstance = {};
