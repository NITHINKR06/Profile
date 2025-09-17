import { useState, useEffect } from 'react';
import { Mail, Github, MapPin, Send, Sparkles, Instagram } from 'lucide-react';

const Contact = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // This useEffect for the mouse glow effect can remain.
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const personal = {
    email: 'nithinpoojari717@gmail.com',
    github: 'https://github.com/NITHINKR06',
    linkedin: 'https://linkedin.com/in/nithinkr06',
    location: 'Chikkamagalur, India',
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Drop me a line',
      href: `mailto:${personal.email}`,
      gradient: 'from-blue-400 to-purple-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Check my repos',
      href: personal.github,
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@_nithin.kr_',
      href: 'https://instagram.com/_nithin.kr_',
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: null,
      gradient: 'from-emerald-400 to-teal-600',
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute top-40 right-32 w-96 h-96 bg-blue-400/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-80 h-80 bg-purple-400/15 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className="relative z-10 px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="justify-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium">Available for work</span>
            </div>

            <h3 className="text-6xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Let's Connect
            </h3>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Sparkles className="text-cyan-400 animate-spin" size={28} />
              <span className="text-2xl text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold">
                Create Something Amazing
              </span>
              <Sparkles
                className="text-purple-400 animate-spin"
                size={28}
                style={{ animationDirection: 'reverse' }}
              />
            </div>

            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate on your next project? I'd love to hear about your ideas and
              bring them to life.
            </p>

            {/* LinkedIn Badge */}
            <div className="mt-8 flex justify-center">
              <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="large"
                data-theme="dark"
                data-type="HORIZONTAL"
                data-vanity="nithinkr06"
                data-version="v1"
              >
                <a
                  className="badge-base__link LI-simple-link"
                  href="https://in.linkedin.com/in/nithinkr06?trk=profile-badge"
                ></a>
              </div>
            </div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 justify-center items-center">
            {contactItems.map((item, index) => {
              const IconComponent = item.icon;
              const isClickable = item.href !== null;

              const CardContent = (
                <div className="group relative h-full justify-center items-center cursor-pointer flex-1">
                  <div className="relative p-8 h-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`}
                    ></div>

                    <div className="relative mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-500 shadow-2xl`}
                      >
                        <IconComponent size={28} className="text-white" />
                      </div>

                      <div
                        className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl mx-auto blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                      ></div>
                    </div>

                    <div className="text-center relative">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {item.label}
                      </h3>
                      <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>

                    {isClickable && (
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Send size={16} className="text-white/80" />
                      </div>
                    )}
                  </div>
                </div>
              );

              return isClickable ? (
                <a
                  key={index}
                  href={item.href!}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {CardContent}
                </a>
              ) : (
                <div key={index}>{CardContent}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;