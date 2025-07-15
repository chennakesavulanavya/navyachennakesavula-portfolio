
import React from 'react';
import { Code, Database, Wrench, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 88 }
      ],
      color: "cyan"
    },
    {
      title: "Backend", 
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 85 },
        { name: "SQL", level: 90 },
        { name: "MongoDB", level: 75 }
      ],
      color: "purple"
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 88 },
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 95 }
      ],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: {
        gradient: "from-cyan-500 to-cyan-600",
        text: "text-cyan-400",
        border: "border-cyan-500/30",
        bg: "bg-cyan-500/10"
      },
      purple: {
        gradient: "from-purple-500 to-purple-600", 
        text: "text-purple-400",
        border: "border-purple-500/30",
        bg: "bg-purple-500/10"
      },
      pink: {
        gradient: "from-pink-500 to-pink-600",
        text: "text-pink-400", 
        border: "border-pink-500/30",
        bg: "bg-pink-500/10"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a855f7' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const colors = getColorClasses(category.color);
              
              return (
                <div 
                  key={category.title}
                  className={`bg-gray-900/50 border ${colors.border} rounded-xl p-6 hover:border-opacity-70 transition-all duration-300 transform hover:scale-105`}
                  style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 ${colors.bg} rounded-lg ${colors.text} mr-4`}>
                      {category.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${colors.text}`}>
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className={`text-sm ${colors.text}`}>{skill.level}%</span>
                        </div>
                        
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
