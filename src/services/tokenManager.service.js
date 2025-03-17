const TokenService = {
    setToken: (token) => localStorage.setItem("authToken", token),
    getToken: () => localStorage.getItem("authToken"),
    removeToken: () => localStorage.removeItem("authToken"),
};

export default TokenService;