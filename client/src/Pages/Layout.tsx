import React, { useEffect } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../Store/Redux/Actions/actions';
import { Home, Game, Results } from './';
import { Button } from '../Components';
import * as routes from './routes';
import { sl } from  '../utils';

const c = sl(() => require('./Layout.less'));

export const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getArtistsAction());
  }, [dispatch]);

  const onNewGame = () => {
    dispatch(actions.newGameRequestAction());
  }

  const header = (
    <>
      <h1 className={c('title')}>Guess the <span className={c('mark')}>Artist</span></h1>
      <div className={c('buttons-wrap')}>
        <Link to={routes.HOME}><Button small>Home</Button></Link>
        <Link to={routes.GAME}><Button small onClick={onNewGame}>New Game</Button></Link>
        <Link to={routes.RESULTS}><Button small>Results</Button></Link>
      </div>
    </>
  );

  return (
    <div className={c('wrapper')}>
      <HashRouter>
        <header className={c('header')}>
          <Route path={routes.GAME}>{ header }</Route>
          <Route path={routes.RESULTS}>{ header }</Route>
        </header>

        <main className={c('container')}>
          <Switch>
            <Route exact path={routes.HOME}>
              <Home />
            </Route>
            <Route path={routes.GAME}>
              <Game />
            </Route>
            <Route path={routes.RESULTS}>
              <Results />
            </Route>
          </Switch>
        </main>
      </HashRouter>
    </div>
  );
};
