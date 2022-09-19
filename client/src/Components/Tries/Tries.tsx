import React from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../../Store/Redux/selectors';
import { sl } from  '../../utils';

const c = sl(() => require('./Tries.less'));

export const Tries = () => {
  const tries = useSelector(selectors.getTriesSelector);

  return (
    <h2 className={c('sub-title')}>
      Select the artist of this album. You have
      {' '}
      <span className={c('mark')}>{tries}</span>
      {' '}
      tries
    </h2>
  );
}
