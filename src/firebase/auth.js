import 'firebase/auth';
import firebase from './index';

const auth = firebase.auth();

export const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider);
}

export const signout = () => {
  auth.signOut();
};

export const subscribeAuthHandler = auth.onAuthStateChanged.bind(auth);
