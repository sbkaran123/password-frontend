import React, { useState } from 'react';
import { requestPasswordReset } from '../services/api';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await requestPasswordReset(email);
            setMessage(data);
        } catch (error) {
            setMessage('Error: ' + error.response.data);
        }
    };

    return (
        <div className="container">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Send Reset Link</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default ForgotPassword;
