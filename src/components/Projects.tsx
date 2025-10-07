
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, Palette } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import githubPrManagerImage from '@/assets/github-pr-manager.jpg';

const Projects = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>('');

  const projects = [
    {
      id: 1,
      title: ["AnuSri", "Interiors"],
      description: "Designed and developed a responsive website for AnuSri Interiors using HTML, CSS, and JavaScript to showcase interior design services and gallery.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://anusriinteriors.netlify.app/",
      githubUrl: "https://github.com/chennakesavulanavya/AnuSri-Interiors",
      category: "Web Development"
    },
    {
      id: 2,
      title: ["Student Marks", "Project"],
      description: "Developed a Python-based student marks management system with file handling",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      technologies: ["Python", "File Handling"],
      liveUrl: "#",
      githubUrl: "https://github.com/chennakesavulanavya/Student_Marks",
      category: "Python"
    },
    {
      id: 3,
      title: ["Portfolio", "Website"],
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      liveUrl: "https://navyachportfolio.netlify.app/",
      githubUrl: "https://github.com/chennakesavulanavya/navyachennakesavula-portfolio",
      category: "Frontend"
    },
    {
      id: 4,
      title: ["Task", "Master"],
      description: "A comprehensive task management application for organizing and tracking daily activities and projects.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "JavaScript", "CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/chennakesavulanavya/TaskMaster",
      category: "Web Application"
    },
    {
      id: 5,
      title: ["GitHub PR", "Manager"],
      description: "A powerful tool for managing GitHub pull requests with an intuitive dashboard interface for tracking and reviewing code changes.",
      image: githubPrManagerImage,
      technologies: ["React", "Git", "GitHub API"],
      liveUrl: "https://pr-manager-git.netlify.app/",
      githubUrl: "https://linkedin.com/in/navya-141103nav/",
      category: "Dev Tools"
    }
  ];

  const handleLiveDemoClick = (e: React.MouseEvent, project: any) => {
    if (project.liveUrl === '#') {
      e.preventDefault();
      const projectName = Array.isArray(project.title) ? project.title.join(' ') : project.title;
      setSelectedProject(projectName);
      setShowDialog(true);
    }
  };

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
                    alt={Array.isArray(project.title) ? project.title.join(' ') : project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                   {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.liveUrl}
                      onClick={(e) => handleLiveDemoClick(e, project)}
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
                      {Array.isArray(project.title) ? (
                        <>
                          {project.title[0]}<br />{project.title[1]}
                        </>
                      ) : (
                        project.title
                      )}
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
                      onClick={(e) => handleLiveDemoClick(e, project)}
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

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-gray-800 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white">No Live Demo Available</DialogTitle>
            <DialogDescription className="text-gray-400">
              {selectedProject} has no live demo available
            </DialogDescription>
          </DialogHeader>
          <Button 
            onClick={() => setShowDialog(false)}
            className="bg-cyan-500 hover:bg-cyan-600 text-white"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
