
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative pt-16 sm:pt-12 md:pt-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/25 relative">
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                <div className="text-6xl font-bold text-cyan-400">NC</div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-600/20 animate-pulse"></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in leading-tight">
            Navya Chennakesavula
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Turning ideas into interactive digital experiences with modern web technologies
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="/Navya_Chennakesavula_Resume.pdf" 
              download="Navya_Chennakesavula_Resume.pdf"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
            
            <button 
              onClick={() => scrollToSection('#projects')}
              className="border-2 border-cyan-400 px-8 py-3 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="https://github.com/chennakesavulanavya" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/navya-141103nav/" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:navya14112003@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('#about')}
            className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors animate-fade-in" 
            style={{ animationDelay: '1s' }}
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
