import React from 'react';
import { BookOpen, ShoppingCart, ExternalLink } from 'lucide-react';

const Books: React.FC = () => {
  const books = [
    {
      id: 1,
      title: "El Arte de la Dirección Coral",
      year: 2018,
      description: "Una guía completa para directores de coro, desde los fundamentos básicos hasta técnicas avanzadas de dirección. Incluye ejercicios prácticos y consejos para el trabajo con diferentes tipos de agrupaciones corales.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      publisher: "Editorial Música Viva",
      pages: 256,
      isbn: "978-84-XXXXX-XX-X"
    },
    {
      id: 2,
      title: "Armonía Aplicada al Arreglo Coral",
      year: 2020,
      description: "Un manual práctico sobre armonía y su aplicación en los arreglos corales. Aborda desde los conceptos básicos hasta técnicas avanzadas, con numerosos ejemplos y ejercicios para desarrollar la creatividad en el arreglo coral.",
      cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      publisher: "Ediciones Musicales Contemporáneas",
      pages: 320,
      isbn: "978-84-XXXXX-XX-X"
    },
    {
      id: 3,
      title: "Técnica Vocal para Coros",
      year: 2021,
      description: "Una obra dedicada a la técnica vocal aplicada al canto coral. Incluye ejercicios de calentamiento, técnicas de respiración, emisión vocal y consejos para lograr un sonido homogéneo y equilibrado en el coro.",
      cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      publisher: "Editorial Música Viva",
      pages: 208,
      isbn: "978-84-XXXXX-XX-X"
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Libros</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Publicaciones sobre dirección coral, arreglos y técnica vocal.
          </p>
        </div>
        
        <div className="space-y-12">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="h-full w-full object-cover md:h-full md:w-full"
                  />
                </div>
                <div className="p-6 md:p-8 md:w-2/3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h2>
                      <p className="text-gray-500 mb-4">Publicado en {book.year} • {book.pages} páginas</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition duration-300">
                        <ShoppingCart className="h-5 w-5" />
                      </button>
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition duration-300">
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{book.description}</p>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Editorial</p>
                        <p className="font-medium">{book.publisher}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">ISBN</p>
                        <p className="font-medium">{book.isbn}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-amber-50 rounded-lg p-6 md:p-8 shadow-md">
          <div className="flex items-start md:items-center">
            <BookOpen className="h-12 w-12 text-amber-500 flex-shrink-0" />
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">¿Interesado en mis publicaciones?</h3>
              <p className="text-gray-600">
                Todos los libros están disponibles en librerías especializadas y tiendas online. Para consultas sobre adquisiciones para instituciones educativas o descuentos para compras al por mayor, no dudes en contactarme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;