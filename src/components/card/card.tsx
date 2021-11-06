import React from 'react';
import { connect } from 'react-redux';
import { AppActionCreators } from '../../reducer/app/app';
import { DataActionCreators } from '../../reducer/data/data';
import { PhotoType } from '../../types/general-types';

export type CardProps = {
  photoData: PhotoType;

  setModalWindowUrl: (url: string | null) => void;
  deletePhoto: (id: number) => void;
};

export const PureCard: React.FunctionComponent<CardProps> = ({
  photoData,
  setModalWindowUrl,
  deletePhoto,
}: CardProps) => {
  const [isImageLoading, setImageLoadingStatus] = React.useState<boolean>(true);

  return (
    <div className="card list__item">
      <img
        onClick={() => {
          setModalWindowUrl(photoData.url);
          if (window.innerWidth > document.body.clientWidth) {
            document.body.style.paddingRight = `${window.innerWidth - document.body.clientWidth}px`;
          }
          document.body.style.overflowY = 'hidden';
        }}
        src={photoData.thumbnailUrl}
        className="card-img-top list__item-img"
        alt="small square"
        style={{
          minHeight: '150px',
          display: isImageLoading ? 'none' : 'block',
        }}
        onLoad={() => setImageLoadingStatus(false)}
      />
      <div
        style={{
          minHeight: '150px',
          display: isImageLoading ? 'block' : 'none',
        }}
        className="lds-ring mx-auto list__item-circle"
      >
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="card-body list__item-content">
        <h5 className="card-title list__item-title">{photoData.title}</h5>
        <button
          onClick={() => {
            deletePhoto(photoData.id);
          }}
          type="button"
          className="btn btn-danger list__item-btn"
        >
          Delete Photo
        </button>
      </div>
    </div>
  );
};

export default connect(() => ({}), {
  setModalWindowUrl: AppActionCreators.setModalWindowUrl,
  deletePhoto: DataActionCreators.deletePhoto,
})(PureCard);
