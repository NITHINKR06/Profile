import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, Award, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

// Mock data for demonstratio

const Experience = () => {
  const { experience } = portfolioData;
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index:any) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 px-4  min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full mb-6">
            <Briefcase size={20} className="text-purple-400" />
            <span className="text-purple-300 font-medium">Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A timeline of professional growth, achievements, and impact across different organizations
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline line with gradient stops */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full">
            <div className="w-full h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full opacity-60" />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400 rounded-full animate-pulse" />
          </div>

          <div className="space-y-12 md:space-y-20">
            {experience.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Enhanced Timeline node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 shadow-lg" />
                    <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-20" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                } max-w-2xl`}>
                  <div 
                    className={`
                      relative overflow-hidden rounded-2xl backdrop-blur-sm
                      bg-gradient-to-br from-white/10 to-white/5 
                      border border-white/20 shadow-2xl
                      transition-all duration-500 ease-out
                      hover:scale-[1.02] hover:shadow-purple-500/20
                      ${expandedCard === index ? 'shadow-purple-500/30' : ''}
                    `}
                  >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
                    <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent rounded-full" />
                    
                    <div className="relative p-6 md:p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                            {exp.position}
                          </h3>
                          <p className="text-xl text-purple-300 mb-3 font-medium">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} className="text-pink-400" />
                              <span>{exp.period}</span>
                            </div>
                            {exp.location && (
                              <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-purple-400" />
                                <span>{exp.location}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-3">
                          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
                            <Briefcase size={24} className="text-white" />
                          </div>
                          <button
                            onClick={() => toggleCard(index)}
                            className="flex items-center gap-1 text-xs text-purple-300 hover:text-purple-200 transition-colors"
                          >
                            <TrendingUp size={14} />
                            {expandedCard === index ? 'Less' : 'More'}
                          </button>
                        </div>
                      </div>

                      {/* Achievements Preview */}
                      {exp.achievements && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-200"
                            >
                              <Award size={12} />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Description */}
                      <div className="space-y-3 mb-6">
                        {exp.description.slice(0, expandedCard === index ? exp.description.length : 2).map((desc, descIndex) => (
                          <div
                            key={descIndex}
                            className="flex items-start gap-3 group"
                          >
                            <div className="mt-2 transition-transform group-hover:translate-x-1">
                              <ChevronRight 
                                size={16} 
                                className="text-purple-400 group-hover:text-pink-400 transition-colors" 
                              />
                            </div>
                            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors flex-1">
                              {desc}
                            </p>
                          </div>
                        ))}
                        
                        {!expandedCard && exp.description.length > 2 && (
                          <button
                            onClick={() => toggleCard(index)}
                            className="text-purple-400 hover:text-purple-300 text-sm ml-7 transition-colors"
                          >
                            +{exp.description.length - 2} more achievements...
                          </button>
                        )}
                      </div>

                      {/* Technologies */}
                      {exp.technologies && expandedCard === index && (
                        <div className="mt-6 pt-6 border-t border-white/10">
                          <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg text-xs text-gray-200 border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Decorative corner elements */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-tr-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 pt-16 border-t border-white/10"/>

      </div>
    </section>
  );
};

export default Experience;