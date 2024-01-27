import { SET_CURRENT_SONG } from "../actions/actions";

const initialState = {
    CurrentSong: null
};

const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_SONG:
            return {
                ...state,
                CurrentSong: action.payload
            };
        default:
            break
    }
    return state
}

export default songReducer