import React from 'react';
import { connect } from 'react-redux';
import { AppActionCreators } from '../../reducer/app/app';

export type FilterProps = {
  albumIdList: number[];

  setIdFilter: (id: number) => void;
};

export const PureFilter: React.FunctionComponent<FilterProps> = ({
  albumIdList,
  setIdFilter,
}: FilterProps) => (
  <section className="filter">
    <p className="filter__text">Filter by id:</p>
    <select
      onChange={e => {
        setIdFilter(Number(e.target.value));
      }}
      className="form-select filter__select"
    >
      <option value={0}>All</option>
      {albumIdList.map(id => (
        <option key={id} value={id}>{id}</option>
      ))}
    </select>
  </section>
);

export default connect(() => ({}), {
  setIdFilter: AppActionCreators.setIdFilter,
})(PureFilter);
