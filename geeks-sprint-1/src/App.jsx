import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Card from './components/Card';
import Footer from './components/Footer';

import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

const Home = () => {
  const cards = [
    { title: 'Trusted Investors', description: 'Find real investment opportunities for your company.' },
    { title: 'Innovative Startups', description: 'Discover projects seeking funding.' },
    { title: 'Growth Network', description: 'Grow with a network of partners and investors.' },
  ];
  

  return (
    <>
      <HeroSection />
      <main className="p-8 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </main>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;