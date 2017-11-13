import firebase from 'firebase';
import { firebaseConfig } from '../consts';

var app = firebase.initializeApp(firebaseConfig);

app.auth().onAuthStateChanged((user) => {
    if(user){
        //signed in
    }else {
        //signed out
    }
});


export default class FirebaseService {
    authenticate(token) {
       return app.auth().signInWithCustomToken(token);
    }

    getDatabaseCollection(collection) {
        return app.database().ref(collection);
    }
}