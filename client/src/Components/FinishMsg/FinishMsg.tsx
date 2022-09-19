import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../Store/Redux/selectors';
import * as actions from '../../Store/Redux/Actions/actions';
import * as routes from '../../Pages/routes';
import { sl } from  '../../utils';

const c = sl(() => require('./FinishMsg.less'));

export const FinishMsg = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const round = useSelector(selectors.getRoundSelector);
  const [name, setName] = useState('');
  const input = useRef<HTMLInputElement>();

  useEffect(() => {
    input.current.addEventListener('keyup', (e: KeyboardEvent) => {
      const inputEl = e.target as HTMLInputElement;
      setName(inputEl.value);
    });
  }, []);

  const onSave = () => {
    dispatch(actions.gameEndAction(name));
    history.push(routes.RESULTS);
  }

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
        <button
          className={c('button')}
          onClick={onSave}
          disabled={name.length <= 2}
        >
          Save
        </button>
      </div>
    </>
  );
}
