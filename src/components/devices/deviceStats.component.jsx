import React from 'react';

const DeviceStats = ({ devices }) => {
    const stats = devices.reduce((acc, device) => {
        acc[device.status] = (acc[device.status] || 0) + 1;
        return acc;
    }, { online: 0, offline: 0, error: 0 });

    return (
        <div className="bg-layer-3 p-4 rounded-lg shadow flex justify-around">
            <div className="text-center">
                <p className="text-lg font-semibold">Online</p>
                <p className="text-green-500 text-xl">{stats.online}</p>
            </div>
            <div className="text-center">
                <p className="text-lg font-semibold">Offline</p>
                <p className="text-gray-500 text-xl">{stats.offline}</p>
            </div>
            <div className="text-center">
                <p className="text-lg font-semibold">Error</p>
                <p className="text-red-500 text-xl">{stats.error}</p>
            </div>
        </div>
    );
};

export default DeviceStats;
