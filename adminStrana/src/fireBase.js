import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCkZq4cX9aM_v40Fm1YOK6JMxXnq_WSOWU",
    authDomain: "trailerflix-25df2.firebaseapp.com",
    projectId: "trailerflix-25df2",
    storageBucket: "trailerflix-25df2.appspot.com",
    messagingSenderId: "638760555146",
    appId: "1:638760555146:web:d9c9541018c755af6ad373",
    measurementId: "G-0DEHPVD3PM"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
