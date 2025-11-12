import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services'; // Import the new Samples component

// --- FIX APPLIED HERE ---
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
// ------------------------

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Header />
      <Hero />
      {/* <About /> */}
      <Experience />
      <Services />
      {/* <Skills /> */}
      <Certifications />
      <Contact />
      
      {/* Renders Terms and Privacy Policy sequentially on the main page */}
      <Terms/>
      <PrivacyPolicy/>
      
      <Footer />
    </div>
  );
}

export default App;