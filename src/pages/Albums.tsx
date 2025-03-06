import React from 'react';
import { Play, ExternalLink, Music } from 'lucide-react';

const Albums: React.FC = () => {
  const albums = [
    {
      id: 1,
      title: "Voces del Alma",
      year: 2019,
      description: "Una colección de arreglos corales de música tradicional española interpretados por el Coro de Cámara Vox Aurea bajo la dirección de Ariel Ujaldón. El álbum explora la rica tradición musical española con arreglos contemporáneos que respetan la esencia de las melodías originales.",
      cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ensemble: "Coro de Cámara Vox Aurea",
      tracks: 14,
      duration: "58 minutos",
      links: {
        spotify: "#",
        apple: "#",
        youtube: "#"
      }
    },
    {
      id: 2,
      title: "Resonancias",
      year: 2021,
      description: "Un álbum que presenta composiciones originales de Ariel Ujaldón para coro y pequeño conjunto instrumental. Las obras exploran diferentes texturas sonoras y combinan elementos de la música clásica con influencias contemporáneas y de música popular.",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ensemble: "Ensemble Vocal Harmonía & Músicos Invitados",
      tracks: 10,
      duration: "47 minutos",
      links: {
        spotify: "#",
        apple: "#",
        youtube: "#"
      }
    },
    {
      id: 3,
      title: "Cantos de Navidad",
      year: 2022,
      description: "Una selección de villancicos tradicionales y contemporáneos arreglados por Ariel Ujaldón. El álbum presenta una variedad de estilos y texturas, desde arreglos a cappella hasta obras con acompañamiento instrumental, creando un recorrido musical por las tradiciones navideñas de diferentes culturas.",
      cover: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ensemble: "Coro Polifónico Ciudad de Madrid",
      tracks: 16,
      duration: "62 minutos",
      links: {
        spotify: "#",
        apple: "#",
        youtube: "#"
      }
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Discos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Producciones discográficas con arreglos y composiciones originales.
          </p>
        </div>
        
        <div className="space-y-12">
          {albums.map((album) => (
            <div key={album.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <img 
                    src={album.cover} 
                    alt={album.title} 
                    className="h-full w-full object-cover md:h-full md:w-full"
                  />
                </div>
                <div className="p-6 md:p-8 md:w-2/3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">{album.title}</h2>
                      <p className="text-gray-500 mb-4">{album.year} • {album.tracks} pistas • {album.duration}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition duration-300">
                        <Play className="h-5 w-5" />
                      </button>
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition duration-300">
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{album.description}</p>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="mb-4">
                      <p className="text-sm text-gray-500">Intérpretes</p>
                      <p className="font-medium">{album.ensemble}</p>
                    </div>
                    
                    <div className="flex space-x-4">
                      <a href={album.links.spotify} className="text-gray-700 hover:text-amber-600 transition duration-300">
                        <span className="flex items-center">
                          <Music className="h-5 w-5 mr-1" />
                          Spotify
                        </span>
                      </a>
                      <a href={album.links.apple} className="text-gray-700 hover:text-amber-600 transition duration-300">
                        <span className="flex items-center">
                          <Music className="h-5 w-5 mr-1" />
                          Apple Music
                        </span>
                      </a>
                      <a href={album.links.youtube} className="text-gray-700 hover:text-amber-600 transition duration-300">
                        <span className="flex items-center">
                          <Music className="h-5 w-5 mr-1" />
                          YouTube Music
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-amber-50 rounded-lg p-6 md:p-8 shadow-md">
          <div className="flex items-start md:items-center">
            <Music className="h-12 w-12 text-amber-500 flex-shrink-0" />
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Escucha mi música en plataformas digitales</h3>
              <p className="text-gray-600">
                Todos los álbumes están disponibles en las principales plataformas de streaming musical. También puedes adquirir copias físicas contactando directamente conmigo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albums;