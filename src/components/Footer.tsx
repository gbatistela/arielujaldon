import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Music } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Music className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold">Ariel Ujaldón</span>
            </div>
            <p className="text-gray-300 mb-4">
              Director de coros, arreglador y compositor con una amplia trayectoria en la música coral e instrumental.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-500">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="mailto:info@arielujaldon.com" className="text-gray-300 hover:text-amber-500">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-amber-500">Inicio</Link>
              </li>
              <li>
                <Link to="/biography" className="text-gray-300 hover:text-amber-500">Biografía</Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-amber-500">Catálogo</Link>
              </li>
              <li>
                <Link to="/scores" className="text-gray-300 hover:text-amber-500">Partituras</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-amber-500">Contacto</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Email: info@arielujaldon.com</p>
              <p className="mb-2">Teléfono: +34 XXX XXX XXX</p>
              <p>España</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Ariel Ujaldón. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;