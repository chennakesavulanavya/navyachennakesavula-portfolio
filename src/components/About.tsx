
import React from 'react';
import { Code, Database, Server, Palette } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Development", 
      description: "Building robust server-side applications and APIs"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Design",
      description: "Designing efficient database structures and queries"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Crafting beautiful and user-friendly interfaces"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322d3ee' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi! I'm <span className="text-cyan-400 font-semibold">Navya Ch</span>, a passionate Full Stack Developer 
                with a strong foundation in modern web technologies. I love creating digital experiences that are both 
                functional and beautiful.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm currently pursuing my <span className="text-purple-400 font-semibold">B.Tech degree with an 8.02 CGPA</span>, 
                where I've developed expertise in <span className="text-cyan-400">HTML, CSS, JavaScript, SQL, and Python</span>. 
                My goal is to build innovative solutions that make a positive impact.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or learning about the latest trends in web development.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL', 'Python', 'Git'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-cyan-400 mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
