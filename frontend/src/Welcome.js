import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const username = localStorage.getItem('username');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/');
    };

    return (
        <div className="welcome-container">
            <h1>Welcome, {username}!</h1>
            <p>You have successfully logged in.</p>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
    );
};

export default Welcome;
