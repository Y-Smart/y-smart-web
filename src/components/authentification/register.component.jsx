import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIAuthManager } from "../../api/api.service.js";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    // Vérification du format de l'email
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(!validateEmail(value) && value !== '');
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(value.length > 0 && value.length < 6);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || emailError || passwordError) {
            setErrorMessage("Veuillez remplir tous les champs correctement.");
            return;
        }

        try {
            await APIAuthManager.signUp(email, password);
            navigate('/devices'); // Redirige après succès
        } catch (error) {
            setErrorMessage("Échec de l'inscription. Veuillez réessayer.");
            console.error("Erreur lors de l'inscription :", error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-image">
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
                            onChange={handlePasswordChange}
                            placeholder="Entrez votre mot de passe"
                            className={`w-full p-3 mt-1 bg-layer-3 border-2 rounded ${
                                passwordError ? 'border-red-500' : 'border-transparent'
                            }`}
                        />
                        {passwordError && (
                            <p className="text-red-500 text-sm mt-1">
                                Le mot de passe doit contenir au moins 6 caractères.
                            </p>
                        )}
                    </div>

                    {errorMessage && (
                        <p className="text-red-500 text-sm text-center">{errorMessage}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 btn btn-primary"
                        disabled={!email || !password || emailError || passwordError}
                    >
                        S'inscrire
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Vous avez déjà un compte ?{' '}
                    <a href="/login" className="text-blue-500 hover:text-blue-700">Connectez-vous ici</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
