import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import { sha256 } from 'js-sha256';
import FormInput from '../../components/form-input/form-input';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = (event) => {
        const { value, name } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const login = () => {
        fetch('http://localhost:9000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    email: email,
                    password: sha256(password)
                }
            })
        }).then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                setLoggedIn(true);
            }
        }).catch(err => console.error(err));
    }

    return (
        <div className='register container'>
            <div className='register__description'>
                <h3 className='register__heading'>Login</h3>
                <p className="register__descriptionMessage">Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className='register__form'>
                <FormInput
                    name='email'
                    type='email'
                    label='Email'
                    value={email}
                    handleChange={handleChange}
                    required
                />
                <FormInput 
                    name='password'
                    type='password'
                    label='Password'
                    value={password}
                    handleChange={handleChange}
                    required
                />
                <button className="button button--primary" onClick={login}>Login</button>
            </div>
            {
                loggedIn ?
                <Redirect push={true} to={{pathname: "/",}}
                /> : ''
            }
        </div>
    )
}

export default SignIn;
