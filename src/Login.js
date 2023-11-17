import React, { useState } from 'react';
import './css/Login.css'; // Make sure to create a Login.css file with your styles
import Draggable from 'react-draggable';
import keyIcon from './icons/login.png';

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('admin');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            onLoginSuccess();
        } else {
            setError('Incorrect username or password.');
        }
    };

    const handleClose = () => {
        // Handle the close action
    };

    const handleHelp = () => {
        // Handle the help action
    };

    return (
        <Draggable>
            <div className="login-wrapper">
                <div className="login-form">
                    <div className="login-header">
                        Welcome to Windows
                        <span className="help-button" onClick={handleHelp}>?</span>
                        <span className="close-button" onClick={handleClose}>X</span>
                    </div>
                    <div className="login-body">
                        <div className="key-icon">
                            <img src={keyIcon} alt="Key" />
                        </div>
                        <div className="credentials">
                            <p>Type a user name and password to log on to Windows.</p>
                            <br></br>
                            <br></br>
                            <br></br>
                            <label>User name:</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <label>Password:</label>
                            {/* style={{ marginLeft: '3px' }}  */}
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="login-footer">
                            <button type="submit" onClick={handleSubmit}>OK</button>
                            <button type="button" onClick={handleClose}>Cancel</button>
                        </div>
                    </div>
                    {error && <div className="login-error">{error}</div>}
                </div>
            </div>
        </Draggable>
    );
};

export default Login;
