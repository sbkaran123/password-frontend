import axios from 'axios';

export const requestPasswordReset = (email) => axios.post('/api/auth/forgot-password', { email });
export const resetPassword = (token, password) => axios.post('/api/auth/reset-password', { token, password });
