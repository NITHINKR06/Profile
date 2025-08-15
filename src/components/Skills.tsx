import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Server, 
  Wrench,
  Palette,
  Globe,
  Smartphone,
  Cloud,
  GitBranch,
  Terminal,
  Figma,
  FileText
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
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-3 h-3 bg-pink-400 rounded-full opacity-40"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-1 h-1 bg-purple-300 rounded-full opacity-70"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {portfolioData.skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.1 
              }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {skillCategory.category}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {skillCategory.items.map((skill, skillIndex) => {
                  const IconComponent = skillIcons[skill] || Code2;
                  
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                      }}
                      viewport={{ once: true }}
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          <div className="relative inline-block">
            <p className="text-lg text-gray-400 italic max-w-2xl mx-auto">
              "The best way to predict the future is to create it."
            </p>
            <p className="text-purple-400 mt-2 font-medium">- Peter Drucker</p>
            
            {/* Floating skill icons around quote */}
            <motion.div
              className="absolute -top-4 -left-8 opacity-20"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Code2 size={20} className="text-purple-400" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -right-8 opacity-20"
              animate={{
                rotate: -360,
                scale: [1, 1.3, 1]
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
            >
              <Database size={18} className="text-pink-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};