import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDeuCuLKHoLHqwPHz6nSgJk5xCaII9f8qM",
    authDomain: "dressave-9f967.firebaseapp.com",
    projectId: "dressave-9f967",
    storageBucket: "dressave-9f967.appspot.com",
    messagingSenderId: "730601598457",
    appId: "1:730601598457:web:fefc381a09f36f15542128"
};

firebase.initializeApp(firebaseConfig);

export default firebase;