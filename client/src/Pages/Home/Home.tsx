import React from 'react';
import { Link } from 'react-router-dom';
import { sl } from '../../utils';
import { Button } from '../../Components';
import * as routes from '../routes';
import * as local from '../../Store/LocalStorage';
import { useDispatch } from 'react-redux';
import * as actions from '../../Store/Redux/Actions/actions';

const c = sl(() => require('./Home.less'));

export const Home = () => {
  const savedGameExist = local.getFromStorage();

  const dispatch = useDispatch();

  const onNewGame = () => {
    dispatch(actions.newGameRequestAction());
  }

  return (
    <section className={c('container')}>
      <aside className={c('title-wrap')}>
        <h1 className={c('title')}>Guess the <br/><span className={c('mark')}>Artist</span></h1>

      </aside>

      <aside className={c('button-wrap')}>
        <Link to={routes.GAME}><Button onClick={onNewGame}>New Game</Button></Link>
        {
          !!savedGameExist && <Link to={routes.GAME}><Button>CONTINUE</Button></Link>
        }
        <Link to={routes.RESULTS}><Button>Results</Button></Link>
      </aside>
    </section>
  );
}
