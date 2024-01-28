export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const setCurrentSong = (currentSong) => ({
  type: SET_CURRENT_SONG,
  payload: currentSong,
});

export const addToFavorites = (song) => ({
  type: ADD_TO_FAVORITES,
  payload: song,
});

export const removeFromFavorites = (songId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: songId,
});
