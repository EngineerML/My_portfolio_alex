import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import avatarImage from '../../assests/images/avatar_alex.jpeg';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <img src={avatarImage} alt="Chongzhi Wei" className="w-64 h-64 mx-auto mb-6 rounded-full object-cover" />
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-6 text-gray-900">
          Hi, I'm <span className="text-blue-600">Chongzhi Wei</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Full Stack Developer with AI Backend expertise building intelligent applications
        </p>
        
        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="https://github.com/EngineerML"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <Github size={24} className="text-gray-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/chongzhi-wei/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <Linkedin size={24} className="text-gray-700" />
          </a>
          <a
            href="mailto:alexchong@outlook.com"
            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <Mail size={24} className="text-gray-700" />
          </a>
        </div>
        
        <button
          onClick={() => scrollToSection('projects')}
          className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
        >
          View My Work
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
}