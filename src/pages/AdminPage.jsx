import { useState, useEffect } from 'react';
import { MOCK_SWEETS } from '../api/mockData';

export default function AdminPage() {
    const [sweets, setSweets] = useState([]);

    useEffect(() => {
        // In a real app, you'd fetch from API here
        setSweets(MOCK_SWEETS);
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            setSweets(prev => prev.filter(sweet => sweet.id !== id));
        }
    };

    const handleEdit = (id) => {
        alert(`Edit functionality for ID ${id} coming soon!`);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-12 px-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl shadow-lg shadow-blue-500/30 transition-all">
                        + Add New Sweet
                    </button>
                </div>

                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="p-4 font-bold text-gray-600 text-sm uppercase tracking-wider">ID</th>
                                    <th className="p-4 font-bold text-gray-600 text-sm uppercase tracking-wider">Product</th>
                                    <th className="p-4 font-bold text-gray-600 text-sm uppercase tracking-wider">Category</th>
                                    <th className="p-4 font-bold text-gray-600 text-sm uppercase tracking-wider">Price</th>
                                    <th className="p-4 font-bold text-gray-600 text-sm uppercase tracking-wider text-center">Stock</th>
                                    <th className="p-4 font-bold text-gray-600 text-sm uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {sweets.map((sweet) => (
                                    <tr key={sweet.id} className="hover:bg-gray-50/80 transition-colors group">
                                        <td className="p-4 text-gray-500 font-mono text-sm">#{sweet.id}</td>
                                        <td className="p-4">
                                            <div className="flex items-center space-x-3">
                                                <img
                                                    src={sweet.image_url}
                                                    alt={sweet.name}
                                                    className="w-10 h-10 rounded-lg object-cover shadow-sm border border-gray-200"
                                                />
                                                <span className="font-bold text-gray-800">{sweet.name}</span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold 
                                                ${sweet.category === 'Chocolate' ? 'bg-amber-100 text-amber-800' :
                                                    sweet.category === 'Candy' ? 'bg-pink-100 text-pink-800' :
                                                        'bg-blue-100 text-blue-800'}`}>
                                                {sweet.category}
                                            </span>
                                        </td>
                                        <td className="p-4 font-medium text-gray-700">${sweet.price.toFixed(2)}</td>
                                        <td className="p-4 text-center">
                                            <span className={`font-bold ${sweet.quantity < 20 ? 'text-red-500' : 'text-green-600'}`}>
                                                {sweet.quantity}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right space-x-2">
                                            <button
                                                onClick={() => handleEdit(sweet.id)}
                                                className="text-blue-600 hover:text-blue-800 font-medium px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(sweet.id)}
                                                className="text-red-500 hover:text-red-700 font-medium px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {sweets.length === 0 && (
                        <div className="p-8 text-center text-gray-500">
                            No sweets found in inventory.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
