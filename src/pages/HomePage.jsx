import { useState, useEffect } from 'react'
import { MOCK_SWEETS } from '../api/mockData'
import SweetCard from '../components/SweetCard'

export default function HomePage() {
    const [sweets, setSweets] = useState([])

    useEffect(() => {
        // Simulate API fetch
        setSweets(MOCK_SWEETS)
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-2">
                    Sweet Shop Management System
                </h1>
                <p className="text-gray-600">Manage your inventory with ease</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">
                {sweets.map((sweet) => (
                    <SweetCard key={sweet.id} sweet={sweet} />
                ))}
            </div>
        </div>
    )
}
