import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { DataOperation } from '../../reducer/data/data';
import {
  getAlbumIdList,
  getPageNumberList,
  getPhotosToShow,
} from '../../reducer/data/selectors';
import { DataActionTypes } from '../../types/redux/data/types';
import { FullStateType, PhotoType } from '../../types/general-types';
import { AppActionTypes } from '../../types/redux/app/types';
import { AppActionCreators } from '../../reducer/app/app';
import Card from '../card/card';
import {
  getCurrentPage,
  getDataLoadingStatus,
  getModalWindowUrl,
} from '../../reducer/app/selectors';
import Modal from '../modal/modal';
import PageList from '../page-list/page-list';
import Filter from '../filter/filter';

export type AppProps = {
  photoList: PhotoType[];
  modalWindowUrl: string | null;
  pageNumberList: number[];
  currentPage: number;
  albumIdList: number[];
  isDataLoading: boolean;

  loadPhotoList: () => void;
  setCurrentPage: (page: number) => void;
};

export const PureApp: React.FunctionComponent<AppProps> = ({
  photoList,
  modalWindowUrl,
  loadPhotoList,
  pageNumberList,
  currentPage,
  albumIdList,
  isDataLoading,
}: AppProps) => {
  React.useEffect(() => {
    loadPhotoList();
  }, []);

  return (
    <div className="container">
      {isDataLoading ? (
        <section className="loading">
          <p className="loading__text">Loading in progress...</p>
          <div className="lds-ring mx-auto loading__circle">
            <div />
            <div />
            <div />
            <div />
          </div>
        </section>
      ) : (
        <section className="app">
          {modalWindowUrl ? <Modal photoUrl={modalWindowUrl} /> : null}
          <Filter albumIdList={albumIdList} />
          <section className="list">
            {photoList.map(el => (
              <Card key={el.id} photoData={el} />
            ))}
          </section>
          <PageList currentPage={currentPage} pageList={pageNumberList} />
        </section>
      )}
    </div>
  );
};

const mapStateToProps = (state: FullStateType) => ({
  photoList: getPhotosToShow(state),
  modalWindowUrl: getModalWindowUrl(state),
  pageNumberList: getPageNumberList(state),
  currentPage: getCurrentPage(state),
  albumIdList: getAlbumIdList(state),
  isDataLoading: getDataLoadingStatus(state),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<
    FullStateType,
    AxiosInstance,
    AppActionTypes | DataActionTypes
  >,
) => ({
  setCurrentPage: (page: number) => {
    dispatch(AppActionCreators.setCurrentPage(page));
  },
  loadPhotoList: () => {
    dispatch(DataOperation.loadPhotoList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PureApp);
