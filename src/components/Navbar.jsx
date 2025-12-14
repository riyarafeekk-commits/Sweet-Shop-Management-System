import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

export default function Navbar({ onCartClick }) {
  const { cartCount } = useShop();

  return (
    <div className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4">
      <nav className="bg-white/30 backdrop-blur-md border border-white/20 shadow-xl rounded-full px-8 py-3 flex justify-between items-center w-full max-w-4xl">
        <Link to="/" className="text-xl font-bold tracking-tight text-blue-900 hover:text-blue-700 transition-colors">
          Sweet Shop
        </Link>

        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
            Home
          </Link>
          <Link to="/login" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
            Login
          </Link>

          <button
            onClick={onCartClick}
            className="flex items-center space-x-1 bg-blue-600/90 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="bg-white text-blue-600 text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}
