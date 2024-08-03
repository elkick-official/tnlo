import { appBaseUrlInstance } from "../utils/AxiosApi/AxiosApi";

const API_BASE = "api/Files"

export const fileUpload = async (formData: any, params: any) => {
    try {
        const response = await appBaseUrlInstance.post(`${API_BASE}?FolderId=${params?.FolderId}&TagData=${params?.TagData}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to create user:', error);
        throw error;
    }
};