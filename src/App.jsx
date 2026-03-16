import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Models from './pages/Models';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex-col">
        {/* Global glowing background elements */}
        <div className="bg-glow glow-top-right"></div>
        <div className="bg-glow glow-bottom-left"></div>
        
        <Navbar />
        
        <main className="z-10 relative flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
