import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/authentification/login.component.jsx';
import Register from './components/authentification/register.component.jsx';
import {ToastContainer} from "react-toastify";
import LandingPage from "./components/landing/landingPage.component.jsx";
import NotFound from "./components/404/404.component.jsx";
import ViewCommands from "./components/commands/viewCommands.component.jsx";
import DeviceManager from "./components/devices/deviceManager.component.jsx";
import Header from './Header';



const App = () => {
    return (
        <div className="w-screen h-screen bg-layer-1">
            <Header/>
            <Router>

                <ToastContainer/>
                <div className="h-full w-full">
                    <Routes>
                        {/* Route pour la page d'accueil */}
                        <Route exact path="/" element={<LandingPage/>}/>

                        {/* Route pour la page de connexion */}
                        <Route path="/login" element={<Login/>}/>

                        {/* Route pour la page d'inscription */}
                        <Route path="/register" element={<Register/>}/>

                        <Route path="/commands" element={<ViewCommands />}/>
                        <Route path="/devices" element={<DeviceManager />} />

                        {/* Route pour la page 404 si aucune des routes précédentes ne correspond */}
                        <Route path={'*'} element={<NotFound/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default App;
