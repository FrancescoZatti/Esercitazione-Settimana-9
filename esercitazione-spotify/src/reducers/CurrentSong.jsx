import { SET_CURRENT_SONG, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/actions";

const initialState = {
  currentSong: null,
  favoriteSongs: [],
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteSongs: [...state.favoriteSongs, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteSongs: state.favoriteSongs.filter((song) => song.id !== action.payload),
      };

    default:
      return state;
  }
};

export default songReducer;
