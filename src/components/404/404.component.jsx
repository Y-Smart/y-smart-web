// NotFound.js
import React from 'react';

const NotFound = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-image">
            <div className="w-full max-w-md bg-layer-3 p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">Page non trouvée</h1>
                <p className="text-center text-lg text-gray-700">Désolé, la page que vous recherchez n'existe pas.</p>
            </div>
        </div>
    );
};

export default NotFound;
