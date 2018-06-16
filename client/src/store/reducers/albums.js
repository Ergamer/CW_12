import {FETCH_ALBUMS_SUCCESS, FETCH_ONE_ALBUM_SUCCESS} from "../actions/actionTypes";



const initialState = {
    albums: [],
    album: []
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ALBUMS_SUCCESS:
            return {...state, albums: action.albums};
        case FETCH_ONE_ALBUM_SUCCESS:
            return {...state, album: action.album};
        default:
            return state;
    }
};

export default reducer;