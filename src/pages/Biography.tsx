import React from 'react';

const Biography: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-80">
            <img 
              src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Ariel Ujaldón" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6">
                <h1 className="text-4xl font-bold text-white">Biografía</h1>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="prose prose-lg max-w-none">
              <p>
                Ariel Ujaldón es un reconocido director de coros, arreglador y compositor con una destacada trayectoria en el ámbito de la música coral e instrumental. Nacido en España, comenzó sus estudios musicales a temprana edad, mostrando desde el principio un especial interés por la dirección coral y la composición.
              </p>
              
              <h2>Formación Académica</h2>
              <p>
                Realizó sus estudios superiores en el Conservatorio Superior de Música, donde se especializó en Dirección Coral y Composición. Posteriormente, amplió su formación con maestros de renombre internacional, participando en numerosos cursos y talleres especializados en diferentes países de Europa y América.
              </p>
              
              <h2>Trayectoria Profesional</h2>
              <p>
                A lo largo de su carrera, ha dirigido diversos coros y grupos vocales, tanto amateurs como profesionales, con los que ha participado en importantes festivales y concursos internacionales, obteniendo numerosos reconocimientos. Su labor como director se caracteriza por un profundo respeto a las obras originales, combinado con una interpretación fresca y emotiva que conecta con el público.
              </p>
              
              <p>
                Como arreglista y compositor, ha creado un extenso catálogo de obras para diferentes formaciones corales e instrumentales. Sus arreglos se distinguen por su originalidad, respeto a la esencia de las obras originales y una cuidada adaptación a las características de cada agrupación. Sus composiciones originales abarcan diversos estilos y formatos, desde obras a cappella hasta piezas para coro y orquesta.
              </p>
              
              <h2>Labor Pedagógica</h2>
              <p>
                Paralelamente a su actividad artística, ha desarrollado una importante labor pedagógica como profesor de dirección coral, armonía y composición en diversos conservatorios y escuelas de música. Es frecuentemente invitado como director de talleres corales y ponente en congresos y seminarios relacionados con la música coral.
              </p>
              
              <h2>Publicaciones</h2>
              <p>
                Es autor de varios libros sobre técnica vocal, dirección coral y arreglos musicales, que se han convertido en referencia para estudiantes y profesionales. Además, ha publicado numerosos artículos en revistas especializadas, compartiendo su conocimiento y experiencia en el ámbito de la música coral.
              </p>
              
              <h2>Actualidad</h2>
              <p>
                Actualmente, compagina su labor como director de coro con la composición, los arreglos musicales y la impartición de cursos y talleres. Su pasión por la música coral le lleva a estar en constante búsqueda de nuevas sonoridades y formas de expresión, siempre con el objetivo de emocionar y conectar con el público a través de la música.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;