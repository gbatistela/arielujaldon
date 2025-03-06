import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Biography from './pages/Biography';
import Books from './pages/Books';
import Albums from './pages/Albums';
import Videos from './pages/Videos';
import VocalGroups from './pages/VocalGroups';
import Choirs from './pages/Choirs';
import Catalog from './pages/Catalog';
import Scores from './pages/Scores';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/books" element={<Books />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/vocal-groups" element={<VocalGroups />} />
            <Route path="/choirs" element={<Choirs />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;