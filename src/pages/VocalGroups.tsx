import React, { useState } from 'react';
import { Users, Calendar, MapPin, ExternalLink } from 'lucide-react';

const VocalGroups: React.FC = () => {
  const groups = [
    {
      id: 1,
      name: "Ensemble Vocal Harmonía",
      description: "Grupo vocal de cámara fundado en 2015, especializado en música contemporánea y arreglos de música popular. Formado por 12 cantantes profesionales, el ensemble ha participado en numerosos festivales internacionales y ha grabado dos álbumes bajo la dirección de Ariel Ujaldón.",
      image: "https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      founded: "2015",
      location: "Madrid, España",
      members: 12,
      repertoire: "Música contemporánea, arreglos de música popular",
      achievements: [
        "Primer premio en el Concurso Internacional de Música Coral (2018)",
        "Participación en el Festival de Música Antigua de Utrecht (2019)",
        "Grabación de dos álbumes: 'Resonancias' (2021) y 'Voces del Mundo' (2022)"
      ],
      website: "#",
      gallery: [
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      name: "Quinteto Vocal Aura",
      description: "Formación vocal a cappella compuesta por cinco cantantes especializados en jazz y música moderna. El grupo interpreta arreglos originales de Ariel Ujaldón, combinando técnicas vocales tradicionales con efectos contemporáneos y percusión vocal.",
      image: "https://images.unsplash.com/photo-1528489496900-d841974f5290?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      founded: "2018",
      location: "Barcelona, España",
      members: 5,
      repertoire: "Jazz vocal, música moderna, arreglos originales",
      achievements: [
        "Gira por festivales de jazz europeos (2019-2020)",
        "Colaboración con artistas internacionales de jazz",
        "Álbum 'Vocal Landscapes' (2021)"
      ],
      website: "#",
      gallery: [
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1528489496900-d841974f5290?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 3,
      name: "Octeto Vocal Cantares",
      description: "Grupo vocal mixto dedicado a la interpretación de música tradicional iberoamericana con arreglos contemporáneos. El octeto ha colaborado con Ariel Ujaldón en diversos proyectos, interpretando sus arreglos de música folclórica con un enfoque innovador.",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      founded: "2016",
      location: "Sevilla, España",
      members: 8,
      repertoire: "Música tradicional iberoamericana, folclore con arreglos contemporáneos",
      achievements: [
        "Premio a la mejor interpretación de música folclórica (2019)",
        "Gira por Latinoamérica (2020)",
        "Colaboración con orquestas de instrumentos tradicionales"
      ],
      website: "#",
      gallery: [
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openGallery = (groupId: number, imageUrl: string) => {
    setSelectedGroup(groupId);
    setActiveImage(imageUrl);
  };

  const closeGallery = () => {
    setSelectedGroup(null);
    setActiveImage(null);
  };

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (selectedGroup === null || activeImage === null) return;
    
    const group = groups.find(g => g.id === selectedGroup);
    if (!group) return;
    
    const currentIndex = group.gallery.indexOf(activeImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? group.gallery.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === group.gallery.length - 1 ? 0 : currentIndex + 1;
    }
    
    setActiveImage(group.gallery[newIndex]);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Grupos Vocales</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Formaciones vocales con las que he colaborado como director, arreglista o asesor musical.
          </p>
        </div>
        
        <div className="space-y-12">
          {groups.map((group) => (
            <div key={group.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <img 
                    src={group.image} 
                    alt={group.name} 
                    className="h-full w-full object-cover md:h-full md:w-full"
                  />
                </div>
                <div className="p-6 md:p-8 md:w-2/3">
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{group.name}</h2>
                    {group.website && (
                      <a href={group.website} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-amber-500" />
                      Fundado en {group.founded}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-amber-500" />
                      {group.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-amber-500" />
                      {group.members} miembros
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{group.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Repertorio</h3>
                    <p className="text-gray-600">{group.repertoire}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Logros destacados</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {group.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Galería</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {group.gallery.map((image, index) => (
                        <div 
                          key={index} 
                          className="h-16 rounded-md overflow-hidden cursor-pointer hover:opacity-80 transition-opacity duration-300"
                          onClick={() => openGallery(group.id, image)}
                        >
                          <img 
                            src={image} 
                            alt={`${group.name} - Imagen ${index + 1}`} 
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
        {selectedGroup !== null && activeImage !== null && (
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
                {groups.find(g => g.id === selectedGroup)?.name}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VocalGroups;