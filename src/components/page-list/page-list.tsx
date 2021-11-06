import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { AppActionCreators } from '../../reducer/app/app';

export type PageListProps = {
  pageList: number[];
  currentPage: number;

  setCurrentPage: (page: number) => void;
};

export const PurePageList: React.FunctionComponent<PageListProps> = ({
  pageList,
  currentPage,
  setCurrentPage,
}: PageListProps) => {
  const bodyEl = useMemo(() => document.body, []);
  return (
    <div className="page-list">
      {pageList.map((page, index) => (
        <button
          key={`${page}-${index + 1}`}
          className={`page-list__button ${
            page === currentPage ? 'page-list__button_current' : ''
          } ${page === 0 ? 'page-list__button_inactive' : ''}`}
          type="button"
          onClick={() => {
            if (page === currentPage || page === 0) {
              return;
            }
            setCurrentPage(page);
            bodyEl.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {page === 0 ? '...' : page}
        </button>
      ))}
    </div>
  );
};

export default connect(() => ({}), {
  setCurrentPage: AppActionCreators.setCurrentPage,
})(PurePageList);
