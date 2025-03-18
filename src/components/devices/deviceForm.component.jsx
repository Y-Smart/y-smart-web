import React, { useState, useEffect } from 'react';

const DeviceForm = ({ selectedDevice, onSave, onCancel }) => {
    const [device, setDevice] = useState({ type: '', location: '', status: 'offline' });

    useEffect(() => {
        if (selectedDevice) {
            setDevice(selectedDevice);
        } else {
            setDevice({ type: '', location: '', status: 'offline' });
        }
    }, [selectedDevice]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDevice(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(device);
    };

    return (
        <div className="bg-layer-2 w-80 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-8">
                {selectedDevice ? "Modifier l'appareil" : 'Ajouter un nouvel appareil'}
            </h2>
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
                <div>
                    <label className="block text-sm font-medium">Statut</label>
                    <select
                        name="status"
                        value={device.status}
                        onChange={handleChange}
                        className="w-full p-2 border rounded bg-layer-3"
                    >
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                    </select>
                </div>
                <div className="flex justify-between">
                    <button type="submit" className="btn btn-primary">
                        {selectedDevice ? 'Mettre à jour' : 'Créer'}
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