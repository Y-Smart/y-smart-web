import React, { useState, useEffect } from 'react';
import { APIDevicesManager } from '../../api/api.service.js';

const DeviceForm = ({ selectedDevice, onSave, onCancel }) => {
    const [device, setDevice] = useState({ type: '', location: '', status: 'offline' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (selectedDevice) {
            setDevice(selectedDevice);
        } else {
            setDevice({ type: '', location: '', status: 'offline' });
        }
        setError(''); // Réinitialiser l'erreur quand un nouvel appareil est sélectionné ou ajouté
    }, [selectedDevice]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDevice(prev => ({ ...prev, [name]: value }));
        setError(''); // Efface l'erreur dès qu'une modification est faite
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            if (selectedDevice) {
                await APIDevicesManager.updateDevice(selectedDevice['_id'], device.type, device.location);
            } else {
                await APIDevicesManager.createDevice(device.type, device.location);
            }
            onSave();
        } catch (err) {
            console.error('Erreur lors de la sauvegarde de l\'appareil :', err);
            setError('Une erreur est survenue. Veuillez réessayer.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-layer-2 w-80 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-8">
                {selectedDevice ? "Modifier l'appareil" : 'Ajouter un nouvel appareil'}
            </h2>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-medium">Type</label>
                    <input
                        type="text"
                        name="type"
                        value={device.type}
                        onChange={handleChange}
                        className="w-full p-2 border rounded bg-layer-3"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Emplacement</label>
                    <input
                        type="text"
                        name="location"
                        value={device.location}
                        onChange={handleChange}
                        className="w-full p-2 border rounded bg-layer-3"
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        {loading ? 'Chargement...' : selectedDevice ? 'Mettre à jour' : 'Créer'}
                    </button>
                    <button type="button" onClick={onCancel} className="btn btn-secondary">
                        Annuler
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DeviceForm;
