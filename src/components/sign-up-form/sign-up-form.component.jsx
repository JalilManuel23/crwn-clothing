import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

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
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return(
        <div>
            <h1>Sign Up with your email and password</h1>
            <form onSubmit={() => {} }>
                <label>Display Name</label>
                <input 
                    type='text' 
                    required 
                    name="displayName" 
                    value={ displayName }
                />

                <label>Email</label>
                <input 
                    type='email' 
                    required 
                    name="email" 
                    value={ email }
                />

                <label>Password</label>
                <input 
                    type='password' 
                    required 
                    name="password" 
                    value={ password }
                />

                <label>Confirm Password</label>
                <input 
                    type='password' 
                    required 
                    name="confirmPassword" 
                    value={ confirmPassword }
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignUpForm;