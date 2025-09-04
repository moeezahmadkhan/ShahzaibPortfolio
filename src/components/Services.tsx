import React from 'react';
import { TrendingUp, Globe, PenTool, Film, Search, ShoppingCart } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "PERFORMANCE MARKETING",
      description: "We don’t just run ads, we print sales."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "WEBSITE DEVELOPMENT",
      description: "We turn websites into 24/7 profit machines."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "GRAPHIC DESIGNING",
      description: "Designs that speak louder than ads."
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "VIDEO EDITING",
      description: "Stories that hook minds & hijack attention."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEARCH ENGINE OPTIMIZATION",
      description: "Rank higher, earn trust faster, sell easier."
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "ECOMMERCE PACKAGE",
      description: "From product to profit, we design stores that hypnotize wallets."
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