import firebase from 'firebase';
import { firebaseConfig } from '../consts';

var firebaseApp =firebase.initializeApp(firebaseConfig);
export default firebaseApp;