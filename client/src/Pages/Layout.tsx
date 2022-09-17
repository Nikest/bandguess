import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as dispatches from '../Store/Redux/dispatches';
import { sl } from  '../utils';

const c = sl(() => require('./Layout.less'));

export const Layout = () => {
  const dispatch = useDispatch();
  const store = useSelector((a) => a);
  console.log('store', store);

  const getArtists = () => dispatch(dispatches.getArtistsDispatch())

  return (
    <div className={c('test')} onClick={getArtists}>
      <HashRouter>
        <header className={c('header')}>
          <h1 className={c('title')}>Guess the Artist</h1>
          <Link to="/game">Game</Link>
          <Link to="/table">table</Link>
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              <div>Home</div>
            </Route>
            <Route path='/game'>
              <div>Game</div>
            </Route>
            <Route path='/table'>
              <div>Table</div>
            </Route>
          </Switch>
        </main>
      </HashRouter>
    </div>
  );
};
