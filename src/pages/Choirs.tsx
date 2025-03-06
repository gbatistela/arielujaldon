import React, { useState } from 'react';
import { Users, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Choirs: React.FC = () => {
  const choirs = [
    {
      id: 1,
      name: "Coro de Cámara Vox Aurea",
      description: "Coro de cámara fundado en 2010 y dirigido por Ariel Ujaldón desde 2015. Formado por 24 cantantes seleccionados, el coro interpreta un repertorio variado que abarca desde música renacentista hasta composiciones contemporáneas, con especial atención a la música española y latinoamericana.",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      founded: "2010",
      location: "Madrid, España",
      members: 24,
      voiceTypes: "SATB (Sopranos, Altos, Tenores, Bajos)",
      repertoire: "Música renacentista, barroca, clásica, romántica y contemporánea",
      achievements: [
        "Primer premio en el Certamen Nacional de Coros (2018)",
        "Gira internacional por Europa (2019)",
        "Grabación del álbum 'Voces del Alma' (2019)"
      ],
      website: "#",
      gallery: [
        "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      name: "Coro Polifónico Ciudad de Madrid",
      description: "Agrupación coral fundada en 2005 con la que Ariel Ujaldón ha colaborado como director invitado y arreglista desde 2017. El coro está formado por 40 cantantes y se especializa en grandes obras del repertorio sinfónico-coral, así como en música popular arreglada para coro.",
      image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      founded: "2005",
      location: "Madrid, España",
      members: 40,
      voiceTypes: "SATB (Sopranos, Altos, Tenores, Bajos)",
      repertoire: "Obras sinfónico-corales, música popular arreglada para coro",
      achievements: [
        "Colaboración con la Orquesta Sinfónica de Madrid (2018-2022)",
        "Participación en el Festival Internacional de Música Sacra (2019)",
        "Grabación del álbum 'Cantos de Navidad' (2022)"
      ],
      website: "#",
      gallery: [
        "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 3,
      name: "Coro Juvenil Cantus",
      description: "Coro juvenil fundado por Ariel Ujaldón en 2016 como parte de un proyecto educativo. Formado por 30 jóvenes de entre 16 y 25 años, el coro se centra en el desarrollo vocal y musical de sus integrantes a través de un repertorio variado y adaptado a sus características.",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      founded: "2016",
      location: "Barcelona, España",
      members: 30,
      voiceTypes: "SATB (Sopranos, Altos, Tenores, Bajos)",
      repertoire: "Música contemporánea, arreglos de música popular, obras pedagógicas",
      achievements: [
        "Premio al mejor coro juvenil en el Certamen Coral Juvenil (2019)",
        "Participación en intercambios corales internacionales",
        "Proyecto educativo en colaboración con conservatorios"
      ],
      website: "#",
      gallery: [
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1528489496900-d841974f5290?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  const [selectedChoir, setSelectedChoir] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openGallery = (choirId: number, imageUrl: string) => {
    setSelectedChoir(choirId);
    setActiveImage(imageUrl);
  };

  const closeGallery = () => {
    setSelectedChoir(null);
    setActiveImage(null);
  };

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (selectedChoir === null || activeImage === null) return;
    
    const choir = choirs.find(c => c.id === selectedChoir);
    if (!choir) return;
    
    const currentIndex = choir.gallery.indexOf(activeImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? choir.gallery.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === choir.gallery.length - 1 ? 0 : currentIndex + 1;
    }
    
    setActiveImage(choir.gallery[newIndex]);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Coros</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agrupaciones corales que he dirigido o con las que he colaborado a lo largo de mi carrera.
          </p>
        </div>
        
        <div className="space-y-12">
          {choirs.map((choir) => (
            <div key={choir.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <img 
                    src={choir.image} 
                    alt={choir.name} 
                    className="h-full w-full object-cover md:h-full md:w-full"
                  />
                </div>
                <div className="p-6 md:p-8 md:w-2/3">
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{choir.name}</h2>
                    {choir.website && (
                      <a href={choir.website} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-amber-500" />
                      Fundado en {choir.founded}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-amber-500" />
                      {choir.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-amber-500" />
                      {choir.members} miembros
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{choir.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Voces</h3>
                      <p className="text-gray-600">{choir.voiceTypes}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Repertorio</h3>
                      <p className="text-gray-600">{choir.repertoire}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Logros destacados</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {choir.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Galería</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {choir.gallery.map((image, index) => (
                        <div 
                          key={index} 
                          className="h-16 rounded-md overflow-hidden cursor-pointer hover:opacity-80 transition-opacity duration-300"
                          onClick={() => openGallery(choir.id, image)}
                        >
                          <img 
                            src={image} 
                            alt={`${choir.name} - Imagen ${index + 1}`} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Image Gallery Modal */}
        {selectedChoir !== null && activeImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button 
                className="absolute top-4 right-4 text-white hover:text-amber-500 z-10"
                onClick={closeGallery}
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative">
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                  onClick={() => navigateGallery('prev')}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <img 
                  src={activeImage} 
                  alt="Imagen ampliada" 
                  className="max-h-[80vh] mx-auto"
                />
                
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                  onClick={() => navigateGallery('next')}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="text-white text-center mt-4">
                {choirs.find(c => c.id === selectedChoir)?.name}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Choirs;