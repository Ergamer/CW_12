import axios from '../../axios-api';
import {push} from 'react-router-redux';
import {
    LOGIN_FACEBOOK,
    LOGIN_FACEBOOK_FAILURE,
    LOGIN_FACEBOOK_SUCCESS,
    LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER,
    REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS
} from "./actionTypes";

const registerUserSuccess = () => {
    return {type: REGISTER_USER_SUCCESS};
};

const registerUserFailure = error => {
    return {type: REGISTER_USER_FAILURE, error};
};

export const registerUser = userData => {
    return dispatch => {
        return axios.post('/users', userData).then(
            response => {
                dispatch(registerUserSuccess());
                dispatch(push('/'));
            },
            error => {
                console.log(error.response.data)
                dispatch(registerUserFailure(error.response.data));
            }
        );
    };
};

const loginUserSuccess = user => {
    return {type: LOGIN_USER_SUCCESS, user};
};

const loginUserFailure = error => {
    return {type: LOGIN_USER_FAILURE, error};
};

export const loginUser = userData => {
    return dispatch => {
        return axios.post('/users/sessions', userData).then(
            response => {
                dispatch(loginUserSuccess(response.data.user));
                dispatch(push('/'));
            },
            error => {
                const errorObj = error.response ? error.response.data : {error: 'No internet'};
                dispatch(loginUserFailure(errorObj));
            }
        )
    }
};

export const logoutUser = () => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const headers = {'Token': token};
        axios.delete('users/sessions', {headers}).then(
            response => {
                dispatch({type: LOGOUT_USER});
                dispatch(push('/'));
            },
            error => {
                console.log('Could not logout');
            }
        );
    }
};


export const loginFacebookSuccess = (user, token) => {
    return {type: LOGIN_FACEBOOK_SUCCESS, user, token};
};

export const loginFacebookFailure = error => {
    return {type: LOGIN_FACEBOOK_FAILURE, error};
};

export const loginFacebook = (data, token )=> {
    console.log(token)
    return {type: LOGIN_FACEBOOK, data, token};
};

export const logoutUser = () => {
    return {type: LOGOUT_USER}
};


