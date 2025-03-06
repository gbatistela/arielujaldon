import React from 'react';
import { Play, Calendar, User } from 'lucide-react';

const Videos: React.FC = () => {
  const videos = [
    {
      id: 1,
      title: "Concierto de Primavera 2023",
      description: "Actuación del Coro de Cámara Vox Aurea interpretando obras de compositores españoles contemporáneos bajo la dirección de Ariel Ujaldón.",
      thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "15 de mayo de 2023",
      location: "Auditorio Nacional, Madrid",
      duration: "1h 24min",
      category: "Concierto"
    },
    {
      id: 2,
      title: "Masterclass de Dirección Coral",
      description: "Sesión formativa sobre técnicas avanzadas de dirección coral impartida por Ariel Ujaldón en el Conservatorio Superior de Música.",
      thumbnail: "https://images.unsplash.com/photo-1588479839125-3a70c3a7ecce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "8 de octubre de 2022",
      location: "Conservatorio Superior de Música, Barcelona",
      duration: "2h 10min",
      category: "Formación"
    },
    {
      id: 3,
      title: "Entrevista: El proceso creativo en el arreglo coral",
      description: "Conversación con Ariel Ujaldón sobre su enfoque y metodología en la creación de arreglos corales, con ejemplos prácticos y demostraciones.",
      thumbnail: "https://images.unsplash.com/photo-1569930784237-ea65a2129a7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "22 de marzo de 2023",
      location: "Canal Cultural Online",
      duration: "45min",
      category: "Entrevista"
    },
    {
      id: 4,
      title: "Festival Internacional de Música Coral",
      description: "Participación del Ensemble Vocal Harmonía dirigido por Ariel Ujaldón en el prestigioso Festival Internacional de Música Coral.",
      thumbnail: "https://images.unsplash.com/photo-1507901747481-84a4f64ffd7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "5 de julio de 2022",
      location: "Teatro Principal, Valencia",
      duration: "1h 15min",
      category: "Concierto"
    },
    {
      id: 5,
      title: "Ensayo abierto: Preparación de obra contemporánea",
      description: "Sesión de ensayo donde Ariel Ujaldón trabaja con el Coro Polifónico Ciudad de Madrid en la preparación de una obra contemporánea de estreno.",
      thumbnail: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "18 de enero de 2023",
      location: "Centro Cultural, Madrid",
      duration: "1h 30min",
      category: "Ensayo"
    },
    {
      id: 6,
      title: "Conferencia: Evolución de la música coral en el siglo XXI",
      description: "Ponencia de Ariel Ujaldón sobre las tendencias actuales en la composición y arreglo coral, con análisis de obras representativas.",
      thumbnail: "https://images.unsplash.com/photo-1560523159-6b681a1e1852?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "12 de noviembre de 2022",
      location: "Universidad de Música, Sevilla",
      duration: "1h 05min",
      category: "Conferencia"
    }
  ];

  const categories = ["Todos", "Concierto", "Formación", "Entrevista", "Ensayo", "Conferencia"];
  const [activeCategory, setActiveCategory] = React.useState("Todos");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredVideos = videos.filter(video => {
    const matchesCategory = activeCategory === "Todos" || video.category === activeCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          video.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Vídeos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Galería de vídeos de conciertos, entrevistas, masterclasses y ensayos.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex overflow-x-auto pb-2 md:pb-0 space-x-2">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeCategory === category 
                      ? 'bg-amber-500 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar vídeos..."
                className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full transition duration-300">
                    <Play className="h-6 w-6" />
                  </button>
                </div>
                <div className="absolute bottom-0 right-0 bg-amber-500 text-white px-2 py-1 text-xs font-medium">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-700">
                    {video.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {video.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>
                
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{video.date}</span>
                  <User className="h-4 w-4 mr-1" />
                  <span>{video.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron vídeos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;