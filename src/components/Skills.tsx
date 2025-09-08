import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';


const SkillCard = ({ skill, index }: { skill: { name: string; logo: string }, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.08,
        boxShadow: "0 12px 25px rgba(139, 92, 246, 0.2)",
        transition: { duration: 0.4, ease: "easeInOut" } // 👈 smooth hover
      }}
      whileTap={{
        scale: 0.97,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className="group relative bg-gradient-to-t from-slate-800/50 to-slate-900/50 
                 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 
                 hover:border-purple-400/50 transition-all duration-300"
    >
      {/* Subtle hover glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                      rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 text-center">
        {/* Logo/Icon */}
        {skill.logo.endsWith(".svg") ? (
          <motion.img
            src={skill.logo}
            alt={skill.name}
            className="w-12 h-12 mx-auto mb-4"
            whileHover={{ rotate: [0, -5, 5, -5, 0] }} // 👈 smooth wiggle
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        ) : (
          <motion.span
            className="text-4xl mb-4 inline-block"
            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {skill.logo}
          </motion.span>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
          {skill.name}
        </h3>
      </div>
    </motion.div>
  );
};

const CategoryTab = ({ 
  category, 
  isActive, 
  onClick 
}: { 
  category: string; 
  isActive: boolean; 
  onClick: () => void; 
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative 
        px-3 py-2 text-sm        /* 👈 smaller default for mobile */
        sm:px-5 sm:py-2.5 sm:text-base /* 👈 medium for tablets */
        md:px-6 md:py-3 md:text-lg     /* 👈 full size for desktop */
        rounded-full font-medium 
        transition-all duration-300
        whitespace-nowrap           /* 👈 prevent text breaking */
        ${isActive 
          ? "text-white" 
          : "text-slate-400 hover:text-white"}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{category}</span>
    </motion.button>
  );
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const categories = portfolioData.skills.map((skill) => skill.category);

  return (
    <section id="skills" className="min-h-screen from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            style={{
              background: "linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Technologies and tools I use to create exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 bg-slate-800/50 backdrop-blur-sm p-2 rounded-full border border-slate-700/50">
            {categories.map((category) => (
              <CategoryTab
                key={category}
                category={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
           {portfolioData.skills
              .find((cat) => cat.category === activeCategory)
              ?.items.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-12 mt-20"
        >
          {[
            { number: "20+", label: "Technologies" },
            { number: "3+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};