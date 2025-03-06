import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="relative h-[80vh] bg-cover bg-center flex items-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ariel Ujaldón
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Director de coros, arreglador y compositor
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/biography" 
                  className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-md transition duration-300 inline-flex items-center"
                >
                  Conocer más <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/scores" 
                  className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-medium py-3 px-6 rounded-md transition duration-300"
                >
                  Ver partituras
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Bienvenidos a mi sitio oficial</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Soy Ariel Ujaldón, un apasionado director de coros, arreglador y compositor con una extensa trayectoria en el mundo de la música coral e instrumental. A través de mi trabajo, busco transmitir emociones y conectar con el público mediante interpretaciones auténticas y arreglos innovadores.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                En este espacio encontrarás información sobre mi carrera, mis publicaciones, grabaciones y, por supuesto, mi catálogo de arreglos y composiciones originales disponibles para tu coro o grupo musical.
              </p>
              <Link 
                to="/catalog" 
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
              >
                Explorar catálogo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522536421511-14c9073df899?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Ariel Ujaldón dirigiendo" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Obras Destacadas</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Descubre algunas de mis obras y arreglos más populares, disponibles para su adquisición en formato digital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <img 
                  src={`https://images.unsplash.com/photo-151${item + 8000000}?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80`} 
                  alt={`Obra destacada ${item}`} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Obra Destacada {item}</h3>
                  <p className="text-gray-600 mb-4">
                    Una breve descripción de esta obra o arreglo coral, destacando su estilo y características principales.
                  </p>
                  <Link 
                    to="/scores" 
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Ver partitura <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/scores" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-md transition duration-300 inline-flex items-center"
            >
              Ver todas las partituras <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimonios</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Lo que dicen directores y músicos que han trabajado con mis arreglos y composiciones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                role: "Directora de Coro",
                quote: "Los arreglos de Ariel han enriquecido enormemente el repertorio de nuestro coro. Su sensibilidad musical y atención al detalle hacen que cada pieza sea especial."
              },
              {
                name: "Carlos Rodríguez",
                role: "Compositor",
                quote: "La capacidad de Ariel para combinar tradición e innovación en sus composiciones es admirable. Su trabajo es una fuente constante de inspiración."
              },
              {
                name: "Laura Martínez",
                role: "Directora de Orquesta",
                quote: "He tenido el placer de dirigir varias obras de Ariel y siempre son recibidas con entusiasmo tanto por los músicos como por el público."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Interesado en mis obras?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explora mi catálogo completo de arreglos y composiciones o contáctame para consultas personalizadas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/catalog" 
              className="bg-white text-amber-700 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition duration-300"
            >
              Ver catálogo
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;