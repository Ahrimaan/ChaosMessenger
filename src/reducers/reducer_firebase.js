import _ from 'lodash';
import { FIREBASE_AUTHENTICATED, MESSAGE_RECIEVED } from '../actions/firebase-actions';

export default function (state = null, action) {
    switch (action.type) {
        case FIREBASE_AUTHENTICATED: {
            return _.merge(state, { firebaseConnected: action.payload });
        }
        case MESSAGE_RECIEVED: {
            console.log(action.payload);
        }
        default:
            return state;
    }
}