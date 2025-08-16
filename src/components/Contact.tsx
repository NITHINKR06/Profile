import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, Star, Sparkles } from 'lucide-react';

const Contact = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mock portfolio data
  const personal = {
    email: 'hello@developer.com',
    github: 'https://github.com/developer',
    linkedin: 'https://linkedin.com/in/developer',
    location: 'San Francisco, CA'
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Drop me a line',
      href: `mailto:${personal.email}`,
      gradient: 'from-blue-400 to-purple-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Check my repos',
      href: personal.github,
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Let\'s connect',
      href: personal.linkedin,
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: null,
      gradient: 'from-emerald-400 to-teal-600'
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden ">
      {/* Glassmorphism Background Elements */}
      <div className="absolute inset-0">
        {/* Floating glass orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-blue-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-purple-400/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Dynamic mouse follower */}
        {/* <div 
          className="fixed w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out"
          style={{
            left: mousePos.x - 128,
            top: mousePos.y - 128,
          }}
        /> */}
      </div>

      <div className="relative z-10 px-8 py-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
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
              <Sparkles className="text-purple-400 animate-spin" size={28} style={{ animationDirection: 'reverse' }} />
            </div>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate on your next project? I'd love to hear about your ideas and bring them to life.
            </p>

          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactItems.map((item, index) => {
              const IconComponent = item.icon;
              const isClickable = item.href !== null;
              
              const CardContent = (
                <div className="group relative h-full">
                  {/* Glass card */}
                  <div className="relative p-8 h-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`}></div>
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-500 shadow-2xl`}>
                        <IconComponent size={28} className="text-white" />
                      </div>
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl mx-auto blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                    </div>

                    {/* Content */}
                    <div className="text-center relative">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {item.label}
                      </h3>
                      <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    {isClickable && (
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Send size={16} className="text-white/80" />
                      </div>
                    )}
                  </div>

                  {/* Glass reflection effect */}
                  {/* <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div> */}
                </div>
              );

              return isClickable ? (
                <a
                  key={index}
                  href={item.href}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {CardContent}
                </a>
              ) : (
                <div key={index}>
                  {CardContent}
                </div>
              );
            })}

          </div>

          {/* <div className='flex items-center justify-center gap-4 text-gray-400 text-sm mb-8'>
            <a href="https://hits.sh/nithinkr06.vercel.app/"><img alt="Hits"  src="https://hits.sh/nithinkr06.vercel.app.svg?label=%F0%9F%91%80view&extraCount=1&color=f350ef&labelColor=d9d6d6"/></a>
          </div> */}
          
        </div>
      </div>
    </section>
  );
};

export default Contact;