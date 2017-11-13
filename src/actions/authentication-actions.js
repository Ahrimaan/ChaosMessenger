import authService from '../services/authenticationService';
import { authenticateFirebase } from './firebase-actions';
import moment from 'moment';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const CURRENT_USER = 'CURRENT_USER';
export const SHOW_LOGIN = 'SHOW_LOGIN';
export const USER_ISAUTHENTICATED = 'USER_ISAUTHENTICATED';
export const LOGOUT = 'LOGOUT';

export function showLogin() {
    return (dispatch) => {
        let request = new authService().login().then((result) => {
            let action = {
                type: SHOW_LOGIN
            };
            dispatch(action);
            dispatch(loggedIn(result));
        }, (error) => {
            console.log(error);
        });
    }
}

export function getCurrentUser() {
    let currentUserItem = localStorage.getItem('profile');
    let currentUser = currentUserItem ? JSON.parse(currentUserItem) : null;
    return (dispatch) => {
        let action = {
            type: CURRENT_USER,
            payload: currentUser
        }
        dispatch(action);
        dispatch(isAuthenticated());
    }

    return action;
}

export function isAuthenticated() {
    let tokens = localStorage.getItem('tokens');
    let isExpired = !moment(tokens.expires).isAfter(Date.now());
    return {
        type:USER_ISAUTHENTICATED,
        payload : isExpired
    };
}

export function loggedIn(profile) {
    return (dispatch) => {
        let action = {
            type: LOGIN_SUCCESS,
            payload: profile
        };
        dispatch(action);
        dispatch(authenticateFirebase(profile.firebase.token));
    }
}

export function logout(){
    let auth = new authService();
    auth.logout();
    return {
        type: LOGOUT
    }
}


