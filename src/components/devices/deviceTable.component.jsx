import React, { useState } from 'react';

const DeviceTable = ({ devices, onDelete, onSelect, onCreate }) => {
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;

    const filteredDevices = devices.filter(device =>
        filter ? device.status === filter : true
    );

    const paginatedDevices = filteredDevices.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    return (
        <div className="bg-layer-2 p-4 rounded-lg shadow">
            <div className="flex justify-between mb-4">
                <select
                    className="bg-layer-3 border rounded p-2"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="">Tous</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                    <option value="error">Error</option>
                </select>
                <button className="btn btn-accent" onClick={onCreate}>
                    +
                </button>
            </div>
            <table className="w-full text-left">
                <thead>
                <tr className="bg-layer-1 [&>*]:p-2">
                    <th >Type</th>
                    <th >Emplacement</th>
                    <th >Statut</th>
                    <th className="text-right">Actions</th>
                </tr>
                </thead>
                <tbody>
                {paginatedDevices.map((device) => (
                    <tr
                        key={device.id}
                        className="bg-layer-3 border-b cursor-pointer [&>*]:p-2"
                        onClick={() => onSelect(device)}
                    >
                        <td className="p-2">{device.type}</td>
                        <td className="p-2">{device.location}</td>
                        <td className="p-2 text-{device.status === 'online' ? 'green' : device.status === 'offline' ? 'gray' : 'red'}-500">
                            {device.status}
                        </td>
                        <td className="p-2 text-right">
                            <button
                                className="text-red-500 hover:text-red-700"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDelete(device.id);
                                }}
                            >
                                ✕
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="flex justify-between mt-4">
                <button
                    className="btn btn-primary"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    Précédent
                </button>
                <span>Page {page}</span>
                <button
                    className="btn btn-primary"
                    onClick={() => setPage(page + 1)}
                    disabled={page * itemsPerPage >= filteredDevices.length}
                >
                    Suivant
                </button>
            </div>
        </div>
    );
};

export default DeviceTable;