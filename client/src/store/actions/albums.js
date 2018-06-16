import axios from '../../axios-api';
import {FETCH_ALBUMS_SUCCESS, FETCH_ONE_ALBUM_SUCCESS} from "./actionTypes";
import {push} from "react-router-redux";



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
export const fetchOneAlbumSuccess = (album) => {
  return {type: FETCH_ONE_ALBUM_SUCCESS, album}
};

export const getOneAlbum = (id) => {
    return dispatch => {
        return axios.get('/albums/' + id).then(
            response => dispatch(fetchOneAlbumSuccess(response.data))
        )
    }
};

export const fetchGetAllAlbums = () => {
    return dispatch => {
        return axios.get('/albums').then(
            response => dispatch(fetchAlbumsSuccess(response.data))
        );
    }
};

export const albumCreated = (albumData, token) => {
    const headers = {
        'Auth-Token': token
    };
  return dispatch => {

      return axios.post('/albums', albumData, {headers}).then(
          dispatch(push('/'))
      )
  }
};
