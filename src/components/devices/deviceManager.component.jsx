import React, { useState } from 'react';
import DeviceStats from './deviceStats.component.jsx';
import DeviceTable from './deviceTable.component.jsx';
import DeviceFormPanel from './deviceForm.component.jsx';
import {mockDevices} from "./mockDevices.service.js";

const DeviceManager = () => {
    const [devices, setDevices] = useState(mockDevices); // Liste des devices (devrait venir de l'API)
    const [selectedDevice, setSelectedDevice] = useState(null); // Appareil sélectionné pour modification
    const [isCreating, setIsCreating] = useState(false); // Mode création ou modification

    // Gestion de la suppression
    const handleDelete = (id) => {
        setDevices(devices.filter(device => device.id !== id));
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
        </div>
    );
};

export default DeviceManager;
