import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IArtist } from '../../Store/Redux/interfaces';
import * as actions from '../../Store/Redux/Actions/actions';
import * as selectors from '../../Store/Redux/selectors';
import { sl } from  '../../utils';

const c = sl(() => require('./Artists.less'));

export const Artists = () => {
  const dispatch = useDispatch();
  const artists = useSelector(selectors.getArtistsSelector);
  const wrongSelected = useSelector(selectors.getWrongSelectedSelector);
  const guessedArtist = useSelector(selectors.getGuessedArtistSelector);

  const isGuessedArtist = !!guessedArtist;

  const selectArtist = (artist: IArtist) => () => dispatch(actions.selectArtistAction(artist));

  return (
    <aside className={c('artists-wrap')}>
      {
        !isGuessedArtist ? artists.map((artist) => (
          <p
            key={artist.artistId}
            className={c(`artist ${wrongSelected.includes(artist.artistId) ? 'wrong' : ''}`)}
            onClick={selectArtist(artist)}
          >
            {artist.artistName}
          </p>
        )) : <p className={c('success-text')}>Congratulations! You guessed!</p>
      }
    </aside>
  );
}
