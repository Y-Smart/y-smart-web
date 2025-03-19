// HttpClient.js
import axios from "axios";
import TokenService from "./../services/tokenManager.service";

const HttpClient = axios.create({
    baseURL: "http://localhost:3000/api/",
    headers: { "Content-Type": "application/json" },
});

HttpClient.interceptors.request.use((config) => {
    const token = TokenService.getToken();
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

export default HttpClient;