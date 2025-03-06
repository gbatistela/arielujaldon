import React, { useState } from 'react';
import { Search, Filter, Download, ShoppingCart, Music, Eye, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Catalog: React.FC = () => {
  // Define categories for filtering
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'original', name: 'Composiciones originales' },
    { id: 'arrangement', name: 'Arreglos' },
    { id: 'sacred', name: 'Música sacra' },
    { id: 'folk', name: 'Música tradicional' },
    { id: 'contemporary', name: 'Música contemporánea' }
  ];

  // Define voice types for filtering
  const voiceTypes = [
    { id: 'all', name: 'Todas las voces' },
    { id: 'satb', name: 'SATB' },
    { id: 'ssa', name: 'SSA' },
    { id: 'ttbb', name: 'TTBB' },
    { id: 'ssaattbb', name: 'SSAATTBB' },
    { id: 'other', name: 'Otras combinaciones' }
  ];

  // Define difficulty levels for filtering
  const difficultyLevels = [
    { id: 'all', name: 'Todas las dificultades' },
    { id: 'easy', name: 'Fácil' },
    { id: 'medium', name: 'Media' },
    { id: 'advanced', name: 'Avanzada' }
  ];

  // Sample catalog data
  const catalogItems = [
    {
      id: 1,
      title: "Ave Maria",
      type: "original",
      year: 2020,
      voices: "SATB",
      duration: "3:45",
      difficulty: "medium",
      accompaniment: "A cappella",
      language: "Latín",
      description: "Composición original para coro mixto a 4 voces. Una obra de carácter contemplativo con armonías modernas que mantiene la esencia de la tradición.",
      categories: ["original", "sacred"],
      price: 8.50,
      sample: true,
      pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      id: 2,
      title: "El Cant dels Ocells",
      type: "arrangement",
      year: 2019,
      voices: "SATB",
      duration: "4:30",
      difficulty: "medium",
      accompaniment: "Piano",
      language: "Catalán",
      description: "Arreglo para coro mixto y piano de esta hermosa canción tradicional catalana. El arreglo explora diferentes texturas corales manteniendo la emotividad de la melodía original.",
      categories: ["arrangement", "folk"],
      price: 7.50,
      sample: true,
      pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
      id: 3,
      title: "Salve Regina",
      type: "original",
      year: 2021,
      voices: "SSATBB",
      duration: "5:15",
      difficulty: "advanced",
      accompaniment: "A cappella",
      language: "Latín",
      description: "Composición original para coro de cámara a 6 voces. Una obra que combina elementos de la música antigua con armonías contemporáneas.",
      categories: ["original", "sacred"],
      price: 9.50,
      sample: true,
      pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    {
      id: 4,
      title: "Suite Folclórica Española",
      type: "arrangement",
      year: 2022,
      voices: "SATB",
      duration: "12:00",
      difficulty: "medium",
      accompaniment: "Piano, guitarra y percusión",
      language: "Español",
      description: "Colección de cuatro arreglos de canciones tradicionales españolas para coro mixto y pequeño conjunto instrumental. Incluye 'La Tarara', 'El Vito', 'Anda Jaleo' y 'Asturias'.",
      categories: ["arrangement", "folk"],
      price: 15.00,
      sample: true,
      pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    },
    {
      id: 5,
      title: "Noche de Paz",
      type: "arrangement",
      year: 2018,
      voices: "SATB",
      duration: "3:30",
      difficulty: "easy",
      accompaniment: "A cappella",
      language: "Español",
      description: "Arreglo para coro mixto a cappella del conocido villancico. Este arreglo presenta una versión renovada con armonías jazzísticas y cambios de textura.",
      categories: ["arrangement", "sacred"],
      price: 6.50,
      sample: true,
      pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },
    {
      id: 6,
      title: "Tres Poemas de García Lorca",
      type: "original",
      year: 2023,
      voices: "SATB",
      duration: "9:45",
      difficulty: "advanced",
      accompaniment: "Piano",
      language: "Español",
      description: "Ciclo de tres composiciones originales para coro mixto y piano basadas en poemas de Federico García Lorca: 'La Guitarra', 'El Silencio' y 'Canción de Jinete'.",
      categories: ["original", "contemporary"],
      price: 12.00,
      sample: true,
      pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    },
    {
      id: 7,
      title: "Kyrie Eleison",
      type: "original",
      year: 2017,
      voices: "SSAA",
      duration: "4:20",
      difficulty: "medium",
      accompaniment: "Órgano",
      language: "Griego/Latín",
      description: "Composición original para coro femenino y órgano. Una obra de carácter solemne con influencias de la música medieval y renacentista.",
      categories: ["original", "sacred"],
      price: 7.00,
      sample: true,
      pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
    },
    {
      id: 8,
      title: "Cancionero Popular Latinoamericano",
      type: "arrangement",
      year: 2020,
      voices: "SATB",
      duration: "18:30",
      difficulty: "medium",
      accompaniment: "Guitarra y percusión",
      language: "Español",
      description: "Colección de seis arreglos de canciones populares latinoamericanas para coro mixto con acompañamiento de guitarra y percusión. Incluye obras de Argentina, Chile, Perú, Colombia, México y Cuba.",
      categories: ["arrangement", "folk"],
      price: 18.00,
      sample: true,
      pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    },
    {
      id: 9,
      title: "Magnificat",
      type: "original",
      year: 2022,
      voices: "SSAATTBB",
      duration: "7:15",
      difficulty: "advanced",
      accompaniment: "A cappella",
      language: "Latín",
      description: "Composición original para doble coro a cappella. Una obra de gran riqueza armónica y contrapuntística que explora diferentes texturas y efectos vocales.",
      categories: ["original", "sacred"],
      price: 10.50,
      sample: true,
      pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
    },
    {
      id: 10,
      title: "Canciones de Cuna",
      type: "arrangement",
      year: 2019,
      voices: "SSA",
      duration: "11:00",
      difficulty: "easy",
      accompaniment: "Piano",
      language: "Español",
      description: "Ciclo de cuatro arreglos de nanas tradicionales españolas para coro de voces iguales y piano. Un repertorio ideal para coros juveniles y femeninos.",
      categories: ["arrangement", "folk"],
      price: 9.00,
      sample: true,
      pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
    },
    {
      id: 11,
      title: "Sonetos de Amor",
      type: "original",
      year: 2021,
      voices: "SATB",
      duration: "14:30",
      difficulty: "advanced",
      accompaniment: "A cappella",
      language: "Español",
      description: "Ciclo de cinco composiciones originales para coro mixto a cappella basadas en sonetos de Pablo Neruda. Una obra de gran expresividad y riqueza armónica.",
      categories: ["original", "contemporary"],
      price: 14.00,
      sample: true,
      pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
    },
    {
      id: 12,
      title: "Jazz Standards",
      type: "arrangement",
      year: 2023,
      voices: "SATB",
      duration: "16:00",
      difficulty: "advanced",
      accompaniment: "Piano, contrabajo y batería",
      language: "Inglés",
      description: "Colección de arreglos de cuatro estándares de jazz para coro mixto y trío de jazz. Incluye 'Autumn Leaves', 'Summertime', 'Fly Me to the Moon' y 'My Funny Valentine'.",
      categories: ["arrangement", "contemporary"],
      price: 16.00,
      sample: true,
      pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
    }
  ];

  // State for filters
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeVoiceType, setActiveVoiceType] = useState('all');
  const [activeDifficulty, setActiveDifficulty] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [modalType, setModalType] = useState<'pdf' | 'video' | null>(null);

  // Filter the catalog items
  const filteredItems = catalogItems.filter(item => {
    // Filter by category
    const categoryMatch = activeCategory === 'all' || item.categories.includes(activeCategory);
    
    // Filter by voice type
    const voiceMatch = activeVoiceType === 'all' || 
                      (activeVoiceType === 'satb' && item.voices === 'SATB') ||
                      (activeVoiceType === 'ssa' && item.voices === 'SSA') ||
                      (activeVoiceType === 'ttbb' && item.voices === 'TTBB') ||
                      (activeVoiceType === 'ssaattbb' && item.voices === 'SSAATTBB') ||
                      (activeVoiceType === 'other' && !['SATB', 'SSA', 'TTBB', 'SSAATTBB'].includes(item.voices));
    
    // Filter by difficulty
    const difficultyMatch = activeDifficulty === 'all' || item.difficulty === activeDifficulty;
    
    // Filter by search term
    const searchMatch = searchTerm === '' || 
                       item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && voiceMatch && difficultyMatch && searchMatch;
  });

  const openModal = (id: number, type: 'pdf' | 'video') => {
    setSelectedItem(id);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalType(null);
  };

  const getSelectedItem = () => {
    return catalogItems.find(item => item.id === selectedItem);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Catálogo de Obras</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora mi catálogo completo de composiciones originales y arreglos para diferentes formaciones corales.
          </p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar por título o descripción..."
                className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button
              className="flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition duration-300"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5 mr-2" />
              Filtros {showFilters ? '▲' : '▼'}
            </button>
          </div>
          
          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Categoría</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        className={`px-3 py-1 text-sm rounded-full ${
                          activeCategory === category.id 
                            ? 'bg-amber-500 text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        onClick={() => setActiveCategory(category.id)}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Voces</h3>
                  <div className="flex flex-wrap gap-2">
                    {voiceTypes.map(voiceType => (
                      <button
                        key={voiceType.id}
                        className={`px-3 py-1 text-sm rounded-full ${
                          activeVoiceType === voiceType.id 
                            ? 'bg-amber-500 text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        onClick={() => setActiveVoiceType(voiceType.id)}
                      >
                        {voiceType.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Dificultad</h3>
                  <div className="flex flex-wrap gap-2">
                    {difficultyLevels.map(level => (
                      <button
                        key={level.id}
                        className={`px-3 py-1 text-sm rounded-full ${
                          activeDifficulty === level.id 
                            ? 'bg-amber-500 text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        onClick={() => setActiveDifficulty(level.id)}
                      >
                        {level.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Catalog Items */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Título
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tipo
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Voces
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duración
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dificultad
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Precio
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center">
                          <Music className="h-5 w-5 text-amber-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-500">{item.year} • {item.language}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.type === 'original' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {item.type === 'original' ? 'Composición' : 'Arreglo'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{item.voices}</div>
                      <div className="text-xs">{item.accompaniment}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.difficulty === 'easy' 
                          ? 'bg-green-100 text-green-800' 
                          : item.difficulty === 'medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                      }`}>
                        {item.difficulty === 'easy' ? 'Fácil' : item.difficulty === 'medium' ? 'Media' : 'Avanzada'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.price.toFixed(2)} €
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button 
                          className="text-blue-600 hover:text-blue-900" 
                          title="Ver PDF"
                          onClick={() => openModal(item.id, 'pdf')}
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                        <button 
                          className="text-red-600 hover:text-red-900" 
                          title="Ver vídeo"
                          onClick={() => openModal(item.id, 'video')}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </button>
                        <Link to={`/scores`} className="text-green-600 hover:text-green-900" title="Comprar">
                          <ShoppingCart className="h-5 w-5" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No se encontraron obras que coincidan con los filtros seleccionados.</p>
              <button 
                className="mt-4 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition duration-300"
                onClick={() => {
                  setActiveCategory('all');
                  setActiveVoiceType('all');
                  setActiveDifficulty('all');
                  setSearchTerm('');
                }}
              >
                Restablecer filtros
              </button>
            </div>
          )}
        </div>
        
        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Información sobre el catálogo</h2>
            <p className="text-gray-600 mb-4">
              Este catálogo incluye todas mis composiciones originales y arreglos disponibles para su adquisición. Las obras están disponibles en formato PDF de alta calidad, listas para imprimir y utilizar.
            </p>
            <p className="text-gray-600 mb-4">
              Para cada obra, puedes acceder a una muestra gratuita que incluye las primeras páginas de la partitura y, en muchos casos, un fragmento de audio para escuchar cómo suena.
            </p>
            <p className="text-gray-600">
              Si estás interesado en alguna obra que no aparece en el catálogo o necesitas un arreglo personalizado, no dudes en contactarme a través del formulario de contacto.
            </p>
          </div>
          
          <div className="bg-amber-50 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Licencias y derechos</h2>
            <p className="text-gray-600 mb-4">
              Al adquirir una partitura, obtienes el derecho a:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>Imprimir el número de copias necesarias para tu coro o grupo vocal</li>
              <li>Interpretar la obra en conciertos y eventos no comerciales</li>
              <li>Incluir la obra en programas educativos</li>
            </ul>
            <p className="text-gray-600">
              Para grabaciones, emisiones o usos comerciales, es necesario solicitar permisos adicionales. Contacta conmigo para más información sobre licencias especiales.
            </p>
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      {selectedItem !== null && modalType === 'pdf' && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-xl font-bold text-gray-800">{getSelectedItem()?.title} - Vista previa PDF</h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 overflow-auto" style={{ height: '70vh' }}>
              <iframe 
                src={getSelectedItem()?.pdfUrl} 
                className="w-full h-full border-0"
                title={`Vista previa de ${getSelectedItem()?.title}`}
              ></iframe>
            </div>
            
            <div className="border-t p-4 flex justify-between items-center">
              <div>
                <p className="text-gray-600">Muestra limitada a las primeras páginas</p>
              </div>
              <div className="flex space-x-3">
                <a 
                  href={getSelectedItem()?.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition duration-300"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Descargar muestra
                </a>
                <Link 
                  to="/scores" 
                  className="flex items-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md transition duration-300"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Comprar ({getSelectedItem()?.price.toFixed(2)} €)
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedItem !== null && modalType === 'video' && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-xl font-bold text-gray-800">{getSelectedItem()?.title} - Vídeo</h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src={getSelectedItem()?.videoUrl.replace('watch?v=', 'embed/')} 
                  title={`Vídeo de ${getSelectedItem()?.title}`}
                  className="w-full h-[50vh]"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="border-t p-4 flex justify-between items-center">
              <div>
                <p className="text-gray-600">Interpretación de muestra</p>
              </div>
              <div>
                <Link 
                  to="/scores" 
                  className="flex items-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md transition duration-300"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Comprar partitura ({getSelectedItem()?.price.toFixed(2)} €)
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalog;