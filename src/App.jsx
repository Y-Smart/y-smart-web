import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/authentification/login.component.jsx';
import Register from './components/authentification/register.component.jsx';
import { ToastContainer } from "react-toastify";
import LandingPage from "./components/landing/landingPage.component.jsx";
import NotFound from "./components/404/404.component.jsx";
import DeviceManager from "./components/devices/deviceManager.component.jsx";
import Header from './Header';
import ViewCommands from "./components/commands/viewCommands.component.jsx";
import tokenManagerService from "./services/tokenManager.service.js";
import Unauthorized from "./components/unauthorized/unauthorized.component.jsx";
tokenManagerService.setToken('Graa')
const AppContent = () => {
    const location = useLocation();
    const showHeader = (location.pathname === "/commands" || location.pathname === "/devices") && !!tokenManagerService.getToken();

    return (
        <div className="w-screen h-screen bg-layer-1 flex flex-col">
            {showHeader && <Header />}
            <ToastContainer />
            <div className="flex-1">
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/commands"
                           element={tokenManagerService.getToken() ? <ViewCommands /> : <Unauthorized />} />

                    <Route path="/devices"
                           element={tokenManagerService.getToken() ? <DeviceManager /> : <Unauthorized />} />

                    {/* Route pour la page 404 si aucune des routes précédentes ne correspond */}
                    <Route path={'*'} element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;
