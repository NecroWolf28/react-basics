import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate(); // Hook for navigation

    const handleLogin = () => {
        if (username === 'admin' && password === 'password123') {
            navigate('/success'); // Navigate to the Login Successful page
        } else {
            setErrorMessage('Invalid username or password.');
        }
    };



    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Login Page</h1>
            <div style={{ marginBottom: '10px' }}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </label>
            </div>
            <button onClick={handleLogin} style={{ padding: '5px 10px', cursor: 'pointer' }}>
                Login
            </button>
            {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
        </div>
    );
}

export default Login;
