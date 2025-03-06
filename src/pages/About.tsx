import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sobre Ariel Ujaldón</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conozca más sobre mi trayectoria profesional, publicaciones y proyectos musicales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/biography" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="h-48 bg-amber-100 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Biografía" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">Biografía</h2>
              <p className="text-gray-600">
                Información detallada sobre mi trayectoria profesional y artística en el mundo de la música.
              </p>
            </div>
          </Link>
          
          <Link to="/books" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="h-48 bg-amber-100 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Libros" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">Libros</h2>
              <p className="text-gray-600">
                Publicaciones y obras escritas sobre dirección coral, arreglos y composición musical.
              </p>
            </div>
          </Link>
          
          <Link to="/albums" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="h-48 bg-amber-100 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Discos" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">Discos</h2>
              <p className="text-gray-600">
                Catálogo de producciones discográficas con información detallada de cada álbum.
              </p>
            </div>
          </Link>
          
          <Link to="/videos" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="h-48 bg-amber-100 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Vídeos" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">Vídeos</h2>
              <p className="text-gray-600">
                Galería de vídeos de presentaciones, entrevistas y ensayos disponibles para visualizar.
              </p>
            </div>
          </Link>
          
          <Link to="/vocal-groups" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="h-48 bg-amber-100 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Grupos Vocales" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">Grupos Vocales</h2>
              <p className="text-gray-600">
                Información sobre los grupos vocales en los que he trabajado a lo largo de mi carrera.
              </p>
            </div>
          </Link>
          
          <Link to="/choirs" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="h-48 bg-amber-100 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Coros" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">Coros</h2>
              <p className="text-gray-600">
                Detalles sobre los coros que he dirigido y con los que he colaborado en diferentes proyectos.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;