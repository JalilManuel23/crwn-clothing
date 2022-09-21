import { useState } from "react";

import FormInput from "../form-input/form-input.component";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import './sign-up-form.styles.scss';
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("Passwords do no match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });


        } catch(error) {

            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use.')
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Display Name'
                    type='text' 
                    required 
                    name="displayName" 
                    value={ displayName }
                />

                <FormInput
                    label='Email' 
                    type='email' 
                    required 
                    name="email" 
                    value={ email }
                />

                <FormInput
                    label='Password' 
                    type='password' 
                    required 
                    name="password" 
                    value={ password }
                />

                <FormInput
                    label='Confirm Password' 
                    type='password' 
                    required 
                    name="confirmPassword" 
                    value={ confirmPassword }
                />

                <Button buttonType='google' type="submit">Submit</Button>
            </form>
        </div>
    );
}

export default SignUpForm;