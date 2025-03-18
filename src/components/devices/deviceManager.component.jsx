import React, { useState, useEffect } from 'react';
import DeviceStats from './deviceStats.component.jsx';
import DeviceTable from './deviceTable.component.jsx';
import DeviceFormPanel from './deviceForm.component.jsx';
import { APIDevicesManager } from "../../api/api.service.js";

const DeviceManager = () => {
    const [devices, setDevices] = useState([]); // Initialisation à un tableau vide
    const [selectedDevice, setSelectedDevice] = useState(null); // Appareil sélectionné pour modification
    const [isCreating, setIsCreating] = useState(false); // Mode création ou modification
    const [loading, setLoading] = useState(true); // Gestion du chargement
    const [error, setError] = useState(null); // Gestion des erreurs

    // Récupérer la liste des appareils au montage
    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const response = await APIDevicesManager.getAllDevice();
                setDevices(response); // Met à jour l'état avec les données récupérées
            } catch (err) {
                setError("Impossible de récupérer les appareils.");
                console.error("Erreur lors de la récupération des appareils:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDevices();
    }, []);

    // Gestion de la suppression
    const handleDelete = async (id) => {
        try {
            await APIDevicesManager.deleteDevice(id);
            setDevices(devices.filter(device => device.id !== id));
        } catch (error) {
            console.error('Erreur à la suppression du matériel', error);
        }
    };

    // Sélectionner un appareil pour l'édition
    const handleSelect = (device) => {
        setSelectedDevice(device);
        setIsCreating(false);
    };

    // Passer en mode création
    const handleCreate = () => {
        setSelectedDevice(null);
        setIsCreating(true);
    };

    return (
        <div className="flex p-6 gap-8">
            {loading ? (
                <p>Chargement des appareils...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <>
                    <div className="flex-1 flex flex-col gap-8">
                        <DeviceStats devices={devices} />
                        <DeviceTable
                            devices={devices}
                            onDelete={handleDelete}
                            onSelect={handleSelect}
                            onCreate={handleCreate}
                        />
                    </div>
                    <DeviceFormPanel
                        selectedDevice={selectedDevice}
                        isCreating={isCreating}
                        setDevices={setDevices}
                        devices={devices}
                    />
                </>
            )}
        </div>
    );
};

export default DeviceManager;
