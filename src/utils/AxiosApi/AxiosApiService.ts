import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { infoNotification } from '../notification.util';
import { jwtDecode } from 'jwt-decode';

export const isTokenExpired = (token: string) => {
    if (!token) {
        return true; // If there's no token, consider it expired
    }

    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    return decodedToken.exp < currentTime;
};

export const handleRequestInterceptor = async (config: AxiosRequestConfig) => {
    // Retrieve token from localStorage or any other storage mechanism
    const token = localStorage.getItem('_token');

    if (token) {
        // Attach the token to the Authorization header
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    // Check token validity (optional)
    // console.log("Token expired")
    if (isTokenExpired(token)) {
        console.log("Token expired")
        // Log out user if token is expired
        localStorage.removeItem('_token');
        window.location.replace('/login'); // Redirect to the login page
        infoNotification("Session Expired, Please Login Again!")
        return Promise.reject(new Error('Token expired. Please log in again.'));
    }


    return config;
}

export const handleResponseInterceptor = (response: AxiosResponse) => {
    return response;
}

export const requestInterceptorErrorFunc = (error: AxiosError) => {
    return Promise.reject(error);
}

export const responseInterceptorErrorFunc = (error: AxiosError) => {
    // if (error.response?.status === 401) {
    //     // Unauthorized error
    //     localStorage.removeItem('authToken');
    //     window.location.href = '/login'; // Redirect to login page
    // } else if (error.response?.status === 500) {
    //     // Server error
    //     console.error('Server error:', error.response?.data);
    // } else {
    //     console.error('Error:', error.message);
    // }
    // return Promise.reject(error);
}