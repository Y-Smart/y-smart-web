// ApiService.js
import HttpClient from "./HttpClient.service";
import NotificationService from "./../services/notifications.service.js";
import tokenManagerService from "../services/tokenManager.service.js";

// API FOR DEVICES
const devicesUrl = '/devices';
export const APIDevicesManager = {
    // READ ALL
    getAllDevice: async () => {
        try {
            const response = await HttpClient.get(devicesUrl);
            return response.data;
        } catch (error) {
            NotificationService.getDeviceFailed();
            throw error;
        }
    },

    // CREATE OBJECT
    createDevice: async (params = {
        type : '',
        location : '',
        state : null
    }) => {
        try {
            const response = await HttpClient.post(devicesUrl, {params});
            if (response.status === 200) {
                NotificationService.createSuccess();
            }
            return response.data;
        } catch (error) {
            NotificationService.createFailed();
            throw error;
        }
    },

    // UPDATE OBJECT
    updateDevice: async (deviceId = '' ,params = {
        type : '',
        location : '',
        state : null
    }) => {
        try {
            const response = await HttpClient.patch(devicesUrl+'/'+deviceId, {params});
            if (response.status === 200) {
                NotificationService.updateSuccess();
            }
            return response.data;
        } catch (error) {
            NotificationService.updateFailed();
            throw error;
        }
    },

    // DELETE OBJECT
    deleteDevice: async ( deviceId = '' ) => {
        try {
            const response = await HttpClient.post(devicesUrl+'/'+deviceId);
            if (response.status === 200) {
                NotificationService.deleteSuccess();
            }
            return response.data;
        } catch (error) {
            NotificationService.deleteFailed();
            throw error;
        }
    },

};

// API FOR COMMANDS
const commandsUrl = '/commands';
export const APICommandsManager = {
    // READ ALL
    getAllCommands: async (params = {}) => {
        try {
            const response = await HttpClient.get(commandsUrl);
            return response.data;
        } catch (error) {
            NotificationService.getCommandsFailed();
            throw error;
        }
    },
};

// API FOR AUTH
const authUrl = '/auth';
export const APIAuthManager = {
    // LOGIN
    logIn: async (params = {
        email: '',
        password: '',
    }) => {
        try {
            const response = await HttpClient.post(authUrl+'/signin', {params});

            tokenManagerService.setToken('Graou no token');
            return response.data;
        } catch (error) {
            NotificationService.authFailed();
            throw error;
        }
    },

    //REGISTER
    signUp: async (params = {
        email: '',
        password: '',
    }) => {
        try {
            const response = await HttpClient.post(authUrl+'/signup', {params});

            tokenManagerService.setToken('Graou no token');
            return response.data;
        } catch (error) {
            NotificationService.authFailed();
            throw error;
        }
    },
    
    // LOG OUT
    logOut:() => {
        tokenManagerService.removeToken();
        NotificationService.logOut();
    }
    
}