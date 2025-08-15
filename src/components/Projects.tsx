import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Rocket, Clock } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const statusIcons = {
  completed: { icon: Rocket, color: 'text-green-400' },
  'in-progress': { icon: Clock, color: 'text-yellow-400' },
  planned: { icon: Code, color: 'text-blue-400' }
};

export const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-300">
            A showcase of my recent work and creations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const StatusIcon = statusIcons[project.status].icon;
            const statusColor = statusIcons[project.status].color;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="glass-card p-6 rounded-2xl h-full relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -10,
                    boxShadow: '0 20px 40px rgba(168, 85, 247, 0.2)'
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Project Header */}
                  <motion.div
                    className="flex items-start justify-between mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-1">
                      <motion.h3
                        className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {project.title}
                      </motion.h3>
                      <div className="flex items-center gap-2">
                        <StatusIcon size={16} className={statusColor} />
                        <span className={`text-sm capitalize ${statusColor}`}>
                          {project.status.replace('-', ' ')}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      <Code size={20} className="text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Project Description */}
                  <motion.p
                    className="text-gray-300 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-300 rounded-full text-sm border border-purple-500/20"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.2 + 0.5 + techIndex * 0.1 
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Project Links */}
                  <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </motion.a>
                    )}
                    
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 glass-card text-white rounded-lg hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </motion.div>

                  {/* Animated background elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"
                    animate={{
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      delay: index * 0.8,
                    }}
                  />
                  
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-30"
                    animate={{
                      scale: [1, 1.3, 1],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />

                  {/* Hover effect overlay */}
                  {/* <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  /> */}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};