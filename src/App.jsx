import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import { ShopProvider } from './context/ShopContext';
import Cart from './components/Cart';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <ShopProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 font-sans relative">
          <Navbar onCartClick={() => setIsCartOpen(true)} />
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ShopProvider>
  )
}
