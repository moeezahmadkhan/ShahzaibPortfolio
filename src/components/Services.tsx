import React from 'react';
import { TrendingUp, Globe, PenTool, Film, Search, ShoppingCart } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Marketing",
      description: "Boosting sales and ROI through data-driven campaigns."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Development",
      description: "Building modern, responsive, and user-friendly websites."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Graphic Designing",
      description: "Creating stunning visuals for branding and marketing materials."
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Video Editing",
      description: "Producing high-quality videos for social media and advertisements."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search Engine Optimization",
      description: "Optimizing content to improve search engine rankings and visibility."
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Ecommerce Package",
      description: "Comprehensive solutions for launching and managing online stores."
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-8"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 glow-on-hover"
            >
              <div className="bg-gradient-to-br from-amber-400 to-yellow-600 p-3 rounded-lg inline-block mb-4 text-black">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;