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
import Terms from './components/Terms.tsx';

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
      <Terms/>
      <Footer />
    </div>
  );
}

export default App;