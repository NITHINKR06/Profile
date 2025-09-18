import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight, Award, Code2 } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Experience = () => {
  const { experience } = portfolioData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 px-4 min-h-screen">
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
            My journey of growth, learning, and impact through diverse roles and challenges
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-10">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              {/* Gradient strip on left */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500" />

              <div className="relative p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{exp.position}</h3>
                    <p className="text-lg text-purple-300 font-medium">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-3">
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
                      onClick={() => toggleExpand(index)}
                      className="text-xs text-purple-300 hover:text-purple-200 transition-colors"
                    >
                      {expandedIndex === index ? "Show Less" : "Show More"}
                    </button>
                  </div>
                </div>

                {/* Achievements */}
                {exp.achievements && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.achievements.map((ach, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-200"
                      >
                        <Award size={12} />
                        {ach}
                      </div>
                    ))}
                  </div>
                )}

                {/* Description */}
                <div className="space-y-3 mb-6">
                  {(expandedIndex === index ? exp.description : exp.description.slice(0, 2)).map(
                    (desc, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="mt-1">
                          <ChevronRight
                            size={16}
                            className="text-purple-400 group-hover:text-pink-400 transition-colors"
                          />
                        </div>
                        <p className="text-gray-300 group-hover:text-white transition-colors">
                          {desc}
                        </p>
                      </div>
                    )
                  )}
                </div>

                {/* Technologies */}
                {exp.technologies && expandedIndex === index && (
                  <div className="pt-6 border-t border-white/10">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                      <Code2 size={14} className="text-pink-400" /> Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-200 rounded-lg text-xs border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
