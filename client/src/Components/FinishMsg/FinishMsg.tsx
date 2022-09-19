import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../../Store/Redux/selectors';
import { sl } from  '../../utils';

const c = sl(() => require('./FinishMsg.less'));

export const FinishMsg = () => {
  const round = useSelector(selectors.getRoundSelector);
  const [name, setName] = useState('');
  const input = useRef<HTMLInputElement>();

  useEffect(() => {
    input.current.addEventListener('keyup', (e: KeyboardEvent) => {
      const inputEl = e.target as HTMLInputElement;
      setName(inputEl.value);
    });
  }, []);

  return (
    <>
      <p className={c('finish-msg')}>You have <span className={c('mark')}>{round}</span> points from 5!</p>

      <div className={c('input-wrap')}>
        <input
          ref={input}
          type="text"
          placeholder='Enter your name for saving results'
          className={c('input')}
        />
        <button className={c('button')} disabled={name.length <= 3}>Save</button>
      </div>
    </>
  );
}
