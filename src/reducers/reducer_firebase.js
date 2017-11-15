import _ from 'lodash';
import { MESSAGE_RECIEVED, MESSAGE_SEND } from '../actions/firebase-actions';
import { LOGOUT } from '../actions/authentication-actions';

export default function (state = [], action) {
    switch (action.type) {
        case MESSAGE_RECIEVED: {
            return [...state, action.payload];
        }
        case MESSAGE_SEND: {
            return [...state,action.payload];
        }
        case LOGOUT:
            return [];
        default:
            return state;
    }
}