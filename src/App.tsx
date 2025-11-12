import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// General Components (used on every page or structure)
import Header from './components/Header';
import Footer from './components/Footer';

// Page Components (Home)
import Hero from './components/Hero';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Services from './components/Services';

// Legal Page Components
// NOTE: I am fixing the import of PrivacyPolicy to the correct syntax
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy'; // Fixed import syntax

// The main landing page component, grouping all the homepage sections
const Home: React.FC = () => (
  <>
    <Hero />
    <Experience />
    <Services />
    <Certifications />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <Header />

        <Routes>
          {/* Main Landing Page Route */}
          <Route path="/" element={<Home />} />

          {/* Separate Routes for Legal Pages */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;