
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA7EOsuB2_Dy4XYCC9L9vw6Rs3nnrXbfc0",
    authDomain: "hackathon-v2fm.firebaseapp.com",
    databaseURL: "https://hackathon-v2fm.firebaseio.com",
    projectId: "hackathon-v2fm",
    storageBucket: "hackathon-v2fm.appspot.com",
    messagingSenderId: "400765331115",
    appId: "1:400765331115:web:5ce8dedb24fe7b3ba579ee"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}
