import React from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../../Store/Redux/selectors';
import { sl } from  '../../utils';

const c = sl(() => require('./Round.less'));

export const Round = () => {
  const round = useSelector(selectors.getRoundSelector);

  return (
    <div className={c('round-wrap')}>
      round
      <span className={c('round')}>{round + 1} <span className={c('small')}>/ 5</span></span>
      round
    </div>
  );
}
