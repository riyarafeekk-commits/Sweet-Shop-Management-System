import { MOCK_SWEETS } from './api/mockData'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">
          Sweet Shop Management System
        </h1>
        <p className="text-gray-600">Manage your inventory with ease</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">
        {MOCK_SWEETS.map((sweet) => (
          <div key={sweet.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src={sweet.image_url}
              alt={sweet.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-1" title={sweet.name}>
                  {sweet.name}
                </h2>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {sweet.category}
                </span>
              </div>

              <div className="flex justify-between items-end mt-4">
                <div>
                  <p className="text-sm text-gray-500">Stock</p>
                  <p className="font-medium text-gray-900">{sweet.quantity} units</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">${sweet.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
