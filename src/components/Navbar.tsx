import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music, BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-amber-500' : 'text-gray-700 hover:text-amber-500';
  };

  const aboutDropdownItems = [
    { path: '/biography', label: 'Biografía' },
    { path: '/books', label: 'Libros' },
    { path: '/albums', label: 'Discos' },
    { path: '/videos', label: 'Vídeos' },
    { path: '/vocal-groups', label: 'Grupos Vocales' },
    { path: '/choirs', label: 'Coros' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
              <Music className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">Ariel Ujaldón</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/')}`}>
              Inicio
            </Link>
            
            <div className="relative group">
              <button className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname.includes('/about') || aboutDropdownItems.some(item => location.pathname === item.path) ? 'text-amber-500' : 'text-gray-700 hover:text-amber-500'}`}>
                Sobre mí
              </button>
              <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-150 ease-in-out">
                <div className="py-1">
                  {aboutDropdownItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-2 text-sm ${isActive(item.path)}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link to="/catalog" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/catalog')}`}>
              Catálogo
            </Link>
            
            <Link to="/scores" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/scores')}`}>
              Partituras
            </Link>
            
            <Link to="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/contact')}`}>
              Contacto
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/')}`}
            onClick={closeMenu}
          >
            Inicio
          </Link>
          
          <div className="space-y-1 pl-4 border-l-2 border-gray-200">
            <p className="px-3 py-2 text-base font-medium text-gray-700">Sobre mí</p>
            {aboutDropdownItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive(item.path)}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <Link
            to="/catalog"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/catalog')}`}
            onClick={closeMenu}
          >
            Catálogo
          </Link>
          
          <Link
            to="/scores"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/scores')}`}
            onClick={closeMenu}
          >
            Partituras
          </Link>
          
          <Link
            to="/contact"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact')}`}
            onClick={closeMenu}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;