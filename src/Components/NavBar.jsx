import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NavBar(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navLinks = [
        { label: 'Home', to: '/' },
        { label: 'Projects', to: '/projects' },
        { label: 'Coding Profiles', to: '/coding-profiles' },
        { label: 'Skills', to: '/skills' },
        { label: 'Socials', to: '/socials' },
        { label: 'Experience', to: '/experience' },
        { label: 'Resume', to: '/resume' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full text-white px-6 py-4 fixed top-0 z-50 backdrop-blur bg-transparent"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-400">Anshuman</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            className="text-gray-300 hover:text-blue-400 transition duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="md:hidden mt-4 space-y-4 px-4 py-4 bg-[#1e1e2f] rounded-xl shadow-lg border border-gray-700"
    >
        {navLinks.map((link) => (
            <Link
                key={link.label}
                to={link.to}
                className="block text-gray-200 hover:text-blue-400 transition duration-300"
                onClick={() => setMenuOpen(false)}
            >
                {link.label}
            </Link>
        ))}
    </motion.div>
)}
        </motion.nav>
    );
}
 