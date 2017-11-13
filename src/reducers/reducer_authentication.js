import _ from 'lodash';
import { LOGIN_SUCCESS, CURRENT_USER, LOGOUT, USER_ISAUTHENTICATED } from '../actions/authentication-actions';

export default function (state = null, action) {
    switch (action.type) {
        case CURRENT_USER:
        case LOGIN_SUCCESS: {
            return action.payload;
        }
        case USER_ISAUTHENTICATED: {
            return action.payload ? state : null;
        }
        case LOGOUT: {
            return null;
        }
        default:
            return state;
    }
}