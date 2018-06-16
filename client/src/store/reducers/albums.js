import {FETCH_ALBUMS_SUCCESS} from "../actions/actionTypes";



const initialState = {
    albums: []
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ALBUMS_SUCCESS:
            return {...state, albums: action.albums};
        default:
            return state;
    }
};

export default reducer;