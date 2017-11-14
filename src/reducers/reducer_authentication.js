import _ from 'lodash';
import { LOGIN_SUCCESS, CURRENT_USER, LOGOUT, FIREBASE_AUTHENTICATED } from '../actions/authentication-actions';

export default function (state, action) {
    switch (action.type) {
        case CURRENT_USER:
        case LOGIN_SUCCESS: {
            return action.payload;
        }
        case LOGOUT: {
            return null;
        }
        default:
            return state ? state : null;
    }
}