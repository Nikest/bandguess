import axios from 'axios';

export async function fetchArtists() {
  return axios.get('/artists');
}

export async function fetchNewAlbum(randomSeed, round) {
  console.log('axios', randomSeed, round);
  return axios.get('/album/procedural', { params: { randomSeed, round } });
}
