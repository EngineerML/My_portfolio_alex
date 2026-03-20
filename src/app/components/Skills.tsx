import { Database, Figma, Layers, Smartphone } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      category: 'Frontend',
      icon: <Layers className="text-blue-600" size={32} />,
      items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      icon: <Database className="text-green-600" size={32} />,
      items: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL'],
    },
    {
      category: 'AI/ML',
      icon: <Smartphone className="text-purple-600" size={32} />,
      items: ['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain'],
    },
    {
      category: 'DevOps',
      icon: <Figma className="text-pink-600" size={32} />,
      items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center text-gray-900">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl mb-4 text-gray-900">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}