import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/authentification/login.component.jsx';
import Register from './components/authentification/register.component.jsx';
import {ToastContainer} from "react-toastify";
import LandingPage from "./components/landing/landingPage.component.jsx";
import NotFound from "./components/404/404.component.jsx";
import DeviceManager from "./components/devices/deviceManager.component.jsx";
import ViewCommands from "./components/commands/viewCommands.component.jsx";
import tokenManagerService from "./services/tokenManager.service.js";
import Unauthorized from "./components/unauthorized/unauthorized.component.jsx";

const App = () => {
    return (
        <div className="w-screen h-screen bg-layer-1">
            <Router>
                <ToastContainer/>
                <div className="h-full w-full">
                    <Routes>
                        <Route exact path="/" element={<LandingPage/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>

                        <Route path="/commands" element={ tokenManagerService.getToken() ? <ViewCommands /> : <Unauthorized /> }/>

                        <Route path="/devices" element={tokenManagerService.getToken() ? <DeviceManager /> : <Unauthorized /> } />

                        {/* Route pour la page 404 si aucune des routes précédentes ne correspond */}
                        <Route path={'*'} element={<NotFound/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default App;
