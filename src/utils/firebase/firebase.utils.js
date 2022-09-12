import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDjH_fGO6VDwkSp8RutLiWyFf5Q_GOFbwY",
    authDomain: "crwn-clothing-db-ac1e3.firebaseapp.com",
    projectId: "crwn-clothing-db-ac1e3",
    storageBucket: "crwn-clothing-db-ac1e3.appspot.com",
    messagingSenderId: "310038797200",
    appId: "1:310038797200:web:a2ab8b350bfa0673aeb115"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    promp: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);