import React from 'react';
import { Target, TrendingUp, Users, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Performance Marketing Expert",
      description: "4+ years of experience in strategic digital marketing campaigns"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Sales Efficiency",
      description: "Helped startups increase sales efficiency by almost 50%"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media Specialist",
      description: "Expert in social media marketing and brand engagement"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Brand Revival",
      description: "Specializes in reviving brands and helping them grow and scale"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl text-gray-300 leading-relaxed text-center mb-8">
            As an energetic digital marketing professional, I bring over 4 years of experience in 
            performance marketing and lead strategist roles. My expertise lies in Social Media Marketing, 
            and I'm particularly skilled in sales strategies that drive real results.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed text-center">
            I have a proven track record of helping multiple startups increase their sales efficiency 
            by almost 50% by implementing effective, data-driven strategies. My specialty is reviving 
            brands and helping them grow and scale in today's competitive digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-lg hover:shadow-xl"
            >
              <div className="text-amber-400 mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;