import React from 'react';
import { GraduationCap, Award, BookOpen, Brain } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Advanced Digital Marketing Program",
      institution: "NIAIS",
      date: "June 1, 2023",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Digital Marketing Certification",
      institution: "Arfa Tower Lahore",
      date: "Certified Professional",
      icon: <Award className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Student of IDM Pakistan",
      institution: "Institute of Digital Marketing",
      date: "Ongoing Education",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "AI Agents & AI Integration",
      institution: "Digital Marketing Specialization",
      date: "Currently Learning",
      icon: <Brain className="w-6 h-6" />,
      color: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-black/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Certifications & Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Continuous learning and professional development in digital marketing and emerging technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${cert.color} rounded-lg text-white`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-amber-400 font-medium mb-1">
                      {cert.institution}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Commitment to Excellence
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I believe in continuous learning and staying ahead of industry trends. Currently expanding 
              my expertise in AI agents and AI integration in digital marketing to provide cutting-edge 
              solutions for modern businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;