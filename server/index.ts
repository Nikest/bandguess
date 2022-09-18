import { createServer } from 'http';

import { ExpressApp, normalizePort, onError, onListening } from './Express/';
import { databaseConnector } from './DB';

import {
  artistsValidating,
  getAlbumsOfArtists,
  updateArtistsOnDB,
  updateAlbumsOnDB,
} from './artists/';

Init();

async function Init() {
  const app = new ExpressApp();
  const port = normalizePort(process.env.PORT || '3007');

  app.set('port', port);
  const server = createServer(app.express);

  server.listen(port);
  server.on('error', onError(port));
  server.on('listening', onListening(server));
  console.log('stage 1/3 *** server started ***');

  const dbConnect = await databaseConnector();
  console.log(`stage 2/3 ${dbConnect}`);

  artistsValidating()
    .then(updateArtistsOnDB)
    .then(getAlbumsOfArtists)
    .then(updateAlbumsOnDB)
    .then(() => console.log('stage 3/3 server available at http://localhost:3007'));
}
