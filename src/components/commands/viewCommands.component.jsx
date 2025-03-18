import React, { useState, useEffect } from 'react';
import { commandsDataMocked } from "./mockCommands.service.js";
import { APICommandsManager } from "../../api/api.service.js";

const ITEMS_PER_PAGE = 5;

const ViewCommands = () => {
    const [commands, setCommands] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCommandsData = async () => {
            setLoading(true);
            try {
                const data = await APICommandsManager.getAllCommands();

                if (!data || data.length === 0) {
                    setCommands(commandsDataMocked);
                } else {
                    setCommands(data);
                }
            } catch (err) {
                console.error("Erreur lors de la récupération des commandes:", err);
                setError("Impossible de récupérer les commandes. Affichage des données mockées.");
                setCommands(commandsDataMocked);
            } finally {
                setLoading(false);
            }
        };

        fetchCommandsData();
    }, []);

    useEffect(() => {
        setTotalPages(Math.ceil(commands.length / ITEMS_PER_PAGE) || 1);
    }, [commands]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'success': return 'bg-green-500';
            case 'failed': return 'bg-red-500';
            case 'pending': return 'bg-yellow-500';
            default: return 'bg-gray-500';
        }
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const displayedCommands = commands.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className="p-6 bg-layer-2 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Historique des Commandes</h2>

            {loading ? (
                <p>Chargement des commandes...</p>
            ) : (
                <div className="w-full max-w-4xl bg-layer-3 p-6 rounded-lg shadow-lg">
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <table className="w-full border border-solid border-gray-300">
                        <thead>
                        <tr className="bg-layer-2">
                            <th className="p-3 text-left">Appareil</th>
                            <th className="p-3 text-left">Commande</th>
                            <th className="p-3 text-left">Statut</th>
                            <th className="p-3 text-left">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {displayedCommands.map((cmd, index) => (
                            <tr key={index} className="border-t">
                                <td className="p-3">{cmd.device}</td>
                                <td className="p-3">{cmd.command}</td>
                                <td className="p-3 flex justify-center">
                                    <div className={`${getStatusColor(cmd.status)} rounded-lg w-4 h-4`}></div>
                                </td>
                                <td className="p-3 text-gray-600">{cmd.createdAt}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <div className="flex justify-between mt-4">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
                        >
                            Précédent
                        </button>
                        <span className="self-center">Page {currentPage} / {totalPages}</span>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
                        >
                            Suivant
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewCommands;
