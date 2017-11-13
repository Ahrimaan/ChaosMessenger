import firebase from 'firebase';
import { firebaseConfig } from '../consts';

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const FIREBASE_AUTHENTICATED = 'FIREBASE_AUTHENTICATED';
export const MESSAGE_RECIEVED = 'MESSAGE_RECIEVED';
export const MESSAGE_SEND = 'MESSAGE_SEND';

export function authenticateFirebase(firebaseToken) {
    let request = firebaseApp.auth().signInWithCustomToken(firebaseToken);
    return {
        type: FIREBASE_AUTHENTICATED,
        payload: request
    };
}

firebaseApp.database().ref('chatroom').on('value', (snapshot) => {
    return (dispatch) => {
        dispatch(newMessageRecieved(snapshot.val()));
    }
});

export function newMessageRecieved(message) {
    let action = {
        type: MESSAGE_RECIEVED,
        payload: message
    };
    return action;
}

export function addMessageToChat() {
    let request = firebaseApp.database().ref('chatroom').set('TEST');
    return {
        type: MESSAGE_SEND,
        payload: request
    };
}

newMessageRecieved();