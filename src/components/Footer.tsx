
import React from 'react';
import { Heart, Github, Linkedin, Mail, ChevronUp } from 'lucide-react';
import { Logo } from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/chennakesavulanavya", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/navya-141103nav/", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:navya14112003@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110"
      >
        <ChevronUp size={20} />
      </button>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="md" />
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Navya Chennakesavula
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative digital experiences 
              with modern web technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Let's Connect</h3>
            <div className="space-y-2 text-gray-400">
              <p>Ready to start your next project?</p>
              <a 
                href="mailto:navya14112003@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                navya14112003@gmail.com
              </a>
            </div>
            <div className="pt-4">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Navya Chennakesavula. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
