import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

export default function LoginPage() {
    const { login } = useShop();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        photo: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone) {
            alert("Please fill in at least Name and Phone");
            return;
        }

        // Simulate login by saving user data
        login(formData);
        navigate('/'); // Redirect to home (or back to checkout if we could track origin)
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4 pt-24">
            <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-lg border border-white/60 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-400"></div>

                <h1 className="text-3xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 mb-2">
                    Create Profile
                </h1>
                <p className="text-center text-gray-500 mb-8">Join the Sweet Shop to order</p>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-1" htmlFor="name">Full Name</label>
                        <input
                            className="w-full px-4 py-3 rounded-xl border-none bg-white/70 shadow-inner focus:ring-2 focus:ring-blue-400 transition-all outline-none"
                            id="name" type="text" placeholder="John Doe"
                            value={formData.name} onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-1" htmlFor="photo">Photo URL (Optional)</label>
                        <input
                            className="w-full px-4 py-3 rounded-xl border-none bg-white/70 shadow-inner focus:ring-2 focus:ring-blue-400 transition-all outline-none"
                            id="photo" type="text" placeholder="https://example.com/photo.jpg"
                            value={formData.photo} onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-1" htmlFor="phone">Phone Number</label>
                            <input
                                className="w-full px-4 py-3 rounded-xl border-none bg-white/70 shadow-inner focus:ring-2 focus:ring-blue-400 transition-all outline-none"
                                id="phone" type="tel" placeholder="+1 234 567 890"
                                value={formData.phone} onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-1" htmlFor="address">Address</label>
                            <input
                                className="w-full px-4 py-3 rounded-xl border-none bg-white/70 shadow-inner focus:ring-2 focus:ring-400 transition-all outline-none"
                                id="address" type="text" placeholder="City, Zip"
                                value={formData.address} onChange={handleChange}
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
            </div>
        </div>
    )
}
