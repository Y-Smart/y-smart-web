// Home.js
import React from 'react';

const LandingPage = () => {
    return (
        <div className=" min-h-screen flex justify-center items-center">
            <div className="w-full max-w-2xl h-80 bg-layer-2 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <h1 className="text-3xl font-semibold text-center title mb-6">Bienvenue sur votre gestion d'appareils domestiques</h1>
                <div className="mt-8 flex gap-8 items-center">
                    <a href="/login" className="btn btn-primary mx-2">Connexion</a>
                    <span>|</span>
                    <a href="/register" className="btn btn-primary mx-2">Inscription</a>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
