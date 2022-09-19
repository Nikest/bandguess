import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../Store/Redux/selectors';
import * as actions from '../../Store/Redux/Actions/actions';
import { AlbumsHistory } from '../../Components';
import { sl } from  '../../utils';

const c = sl(() => require('./Results.less'));

export const Results = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.IsPlayersLoadingSelector);
  const isSaving = useSelector(selectors.IsPlayerSavingSelector);
  const players = useSelector(selectors.getPlayersSelector);
  const history = useSelector(selectors.getPlayerHistorySelector);

  useEffect(() => {
    !isSaving && dispatch(actions.getPlayersAction());
  }, [dispatch, isSaving]);

  const onLoadHistory = (player) => () => dispatch(actions.getPlayerHistoryAction(player))

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
            <div className={c('wrap')} key={player.playerId}>
              <p className={c('player-wrap')} onClick={onLoadHistory(player)}>
                <span className={c('player-name')}>{player.name}</span>
                <span className={c('player-score')}>
                <span className={c('descr')}>Score: </span>
                  {player.successfulRounds}
              </span>
              </p>
              {
                history.playerId === player.playerId && <AlbumsHistory albums={history.albums} successfulRounds={player.successfulRounds} />
              }
            </div>
          ))
        }
      </aside>

    </section>
  );
}
