import React from 'react';
import { Calendar, TrendingUp, Users, Award } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  logo: string | null;
  achievement: string;
  website: string | null;
}

interface ExperienceItem {
  title: string;
  period: string;
  icon: JSX.Element;
  projects: Project[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Digital Marketing",
      period: "September 2024 - Present",
      icon: <Award className="w-6 h-6" />,
      projects: [
        {
          name: "ONYX OSLO",
          description: "Helped this international jewelry brand establish an online presence on social media, leading to a successful start and reaching up to PKR 500K in sales",
          logo: '/OnyxOslo.jpg',
          achievement: "PKR 500K in 1 month",
          website: "https://casestudyonyxoslobyrealshahzaib.vercel.app/"
        },
        {
          name: "Iron Artistry",
          description: "Achieved 1 Million PKR in sales in a month. Currently handling their social media campaign",
          logo: '/IronArtistry.jpg',
          achievement: "1M PKR in 1 month",
          website: "https://casestudyironartistrybyrealshahzaib.vercel.app/"
        },
        {
          name: "Products Plaza",
          description: "Built from scratch and achieved 1 Million+ PKR in sales. Currently handling their social media campaign",
          logo: '/ProductPlaza.jpg',
          achievement: "1M+ PKR in sales",
          website: "https://casestudyproductsplazabyrealshahzaib.vercel.app/"
        },
        {
          name: "Alzeon Motors",
          description: "Strategic brand development and digital marketing campaigns",
          logo: '/AlzeonMotors.jpg',
          achievement: "Brand Development",
          website: "https://casestudyalzeonmotorsbyrealshahzaib.vercel.app/"
        }
      ]
    },
    // {
    //   title: "Junior Digital Marketing",
    //   period: "June 2022 - 2024",
    //   icon: <TrendingUp className="w-6 h-6" />,
    //   projects: [
    //     {
    //       name: "Multiple Brands/Startups",
    //       description: "Worked with multiple Brands/Startups in Pakistan, managing teams and handling social media. Increased client and customer engagement through strategic product marketing",
    //       logo: null,
    //       achievement: "50% efficiency increase",
    //       website: null
    //     }
    //   ]
    // }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A track record of delivering exceptional results across diverse brands and industries.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {experiences.map((exp: ExperienceItem, expIndex: number) => (
            <div key={expIndex} className="mb-16 last:mb-0">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
                <div className="p-8 border-b border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg text-black">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-amber-400">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {exp.projects.map((project: Project, projectIndex: number) => (
                      <a
                        key={projectIndex}
                        href={project.website || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:-translate-y-1 block"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          {project.logo ? (
                            // Removed p-1 from here
                            <div className="w-24 h-24 rounded-lg overflow-hidden bg-white flex-shrink-0 border-2 border-amber-400 shadow-lg">
                              <img
                                src={project.logo}
                                alt={`${project.name} logo`}
                                className="w-full h-full object-cover" // object-cover is still appropriate for 1024x1024 images in a square frame
                              />
                            </div>
                          ) : (
                            // Removed p-1 from here for consistency
                            <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-black font-bold text-xl flex-shrink-0 border-2 border-amber-400 shadow-lg">
                              {project.name.split(' ').map(word => word[0]).join('')}
                            </div>
                          )}
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-white mb-2">
                              {project.name}
                            </h4>
                            <div className="inline-block bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-semibold">
                              {project.achievement}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;