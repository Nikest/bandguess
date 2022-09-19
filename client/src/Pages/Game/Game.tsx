import React from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../../Store/Redux/selectors';
import { Round, Tries, Artists, FinishMsg } from '../../Components';
import { sl } from  '../../utils';

const c = sl(() => require('./Game.less'));

export const Game = () => {
  const isLoading = useSelector(selectors.isLoadingSelector);
  const currentAlbum = useSelector(selectors.getCurrentAlbumSelector);
  const guessedArtist = useSelector(selectors.getGuessedArtistSelector);
  const status = useSelector(selectors.getStatusSelector);
  const tries = useSelector(selectors.getTriesSelector);
  const albumBg = { backgroundImage: `url("${currentAlbum.artworkUrl100}")` };

  const isLastTry = tries === 1;
  if (isLoading) {
    return (
      <section className={c('container')}>
        <p className={c('undefined-name center')}>
          Loading...
        </p>
      </section>
    );
  }

  return status === 'inProgress' ? (
    <section className={c('container')}>
      <Round />
      <Tries />

      <div className={c('illustration')}>
        <div className={c(`img ${(guessedArtist || isLastTry) ? 'unblur' : ''}`)} style={albumBg} />
      </div>

      <div className={c('album-name')}>
        <p className={c(`undefined-name ${guessedArtist ? 'guessed' : ''}`)}>
          {guessedArtist?.artistName || 'Who is artist?'}
        </p>
        <p>{currentAlbum.collectionName}</p>
      </div>

      <Artists />
    </section>
  ) : (
    <section className={c('container')}>
      <FinishMsg />
    </section>
  )
}
