import axios from 'axios';
import { IRoundRequestQuery } from '../../../server/Express/routers/types';
import { IPlayer } from '../../../server/types';

export async function fetchArtists() {
  return axios.get('/artists');
}

export async function fetchNewAlbum(params: IRoundRequestQuery) {
  return axios.get('/album/procedural', { params });
}

export async function fetchSavePlayer(params: IPlayer) {
  return axios.post('/player', { params });
}

export async function fetchPlayers() {
  return axios.get('/player');
}
