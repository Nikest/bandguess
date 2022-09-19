import axios from 'axios';

export async function fetchArtists() {
  return axios.get('/artists');
}
