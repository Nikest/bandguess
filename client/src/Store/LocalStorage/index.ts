import { IGameState } from '../Redux/interfaces';

export function saveToStorage(state: IGameState) {
  localStorage.setItem('guessArtistState', JSON.stringify(state));

  return true;
}

export function getFromStorage() {
  return JSON.parse(localStorage.getItem('guessArtistState'));
}

export function deleteFromStorage() {
  localStorage.removeItem('guessArtistState');
}
