import firebase from 'firebase';
import 'firebase/analytics';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBaZkCdGVXm7Ar6zHCrKIkQfJh50F0oVvc',
    authDomain: 'cag-zalem-32e6e.firebaseapp.com',
    databaseURL: 'https://cag-zalem-32e6e.firebaseio.com',
    projectId: 'cag-zalem-32e6e',
    storageBucket: 'cag-zalem-32e6e.appspot.com',
    messagingSenderId: '829120399131',
    appId: '1:829120399131:web:18b9a49749dce3fb4075be',
    measurementId: 'G-4D03VMZV9Q',
  });
  firebase.analytics();
} else {
  firebase.app(); // if already initialized, use this one
}

export default firebase;
