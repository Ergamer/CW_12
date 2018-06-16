import axios from '../../axios-api';
import {FETCH_ALBUMS_SUCCESS} from "./actionTypes";



export const fetchAlbumsSuccess = albums => {
    return {type: FETCH_ALBUMS_SUCCESS, albums}
};

export const fetchGetThisUserAlbums = (id) => {
    return dispatch => {
        return axios.get('/albums?user=' + id).then(
            response => dispatch(fetchAlbumsSuccess(response.data))
        );
    }
};


export const albumCreated = () => {
  return dispatch => {
      return axios.post('/albums', {album: id}, {headers: {'Token': token}}).then(res => console.log(res.data))
  }
};