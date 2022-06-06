import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { sha256 } from 'js-sha256';
import FormInput from '../../components/form-input/form-input';

const Register = () => {

    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registered, setRegistered] = useState(false);
    
    const handleChange = (event) => {
        const { value, name } = event.target;
        if (name === 'firstname') {
            setFirstname(value);
        } else if (name === 'lastname') {
            setLastname(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'confirmpassword') {
            setConfirmPassword(value);
        } else if (name === 'email') {
            setEmail(value);
        }
    };

    const register = (e) => {
        fetch('http://localhost:9000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: sha256(password)
                }
            })
        }).then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                setRegistered(true);
            }
        }).catch(err => console.error(err));
        
    };
    return (
        <div className='register container'>
            <div className='register__description'>
                <h3 className='register__heading'>Signup</h3>
                <p className="register__descriptionMessage">We do not share your personal information with anyone.</p>
            </div>
            <div className='register__form'>
                <FormInput 
                    name='firstname'
                    type='text'
                    label='First Name'
                    value={firstname}
                    handleChange={handleChange}
                    required
                />
                <FormInput 
                    name='lastname'
                    type='test'
                    label='Last Name'
                    value={lastname}
                    handleChange={handleChange}
                    required
                />
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
                <FormInput 
                    name='confirmpassword'
                    type='password'
                    label='Confirm Password'
                    value={confirmPassword}
                    handleChange={handleChange}
                    required
                />
                <button type='submit' className="button button--primary" onClick={register}>Signup</button>
            </div>
            {
                registered ?
                <Redirect push={true} to={{pathname: "/",}}
                /> : ''
            }
            
        </div>
    )
}

export default Register;
