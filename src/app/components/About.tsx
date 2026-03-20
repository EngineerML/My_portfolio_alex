import { Code2, Palette, Rocket } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center text-gray-900">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a full stack developer specializing in AI-powered backend systems. With expertise in both frontend and backend technologies, I build intelligent applications that leverage machine learning and artificial intelligence to solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My passion lies in creating scalable AI solutions, from natural language processing to computer vision, while ensuring seamless integration with user-friendly interfaces. I'm constantly exploring the latest advancements in AI and full stack development.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">Full Stack Development</h3>
              <p className="text-gray-600">
                Building end-to-end applications with modern frameworks and best practices
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Palette className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">AI Backend</h3>
              <p className="text-gray-600">
                Developing intelligent systems with machine learning and AI integration
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">Scalable Solutions</h3>
              <p className="text-gray-600">
                Architecting robust and scalable systems for high-performance applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}