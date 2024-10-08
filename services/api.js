import axios from 'axios';

const api = axios.create({
  baseURL: 'http://<your-ip-address>:3000/api', // Replace with your backend server's IP address
  timeout: 10000, // Timeout after 10 seconds
});

// Example request function
export const signUpUser = async (userData) => {
  try {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export default api;
