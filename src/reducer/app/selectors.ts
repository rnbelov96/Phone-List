import { FullStateType } from '../../types/general-types';

export const getModalWindowUrl = (state: FullStateType) => state.app.modalWindowUrl;

export const getDataLoadingStatus = (state: FullStateType) => state.app.isDataLoading;

export const getIdFilter = (state: FullStateType) => state.app.idFilter;

export const getCurrentPage = (state: FullStateType) => state.app.currentPage;
