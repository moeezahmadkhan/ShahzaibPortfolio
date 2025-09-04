// import React from 'react';

// const Skills = () => {
//   const skills = [
//     { name: 'Social Media Marketing', percentage: 90, color: 'from-blue-500 to-cyan-500' },
//     { name: 'Sales', percentage: 80, color: 'from-green-500 to-emerald-500' },
//     { name: 'E-commerce', percentage: 70, color: 'from-purple-500 to-violet-500' },
//     { name: 'Branding', percentage: 70, color: 'from-amber-500 to-yellow-500' },
//     { name: 'Content Creation', percentage: 70, color: 'from-pink-500 to-rose-500' }
//   ];

//   return (
//     <section id="skills" className="py-20 px-6 bg-black/30">
//       <div className="container mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
//               Skills & Expertise
//             </span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-8"></div>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             A comprehensive skill set built through years of hands-on experience in digital marketing and brand building.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {skills.map((skill, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-amber-400/50 transition-all duration-300"
//               >
//                 <div className="flex justify-between items-center mb-4">
//                   <h3 className="text-xl font-semibold text-white">
//                     {skill.name}
//                   </h3>
//                   <span className="text-amber-400 font-bold text-lg">
//                     {skill.percentage}%
//                   </span>
//                 </div>
                
//                 <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
//                   <div
//                     className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
//                     style={{ 
//                       width: `${skill.percentage}%`,
//                       animation: `slideIn 1.5s ease-out ${index * 0.2}s both`
//                     }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slideIn {
//           from {
//             width: 0%;
//           }
//           to {
//             width: ${skills.map(s => s.percentage)}%;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Skills;