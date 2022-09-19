import React from 'react';
import { ICurrentAlbum } from '../../Store/Redux/interfaces';
import { sl } from  '../../utils';

const c = sl(() => require('./AlbumsHistory.less'));

interface IProps {
  albums: ICurrentAlbum[];
  successfulRounds: number;
}

export const AlbumsHistory: React.FC<IProps> = ({ albums, successfulRounds }: IProps) => {
  return (
    <aside className={c('container')}>
      <p className={c('title')}>History:</p>
      {
        albums.map((album) => (
          <div key={album.collectionName} className={c('album')}>
            <div
              className={c('illustration')}
              style={{
                backgroundImage: `url("${album.artworkUrl100}")`
              }}
            />

            <div className={c('description')}>
              <p className={c('artist-name')}>{album.artistName}</p>
              <p className={c('album-name')}>{album.collectionName}</p>
            </div>
          </div>
        ))
      }
    </aside>
  );
}
