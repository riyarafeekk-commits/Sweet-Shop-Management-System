import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold tracking-tight hover:text-blue-100 transition-colors">
                    Sweet Shop
                </Link>
                <div className="flex space-x-4">
                    <Link to="/" className="hover:text-blue-200 transition-colors font-medium">
                        Home
                    </Link>
                    <Link to="/login" className="hover:text-blue-200 transition-colors font-medium">
                        Login
                    </Link>
                    <Link to="/admin" className="hover:text-blue-200 transition-colors font-medium">
                        Admin
                    </Link>
                </div>
            </div>
        </nav>
    );
}
