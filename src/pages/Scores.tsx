import React, { useState } from 'react';
import { Download, ShoppingCart, Eye, Music, Play, ExternalLink } from 'lucide-react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Scores: React.FC = () => {
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'preview' | 'listen' | 'video'>('preview');

  const scores = [
    {
      id: 1,
      title: "Ave Maria",
      composer: "Original",
      arranger: "Ariel Ujaldón",
      year: 2020,
      description: "Composición original para coro mixto a 4 voces (SATB). Una obra de carácter contemplativo con armonías modernas que mantiene la esencia de la tradición.",
      difficulty: "Media",
      duration: "3:45",
      voices: "SATB",
      language: "Latín",
      price: 8.50,
      sample: "https://www.africau.edu/images/default/sample.pdf", // Example PDF URL
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Example audio URL
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video URL
      tags: ["Sacra", "A cappella", "Contemporánea"]
    },
    {
      id: 2,
      title: "El Cant dels Ocells",
      composer: "Popular Catalana",
      arranger: "Ariel Ujaldón",
      year: 2019,
      description: "Arreglo para coro mixto y piano de esta hermosa canción tradicional catalana. El arreglo explora diferentes texturas corales manteniendo la emotividad de la melodía original.",
      difficulty: "Media-Alta",
      duration: "4:30",
      voices: "SATB con divisi ocasionales",
      language: "Catalán",
      price: 7.50,
      sample: "https://www.africau.edu/images/default/sample.pdf", // Example PDF URL
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", // Example audio URL
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video URL
      tags: ["Tradicional", "Con acompañamiento", "Arreglo"]
    },
    {
      id: 3,
      title: "Salve Regina",
      composer: "Original",
      arranger: "Ariel Ujaldón",
      year: 2021,
      description: "Composición original para coro de cámara a 6 voces (SSATBB). Una obra que combina elementos de la música antigua con armonías contemporáneas.",
      difficulty: "Alta",
      duration: "5:15",
      voices: "SSATBB",
      language: "Latín",
      price: 9.50,
      sample: "https://www.africau.edu/images/default/sample.pdf", // Example PDF URL
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", // Example audio URL
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video URL
      tags: ["Sacra", "A cappella", "Contemporánea"]
    },
    {
      id: 4,
      title: "Suite Folclórica Española",
      composer: "Popular Española",
      arranger: "Ariel Ujaldón",
      year: 2022,
      description: "Colección de cuatro arreglos de canciones tradicionales españolas para coro mixto y pequeño conjunto instrumental (piano, guitarra y percusión). Incluye 'La Tarara', 'El Vito', 'Anda Jaleo' y 'Asturias'.",
      difficulty: "Media",
      duration: "12:00",
      voices: "SATB",
      language: "Español",
      price: 15.00,
      sample: "https://www.africau.edu/images/default/sample.pdf", // Example PDF URL
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", // Example audio URL
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video URL
      tags: ["Tradicional", "Con acompañamiento", "Suite"]
    },
    {
      id: 5,
      title: "Noche de Paz",
      composer: "Franz Xaver Gruber",
      arranger: "Ariel Ujaldón",
      year: 2018,
      description: "Arreglo para coro mixto a cappella del conocido villancico. Este arreglo presenta una versión renovada con armonías jazzísticas y cambios de textura.",
      difficulty: "Media-Baja",
      duration: "3:30",
      voices: "SATB",
      language: "Español",
      price: 6.50,
      sample: "https://www.africau.edu/images/default/sample.pdf", // Example PDF URL
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", // Example audio URL
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video URL
      tags: ["Navidad", "A cappella", "Arreglo"]
    },
    {
      id: 6,
      title: "Tres Poemas de García Lorca",
      composer: "Original",
      arranger: "Ariel Ujaldón",
      year: 2023,
      description: "Ciclo de tres composiciones originales para coro mixto y piano basadas en poemas de Federico García Lorca: 'La Guitarra', 'El Silencio' y 'Canción de Jinete'.",
      difficulty: "Alta",
      duration: "9:45",
      voices: "SATB con divisi",
      language: "Español",
      price: 12.00,
      sample: "https://www.africau.edu/images/default/sample.pdf", // Example PDF URL
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", // Example audio URL
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video URL
      tags: ["Contemporánea", "Con acompañamiento", "Ciclo"]
    },
    {
      id: 7,
      title: "Kyrie Eleison",
      composer: "Original",
      arranger: "Ariel Ujaldón",
      year: 2017,
      description: "Composición original para coro femenino y órgano. Una obra de carácter solemne con influencias de la música medieval y renacentista.",
      difficulty: "Media",
      duration: "4:20",
      voices: "SSAA",
      language: "Griego/Latín",
      price: 7.00,
      sample: "https://www.africau.edu/images/default/sample.pdf", // Example PDF URL
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", // Example audio URL
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video URL
      tags: ["Sacra", "Con acompañamiento", "Contemporánea"]
    },
    {
      id: 8,
      title: "Cancionero Popular Latinoamericano",
      composer: "Popular Latinoamericana",
      arranger: "Ariel Ujaldón",
      year: 2020,
      description: "Colección de seis arreglos de canciones populares latinoamericanas para coro mixto con acompañamiento de guitarra y percusión. Incluye obras de Argentina, Chile, Perú, Colombia, México y Cuba.",
      difficulty: "Media",
      duration: "18:30",
      voices: "SATB",
      language: "Español",
      price: 18.00,
      sample: "https://www.africau.edu/images/default/sample.pdf", // Example PDF URL
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", // Example audio URL
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video URL
      tags: ["Tradicional", "Con acompañamiento", "Colección"]
    }
  ];

  const [filters, setFilters] = useState({
    difficulty: 'all',
    voices: 'all',
    type: 'all',
    search: ''
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredScores = scores.filter(score => {
    const matchesDifficulty = filters.difficulty === 'all' || score.difficulty.toLowerCase().includes(filters.difficulty.toLowerCase());
    const matchesVoices = filters.voices === 'all' || score.voices.includes(filters.voices);
    const matchesType = filters.type === 'all' || score.tags.some(tag => tag.toLowerCase().includes(filters.type.toLowerCase()));
    const matchesSearch = filters.search === '' || 
                          score.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                          score.composer.toLowerCase().includes(filters.search.toLowerCase()) ||
                          score.description.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesDifficulty && matchesVoices && matchesType && matchesSearch;
  });

  const openScoreModal = (id: number) => {
    setSelectedScore(id);
    setActiveTab('preview');
  };

  const closeScoreModal = () => {
    setSelectedScore(null);
  };

  const getSelectedScore = () => {
    return scores.find(score => score.id === selectedScore);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Partituras</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora mi catálogo de partituras disponibles para descarga y compra.
          </p>
        </div>
        
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Buscar</label>
              <input
                type="text"
                id="search"
                placeholder="Título, compositor..."
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-1">Dificultad</label>
              <select
                id="difficulty"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                value={filters.difficulty}
                onChange={(e) => handleFilterChange('difficulty', e.target.value)}
              >
                <option value="all">Todas</option>
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="voices" className="block text-sm font-medium text-gray-700 mb-1">Voces</label>
              <select
                id="voices"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                value={filters.voices}
                onChange={(e) => handleFilterChange('voices', e.target.value)}
              >
                <option value="all">Todas</option>
                <option value="SATB">SATB</option>
                <option value="SSA">SSA</option>
                <option value="SSAA">SSAA</option>
                <option value="TTBB">TTBB</option>
                <option value="SSATBB">SSATBB</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
              <select
                id="type"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
              >
                <option value="all">Todos</option>
                <option value="sacra">Sacra</option>
                <option value="tradicional">Tradicional</option>
                <option value="contemporánea">Contemporánea</option>
                <option value="a cappella">A cappella</option>
                <option value="con acompañamiento">Con acompañamiento</option>
                <option value="navidad">Navidad</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Scores List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredScores.map((score) => (
            <div key={score.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-gray-800">{score.title}</h2>
                  <div className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {score.difficulty}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600 text-sm">
                    {score.composer === "Original" ? "Composición original" : `${score.composer}, arr. ${score.arranger}`}
                  </p>
                  <p className="text-gray-500 text-sm">{score.year} • {score.duration} • {score.voices}</p>
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-3">{score.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {score.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">{score.price.toFixed(2)} €</span>
                  
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => openScoreModal(score.id)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition duration-300"
                      title="Ver muestra"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <button 
                      className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition duration-300"
                      title="Comprar"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredScores.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron partituras que coincidan con los filtros seleccionados.</p>
          </div>
        )}
        
        {/* Score Modal */}
        {selectedScore !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center border-b p-4">
                <h3 className="text-xl font-bold text-gray-800">{getSelectedScore()?.title}</h3>
                <button 
                  onClick={closeScoreModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-4 border-b">
                <div className="flex space-x-4">
                  <button
                    className={`px-4 py-2 rounded-md ${activeTab === 'preview' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => setActiveTab('preview')}
                  >
                    Vista previa
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md ${activeTab === 'listen' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => setActiveTab('listen')}
                  >
                    Escuchar
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md ${activeTab === 'video' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => setActiveTab('video')}
                  >
                    Ver vídeo
                  </button>
                </div>
              </div>
              
              <div className="p-4 overflow-auto" style={{ maxHeight: 'calc(90vh - 180px)' }}>
                {activeTab === 'preview' ? (
                  <div className="flex justify-center">
                    <iframe 
                      src={getSelectedScore()?.sample} 
                      className="w-full h-[60vh]"
                      title={`Vista previa de ${getSelectedScore()?.title}`}
                    ></iframe>
                  </div>
                ) : activeTab === 'listen' ? (
                  <div className="max-w-md mx-auto">
                    <p className="text-gray-600 mb-4 text-center">Escucha una muestra de esta obra:</p>
                    <AudioPlayer
                      src={getSelectedScore()?.audio}
                      showJumpControls={false}
                      customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
                      customProgressBarSection={['PROGRESS_BAR', 'CURRENT_TIME', 'DURATION']}
                      autoPlayAfterSrcChange={false}
                    />
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <div className="w-full">
                      <p className="text-gray-600 mb-4 text-center">Mira una interpretación de esta obra:</p>
                      <iframe 
                        width="100%" 
                        height="400" 
                        src={getSelectedScore()?.video}
                        title={`Vídeo de ${getSelectedScore()?.title}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="border-t p-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-600">Muestra limitada a las primeras 2 páginas</p>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={getSelectedScore()?.sample} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition duration-300"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Descargar muestra
                  </a>
                  <button className="flex items-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md transition duration-300">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Comprar ({getSelectedScore()?.price.toFixed(2)} €)
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Featured Collections */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Colecciones destacadas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Música Sacra" 
                    className="h-48 w-full object-cover md:h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Colección de Música Sacra</h3>
                  <p className="text-gray-600 mb-4">
                    Una selección de 12 obras sacras para diferentes formaciones corales, desde pequeños motetes hasta obras de mayor envergadura.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-amber-600">75.00 €</span>
                    <button className="flex items-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md transition duration-300">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Comprar colección
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Música Tradicional" 
                    className="h-48 w-full object-cover md:h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Arreglos de Música Tradicional</h3>
                  <p className="text-gray-600 mb-4">
                    Una colección de 15 arreglos de música tradicional española y latinoamericana para coro mixto, con y sin acompañamiento.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-amber-600">90.00 €</span>
                    <button className="flex items-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md transition duration-300">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Comprar colección
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-16 bg-amber-50 rounded-lg p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <Music className="h-24 w-24 text-amber-500" />
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Información sobre las partituras</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Todas las partituras están disponibles en formato PDF de alta calidad, optimizadas para su impresión y uso en dispositivos digitales.
                </p>
                <p>
                  Al comprar una partitura, recibirás un enlace de descarga que estará disponible durante 30 días. También tendrás acceso permanente a tus compras desde tu cuenta personal.
                </p>
                <p>
                  Para pedidos especiales, arreglos personalizados o cualquier consulta sobre las partituras, no dudes en contactarme a través del formulario de contacto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scores;