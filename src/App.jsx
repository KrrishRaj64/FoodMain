import React, { useContext } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthContext } from './store/AuthContext.jsx';

function App() {
    const location = useLocation();
    const { user } = useContext(AuthContext);  // Get current user from AuthContext

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        {/* If the user is not authenticated, redirect to the login page */}
                        <Route path="/" element={user ? <Home /> : <Navigate to="/login" replace />} />
                        <Route path="/about" element={user ? <About /> : <Navigate to="/login" replace />} />
                        <Route path="/menu" element={user ? <Menu /> : <Navigate to="/login" replace />} />
                        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" replace />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}

export default App;
