import {
  artistsValidating,
  getAlbumsOfArtists,
  updateArtistsOnDB,
  updateAlbumsOnDB,
} from '../artists/';

export async function launchGameProcessor() {
  await artistsValidating()
    .then(updateArtistsOnDB)
    .then(getAlbumsOfArtists)
    .then(updateAlbumsOnDB)

  return true
}
