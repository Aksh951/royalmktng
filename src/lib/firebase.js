import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBrPzNemCJ7R5lLxd_C9nUrvigq7kI1Ods',
  authDomain: 'royalmktng-644e1.firebaseapp.com',
  projectId: 'royalmktng-644e1',
  storageBucket: 'royalmktng-644e1.appspot.com',
  messagingSenderId: '673486632531',
  appId: '1:673486632531:web:190c37951ae13a564df8a6'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
