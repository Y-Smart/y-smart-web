import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && password) {
            history('/devices');  // TODO: Redirect to main view
        } else {
            setErrorMessage('Veuillez remplir tous les champs');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-image">
            <div className="w-full max-w-md bg-layer-2 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center title mb-6">Connexion</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Entrez votre email"
                            className="w-full p-3 mt-1 bg-layer-3"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Entrez votre mot de passe"
                            className="w-full p-3 mt-1 bg-layer-3"
                        />
                    </div>
                    {errorMessage && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 font-semibold btn btn-primary"
                    >
                        Se connecter
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Vous n'avez pas de compte ?{' '}
                    <a href="/register" className="text-blue-500 hover:text-blue-700">Inscrivez-vous ici</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
