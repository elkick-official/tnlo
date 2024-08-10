import { appBaseUrlInstance } from "../utils/AxiosApi/AxiosApi";


// Define API endpoints
const API_BASE = '/api/Folders';

// export const getUserById = async (userId: string) => {
//     try {
//         const response = await appBaseUrlInstance.get(`${API_BASE}/${userId}`);
//         return response.data;
//     } catch (error) {
//         console.error('Failed to get user:', error);
//         throw error;
//     }
// };

// export const createUser = async (userData: { name: string; email: string }) => {
//     try {
//         const response = await appBaseUrlInstance.post(API_BASE, userData);
//         return response.data;
//     } catch (error) {
//         console.error('Failed to create user:', error);
//         throw error;
//     }
// };




export const createNewFolder = async (payload: any) => {
    try {
        const response = await appBaseUrlInstance.post(API_BASE, payload);
        return response;
    } catch (error) {
        console.error('Failed to create user:', error);
        throw error;
    }
};


export const getAllFolders = async () => {
    try {
        const response = await appBaseUrlInstance.get(`${API_BASE}`);
        return response?.data;
    } catch (error) {
        console.error('Failed to get folders:', error);
        throw error;
    }
};


export const getAllFoldersNFiles = async (id: string | number) => {
    try {
        const response = await appBaseUrlInstance.get(`${API_BASE}/${id}`);
        return response?.data;
    } catch (error) {
        console.error('Failed to get folders:', error);
        throw error;
    }
};

export const initialGetAllFolders = async () => {
    try {
        const response = await appBaseUrlInstance.get(`${API_BASE}`);
        return response;
    } catch (error) {
        console.error('Failed to get folders:', error);
        throw error;
    }
};


export const deleteFile = async (type: string, id: number) => {
    try {
        const response = await appBaseUrlInstance.delete(`api/${type}/${id}`);
        return response?.data;
    } catch (error) {
        console.error('Failed to get folders:', error);
        throw error;
    }
};