import authService from '../services/authenticationService';
import moment from 'moment';
import firebase from '../services/firebase';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const CURRENT_USER = 'CURRENT_USER';
export const LOGOUT = 'LOGOUT';

export function showLogin() {
    return (dispatch) => {
        let request = new authService().login().then((result) => {
            dispatch(authenticateFirebase(result))
        }, (error) => {
            console.log(error);
        });
    }
}

export function authenticateFirebase(profile) {
    return (dispatch) => {
        let request = firebase.auth().signInWithCustomToken(profile.firebase.token).then((result) => {
            dispatch(loggedIn(profile));
        }); 
    };    
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
    }
}

export function loggedIn(profile) {
    return (dispatch) => {
        let action = {
            type: LOGIN_SUCCESS,
            payload: profile
        };
        dispatch(action);
    }
}

export function logout(){
    return (dispatch) => {
        let action = {
            type: LOGOUT
        };
        let auth = new authService();
        auth.logout();
        firebase.auth().signOut();
        firebase.database().goOffline();
        dispatch(action);
    }
}


