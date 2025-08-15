import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, GraduationCap, FolderOpen, Mail, Download } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Code },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: 'Projects', href: '#projects', icon: FolderOpen },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href:any) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Icon Only */}
      <motion.nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ${
          scrolled 
            ? 'backdrop-blur-xl bg-black/20 border border-white/10 shadow-2xl shadow-purple-500/10' 
            : 'backdrop-blur-md bg-black/10 border border-white/5'
        } rounded-2xl px-4 py-3 hidden lg:block`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center space-x-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.slice(1);
            
            return (
              <div key={item.label} className="relative">
                <motion.button
                  onClick={() => scrollToSection(item.href)}
                  className={`relative p-3 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? 'text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredItem(item.label)}
                  onHoverEnd={() => setHoveredItem(null)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl"
                      layoutId="activeDesktop"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover background */}
                  {!isActive && (
                    <motion.div
                      className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  )}
                  
                  {/* Icon */}
                  <motion.div
                    className="relative z-10"
                    animate={isActive ? { 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    } : { rotate: 0, scale: 1 }}
                    transition={{ 
                      duration: isActive ? 0.6 : 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    <Icon size={20} />
                  </motion.div>
                  
                  {/* Glow effect for active */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-30 blur-lg"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.button>

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredItem === item.label && (
                    <motion.div
                      className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                      initial={{ opacity: 0, y: -10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.8 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 25,
                        duration: 0.2
                      }}
                    >
                      <div className="bg-black/90 backdrop-blur-md text-white text-sm px-3 py-2 rounded-lg border border-white/10 shadow-xl">
                        {item.label}
                        {/* Tooltip arrow */}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 border-l border-t border-white/10 rotate-45"></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          
          {/* Separator */}
          <motion.div 
            className="w-px h-8 bg-white/20 mx-2"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          
          {/* Resume Button */}
          <div className="relative">
            <motion.a
              href="/resume.pdf"
              download
              className="relative p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredItem('Resume')}
              onHoverEnd={() => setHoveredItem(null)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <motion.div
                className="relative z-10"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              >
                <Download size={20} />
              </motion.div>
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl -skew-x-12"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
              />
            </motion.a>

            {/* Resume Tooltip */}
            <AnimatePresence>
              {hoveredItem === 'Resume' && (
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                  initial={{ opacity: 0, y: -10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.8 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 25,
                    duration: 0.2
                  }}
                >
                  <div className="bg-black/90 backdrop-blur-md text-white text-sm px-3 py-2 rounded-lg border border-white/10 shadow-xl">
                    Download Resume
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 border-l border-t border-white/10 rotate-45"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-6 right-6 z-50 lg:hidden p-3 bg-black/20 backdrop-blur-md border border-white/10 rounded-xl text-white"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute inset-0 bg-black/50 backdrop-blur-md" 
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              className="absolute top-0 right-0 w-80 h-full bg-black/90 backdrop-blur-xl border-l border-white/10"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="p-6 pt-20">
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.href.slice(1);
                    
                    return (
                      <motion.button
                        key={item.label}
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ x: 8 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.label}</span>
                      </motion.button>
                    );
                  })}
                  
                  <motion.a
                    href="/resume.pdf"
                    download
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={20} />
                    <span>Download Resume</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}