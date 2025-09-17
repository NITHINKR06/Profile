import React, { useState } from "react";
import { Award, Calendar, MapPin, X } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Certification = () => {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const certifications = [...portfolioData.certifications].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section id="certifications" className="py-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-6">
            <Award size={20} className="text-amber-400" />
            <span className="text-amber-300 font-medium">
              Achievements & Certifications
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Click any card to view full details and certificate image.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer relative rounded-2xl border border-white/10
                         bg-white/5 backdrop-blur-md overflow-hidden
                         transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-amber-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-amber-300 text-sm mb-4">{cert.issuer}</p>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-yellow-400" />
                    <span>{cert.date}</span>
                  </div>
                  {cert.location && (
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-amber-400" />
                      <span>{cert.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal popup */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative w-full max-w-3xl mx-4 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/95">
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="p-8 space-y-6 overflow-y-auto max-h-[90vh]">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedCert.title}
                  </h3>
                  <p className="text-amber-300 text-lg mb-4">
                    {selectedCert.issuer}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-yellow-400" />
                      <span>{selectedCert.date}</span>
                    </div>
                    {selectedCert.location && (
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-amber-400" />
                        <span>{selectedCert.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Certificate Image */}
                {selectedCert.image && (
                  <div className="rounded-xl overflow-hidden border border-white/10 shadow-md shadow-amber-500/10">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full object-contain"
                    />
                  </div>
                )}

                {/* Description */}
                <div className="space-y-3">
                  {selectedCert.description.map((desc: string, i: number) => (
                    <p
                      key={i}
                      className="text-gray-300 leading-relaxed text-sm md:text-base"
                    >
                      {desc}
                    </p>
                  ))}
                </div>

                {/* Skills */}
                {selectedCert.skills && (
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">
                      Skills Gained
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-lg border border-white/10 bg-gradient-to-r from-slate-700 to-slate-600 text-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certification;
