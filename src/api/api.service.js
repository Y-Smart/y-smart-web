// ApiService.js
import HttpClient from "./HttpClient.service";
import NotificationService from "./../services/notifications.service.js";
import tokenManagerService from "../services/tokenManager.service.js";
import {mockDevices} from "../components/devices/mockDevices.service.js";

// API FOR DEVICES
const devicesUrl = '/devices';
export const APIDevicesManager = {
    // READ ALL
    getAllDevice: async () => {
        try {
            const response = await HttpClient.get(devicesUrl);
            return response.data;
        } catch (e) {
            NotificationService.getDeviceFailed();
             console.error(e);
            return mockDevices;
        }
    },

    // CREATE OBJECT
    createDevice: async (
        type = '',
        location = '',
    ) => {
        try {
            const response = await HttpClient.post(devicesUrl, {type, location});
            if (response.status === 201) {
                NotificationService.createSuccess();
            }
        } catch (error) {
            NotificationService.createFailed();
            throw error;
        }
    },

    // UPDATE OBJECT
    updateDevice: async (deviceId = '' ,
        type = '',
        location = ''
    ) => {
        try {
            const response = await HttpClient.patch(devicesUrl+'/'+deviceId, {type,location});
            if (response.status === 200) {
                NotificationService.updateSuccess();
            }
        } catch (error) {
            NotificationService.updateFailed();
            throw error;
        }
    },

    // DELETE OBJECT
    deleteDevice: async ( deviceId = '' ) => {
        try {
            const response = await HttpClient.delete(devicesUrl+'/'+deviceId);
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
    getAllCommands: async () => {
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
    logIn: async (
        email= '',
        password= '',
    ) => {
        try {
            const response = await HttpClient.post(authUrl+'/signin', {email, password});
            const token = response.data.accessToken;
            tokenManagerService.setToken(token);
        } catch (error) {
            NotificationService.authFailed();
            throw error;
        }
    },

    //REGISTER
    signUp: async (email, password) => {
        try {
            const response = await HttpClient.post(authUrl+'/signup', {email, password});
            const token = response.data.accessToken;
            tokenManagerService.setToken(token);
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