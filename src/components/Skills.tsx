import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Database, Server, Wrench,
  Palette, Globe, Smartphone, Cloud,
  GitBranch, Terminal, Figma, FileText
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const skillIcons: { [key: string]: React.ComponentType<any> } = {
  'React': Code2,
  'Next.js': Globe,
  'TypeScript': Code2,
  'Tailwind CSS': Palette,
  'GSAP': Smartphone,
  'Three.js': Code2,
  'Node.js': Server,
  'Python': Code2,
  'PostgreSQL': Database,
  'MongoDB': Database,
  'GraphQL': Database,
  'Docker': Cloud,
  'AWS': Cloud,
  'Vercel': Cloud,
  'GitHub Actions': GitBranch,
  'Git': GitBranch,
  'VSCode': Terminal,
  'Figma': Figma,
  'Notion': FileText,
  'Postman': Wrench
};

export const Skills: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto switch tabs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % portfolioData.skills.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background floating elements (same as your code) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* ... keep your decorative motion divs here ... */}
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8 gap-4">
          {portfolioData.skills.map((skillCategory, index) => (
            <button
              key={skillCategory.category}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeIndex === index 
                  ? 'bg-purple-500 text-white shadow-md' 
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'
              }`}
            >
              {skillCategory.category}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <motion.div
          key={portfolioData.skills[activeIndex].category}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {portfolioData.skills[activeIndex].items.map((skill, skillIndex) => {
            const IconComponent = skillIcons[skill] || Code2;
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: skillIndex * 0.05 
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="flex flex-col items-center p-4 rounded-xl bg-transparent hover:bg-white/5 transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mb-3"
                >
                  <IconComponent 
                    size={32} 
                    className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300" 
                  />
                </motion.div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 text-center font-medium">
                  {skill}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quote (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center relative mt-16"
        >
          {/* ... keep your quote block with floating icons ... */}
        </motion.div>
      </div>
    </section>
  );
};
