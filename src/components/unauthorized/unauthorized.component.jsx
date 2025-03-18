import React from "react";

const Unauthorized = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-layer-1">
            <div className="w-full max-w-md bg-layer-3 p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-center title mb-6">Accès Interdit</h1>
                <p className="text-center text-lg dark-text">Veuillez vous identifier pour accéder à cette page.</p>
                <div className="mt-8 flex justify-center gap-8 items-center">
                    <a href="/login" className="btn btn-primary mx-2">Connexion</a>
                    <span>|</span>
                    <a href="/register" className="btn btn-primary mx-2">Inscription</a>
                </div>
            </div>
        </div>
    );
};

export default Unauthorized;