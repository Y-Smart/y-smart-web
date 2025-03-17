// ApiService.js
import HttpClient from "./HttpClient.service";
import NotificationService from "./../services/notifications.service.js";

// API FOR ADMIN IOT
// CREATE OBJECT
// READ ALL OBJECTS
// UPDATE OBJECT
// DELETE OBJECT
export const apiAdminIoT = {
    get: async (url, params = {}) => {
        try {
            const response = await HttpClient.get(url, { params });
            return response.data;
        } catch (error) {
            NotificationService.error(error.response?.data?.message || "Erreur API");
            throw error;
        }
    },
};