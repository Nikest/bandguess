import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../Store/Redux/selectors';
import * as actions from '../../Store/Redux/Actions/actions';
import { sl } from  '../../utils';

const c = sl(() => require('./Results.less'));

export const Results = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.IsPlayersLoadingSelector);
  const isSaving = useSelector(selectors.IsPlayerSavingSelector);
  const players = useSelector(selectors.getPlayersSelector);

  useEffect(() => {
    !isSaving && dispatch(actions.getPlayersAction());
  }, [dispatch, isSaving]);

  return (isLoading || isSaving) ? (
    <section className={c('container-loading')}>
      <p className={c('loading')}>
        Loading...
      </p>
    </section>
  ) : (
    <section className={c('container')}>
      <h2 className={c('title')}>Results: </h2>

      <aside className={c('table-wrap')}>
        {
          players.map((player) => (
            <p className={c('player-wrap')} key={player.playerId}>
              <span className={c('player-name')}>{player.name}</span>
              <span className={c('player-score')}>
                <span className={c('descr')}>Score: </span>
                {player.successfulRounds}
              </span>
            </p>
          ))
        }
      </aside>

    </section>
  );
}
