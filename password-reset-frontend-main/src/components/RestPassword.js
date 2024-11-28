import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { resetPassword } from '../services/api';

function ResetPassword() {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await resetPassword(token, password);
            setMessage(data);
        } catch (error) {
            setMessage('Error: ' + error.response.data);
        }
    };

    return (
        <div className="container">
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default ResetPassword;
