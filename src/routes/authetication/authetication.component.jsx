import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import { signInWithPopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const Authetication = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithPopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={ logGoogleUser }>
                Sign in with Google Popup
            </button>
            <SignUpForm />
        </div>
    )
}

export default Authetication;