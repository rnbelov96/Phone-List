import React from 'react';
import { connect } from 'react-redux';
import { AppActionCreators } from '../../reducer/app/app';

export type ModalProps = {
  photoUrl: string;

  setModalWindowUrl: (url: string | null) => void;
};

export const PureModal: React.FunctionComponent<ModalProps> = ({
  photoUrl,
  setModalWindowUrl,
}: ModalProps) => {
  const [isImageLoading, setImageLoadingStatus] = React.useState<boolean>(true);
  return (
    <div className="modal-window">
      <div
        className="modal-window__center-wrapper"
        onClick={e => {
          if (e.target === e.currentTarget) {
            setModalWindowUrl(null);
            document.body.style.overflowY = 'auto';
            document.body.style.paddingRight = '0px';
          }
        }}
      >
        <img
          style={{
            display: isImageLoading ? 'none' : 'inline-block',
          }}
          onLoad={() => setImageLoadingStatus(false)}
          src={photoUrl}
          alt="big square"
        />
        <div
          style={{
            display: isImageLoading ? 'inline-block' : 'none',
          }}
          className="lds-ring mx-auto"
        >
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default connect(() => ({}), {
  setModalWindowUrl: AppActionCreators.setModalWindowUrl,
})(PureModal);
