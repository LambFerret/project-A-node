import axios from 'axios';
import React, { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState<'success' | 'fail' | 'idle' | 'error'>('idle');

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await axios('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({ password }),
            });

            if (response.status === 200) {
                setLoginStatus('success');
            } else {
                setLoginStatus('fail');
            }
        } catch (error) {
            console.error(error);
            setLoginStatus('error');
        }
    };


    return (
        <div>
            <h1>Login</h1>
            <form id='login-box' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button className="login-button" type="submit">Login</button>
            </form>
            <p id="status"> Status : {loginStatus} </p>
        </div>
    );
};


export default Login;