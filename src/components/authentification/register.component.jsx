import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false); // Gère l'erreur d'email

    const navigate = useNavigate();

    // Vérification du format de l'email
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(!validateEmail(value) && value !== '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!emailError && email && password) {
            setTimeout(() => {
                navigate('/login');
            }, 1500);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md bg-layer-2 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center title mb-6">Inscription</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Entrez votre email"
                            className={`w-full p-3 mt-1 bg-layer-3 border-2 rounded ${
                                emailError ? 'border-red-500' : 'border-transparent'
                            }`}
                        />
                        {emailError && (
                            <p className="text-red-500 text-sm mt-1">Veuillez entrer un email valide.</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Entrez votre mot de passe"
                            className="w-full p-3 mt-1 bg-layer-3 border-2 border-transparent rounded"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 btn btn-primary"
                        disabled={!email || !password || emailError}
                    >
                        S'inscrire
                    </button>
                </form>

                {/* Lien de connexion */}
                <p className="mt-4 text-center text-sm text-gray-600">
                    Vous avez déjà un compte ?{' '}
                    <a href="/login" className="text-blue-500 hover:text-blue-700">Connectez-vous ici</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
