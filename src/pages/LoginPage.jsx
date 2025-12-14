import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

export default function LoginPage() {
    const { login, validateCredentials } = useShop();
    const navigate = useNavigate();
    const [view, setView] = useState('SELECTION'); // 'SELECTION', 'LOGIN', 'REGISTER'

    // Login State
    const [credentials, setCredentials] = useState({ id: '', password: '' });
    const [error, setError] = useState('');

    // Register State
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        photo: ''
    });

    const handleLoginChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        setError('');
    };

    const handleRegisterChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const user = validateCredentials(credentials.id, credentials.password);

        if (user) {
            login(user);
            if (user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/');
            }
        } else {
            setError('Invalid ID or Password');
        }
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone) {
            alert("Please fill in at least Name and Phone");
            return;
        }
        // Create new customer user
        const newUser = { ...formData, role: 'customer', id: Date.now().toString() };
        login(newUser);
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4 pt-24">
            <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-lg border border-white/60 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-400"></div>

                {view === 'SELECTION' && (
                    <div className="text-center space-y-8 animate-fade-in">
                        <h1 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700">
                            Welcome
                        </h1>
                        <p className="text-gray-500">Please choose how you want to continue</p>

                        <div className="space-y-4">
                            <button
                                onClick={() => setView('LOGIN')}
                                className="w-full bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 rounded-xl shadow-md border border-gray-100 transition-all flex items-center justify-center space-x-3 group"
                            >
                                <svg className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                <span>Existing User Login</span>
                            </button>

                            <button
                                onClick={() => setView('REGISTER')}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1 active:scale-95"
                            >
                                New Customer / Create Profile
                            </button>
                        </div>
                    </div>
                )}

                {view === 'LOGIN' && (
                    <form onSubmit={handleLoginSubmit} className="space-y-6 animate-fade-in">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-2xl font-bold text-gray-800">Login</h1>
                            <button type="button" onClick={() => setView('SELECTION')} className="text-gray-400 hover:text-gray-600">
                                Back
                            </button>
                        </div>

                        {error && (
                            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium border border-red-100 text-center">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-1">User ID</label>
                            <input
                                className="w-full px-4 py-3 rounded-xl border-none bg-white/70 shadow-inner focus:ring-2 focus:ring-blue-400 transition-all outline-none"
                                name="id"
                                type="text"
                                placeholder="Enter User ID"
                                value={credentials.id}
                                onChange={handleLoginChange}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-1">Password</label>
                            <input
                                className="w-full px-4 py-3 rounded-xl border-none bg-white/70 shadow-inner focus:ring-2 focus:ring-blue-400 transition-all outline-none"
                                name="password"
                                type="password"
                                placeholder="Enter Password"
                                value={credentials.password}
                                onChange={handleLoginChange}
                            />
                        </div>

                        <button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
                            type="submit"
                        >
                            Login
                        </button>

                        <div className="text-center mt-4">
                            <span className="text-gray-400 text-xs">Try: admin/admin or user/test</span>
                        </div>
                    </form>
                )}

                {view === 'REGISTER' && (
                    <form className="space-y-5 animate-fade-in" onSubmit={handleRegisterSubmit}>
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700">
                                Create Profile
                            </h1>
                            <button type="button" onClick={() => setView('SELECTION')} className="text-gray-400 hover:text-gray-600">
                                Back
                            </button>
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-1" htmlFor="name">Full Name</label>
                            <input
                                className="w-full px-4 py-3 rounded-xl border-none bg-white/70 shadow-inner focus:ring-2 focus:ring-blue-400 transition-all outline-none"
                                id="name" type="text" placeholder="John Doe"
                                value={formData.name} onChange={handleRegisterChange}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-1" htmlFor="photo">Photo URL (Optional)</label>
                            <input
                                className="w-full px-4 py-3 rounded-xl border-none bg-white/70 shadow-inner focus:ring-2 focus:ring-blue-400 transition-all outline-none"
                                id="photo" type="text" placeholder="https://example.com/photo.jpg"
                                value={formData.photo} onChange={handleRegisterChange}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-1" htmlFor="phone">Phone Number</label>
                                <input
                                    className="w-full px-4 py-3 rounded-xl border-none bg-white/70 shadow-inner focus:ring-2 focus:ring-blue-400 transition-all outline-none"
                                    id="phone" type="tel" placeholder="+1 234..."
                                    value={formData.phone} onChange={handleRegisterChange}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-1" htmlFor="address">Address</label>
                                <input
                                    className="w-full px-4 py-3 rounded-xl border-none bg-white/70 shadow-inner focus:ring-2 focus:ring-blue-400 transition-all outline-none"
                                    id="address" type="text" placeholder="City, Zip"
                                    value={formData.address} onChange={handleRegisterChange}
                                />
                            </div>
                        </div>

                        <button
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1 active:scale-95 mt-4"
                            type="submit"
                        >
                            Save Profile & Login
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}
