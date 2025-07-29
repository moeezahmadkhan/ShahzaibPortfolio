import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react'; // Keep these if you use them

const Hero: React.FC = () => { // Type the component as React.FC
  const whatsappLink = "https://wa.me/923254252605"; // Define the WhatsApp link

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          {/* Replaced the 'SA' div with an <img> tag for your profile picture */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 p-1 shadow-2xl overflow-hidden">
            <img
              src="/Shah.jpg" // Path to your image in the public folder
              alt="Shahzaib Azeem Profile" // Accessible alt text
              className="w-full h-full object-cover object-center rounded-full" // Ensure it fits the circle
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Shahzaib
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Azeem
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            BRAND BUILDER | PERFORMANCE MARKETER
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-amber-400" />
              <span>Lahore, Pakistan</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-amber-400" />
              <span>+92 3254252605</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-amber-400" />
              <span>contact@realshahzaib.com</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Energetic digital marketing professional with 4+ years of experience in performance marketing
            and lead strategist roles. Proven track record of helping multiple startups increase sales
            efficiency by almost 50% through effective strategies.
          </p>

          <a
            href={whatsappLink}
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Recommended for security when using target="_blank"
            className="inline-block bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;