import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Coding Profiles', to: '/profiles' },
    { label: 'Skills', to: '/skills' },
    { label: 'Socials', to: '/socials' },
    { label: 'Experience', to: '/experience' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="w-full text-white px-6 py-4 fixed top-0 z-50 backdrop-blur bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-400">Ansh</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-gray-300 hover:text-blue-400 hover:drop-shadow-[0_0_6px_#3b82f6] transition duration-300 ${
                location.pathname === link.to ? 'text-blue-400 underline font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4 py-4 bg-[#1e1e2f] rounded-xl shadow-lg border border-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`block text-gray-200 hover:text-blue-400 hover:drop-shadow-[0_0_6px_#3b82f6] transition duration-300 ${
                location.pathname === link.to ? 'text-blue-400 underline font-semibold' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
