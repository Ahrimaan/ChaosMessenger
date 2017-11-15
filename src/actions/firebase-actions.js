import firebase from '../services/firebase';
import { firebaseConfig } from '../consts';

export const MESSAGE_RECIEVED = 'MESSAGE_RECIEVED';
export const MESSAGE_SEND = 'MESSAGE_SEND';
export const MESSAGE_SENDING = 'MESSAGE_SENDING';
export const SUBSCRIBED = 'FB:SUBSCRIBED';

export function subscribeOnChat() {
    return (dispatch) => {
        let action = {
            type: SUBSCRIBED
        };
        dispatch(action);
        firebaseApp.database().ref('messages').on('value', (snapshot) => {
            dispatch(newMessageRecieved(snapshot.val()));
        });
    };
}

export function newMessageRecieved(message) {
    let action = {
        type: MESSAGE_RECIEVED,
        payload: message
    };
    return action;
}

export function addMessageToChat(message) {
    message.sendDate = Date.now();
    return (dispatch) => {
        let sendAction = {
            type:MESSAGE_SENDING,
            payload:message
        }
        dispatch(sendAction);
        let request = firebase.database().ref('chat').child('messages').push(message).then((value, err) => {
            message.id = value.key;
            let action = {
                type: MESSAGE_SEND,
                payload: message
            };
            dispatch(action);
        });
    }
}

newMessageRecieved();