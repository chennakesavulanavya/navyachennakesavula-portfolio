
import React from 'react';
import { ExternalLink, Github, Code, Database, Palette } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AnuSri Interiors",
      description: "Designed and developed a fully responsive and modern website using HTML, CSS, and JavaScript for an interior design business. The site includes dynamic service sections, contact form functionality, and mobile-friendly design to enhance user experience and brand presence.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://anusriinteriors.netlify.app/",
      githubUrl: "https://github.com/chennakesavulanavya/AnuSri-Interiors",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "Firebase", "CSS3", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and interactive data visualization.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      id: 5,
      title: "Data Analytics Dashboard",
      description: "A Python-based dashboard for data visualization and analysis with interactive charts and filters.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "Flask", "SQL", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Backend"
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with user authentication, private messaging, and group chat features.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work, featuring modern web applications built with cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.liveUrl}
                      className="p-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors transform hover:scale-110"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors transform hover:scale-110"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-purple-600/20 border border-purple-500/30 rounded text-purple-400 text-xs">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-400 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a 
                      href={project.liveUrl}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-center"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="px-4 py-2 border border-gray-600 text-gray-300 text-sm rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
