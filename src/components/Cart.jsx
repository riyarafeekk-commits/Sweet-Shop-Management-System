import { useShop } from '../context/ShopContext';

export default function Cart({ isOpen, onClose }) {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useShop();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />

            <div className="fixed inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-md bg-white/90 backdrop-blur-xl shadow-xl flex flex-col h-full border-l border-white/50">
                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                            <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Close panel</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="mt-8">
                            {cartItems.length === 0 ? (
                                <p className="text-center text-gray-500 my-10">Your cart is empty.</p>
                            ) : (
                                <ul className="divide-y divide-gray-200">
                                    {cartItems.map((item) => (
                                        <li key={item.id} className="py-6 flex">
                                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                                <img src={item.image_url} alt={item.name} className="w-full h-full object-center object-cover" />
                                            </div>

                                            <div className="ml-4 flex-1 flex flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>{item.name}</h3>
                                                        <p className="ml-4">${(item.price * item.cartQuantity).toFixed(2)}</p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                                                </div>
                                                <div className="flex-1 flex items-end justify-between text-sm">
                                                    <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-2 py-1">
                                                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-blue-600 font-bold">-</button>
                                                        <span className="font-medium">{item.cartQuantity}</span>
                                                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-blue-600 font-bold">+</button>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>${cartTotal.toFixed(2)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                            <a
                                href="#"
                                className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                            >
                                Checkout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
