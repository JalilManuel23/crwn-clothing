import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithGloogleRedirect,
    signInWithGooglePopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    // if user data does not exist
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    // if user exists
    return userDocRef;

    // return userDocRef
}