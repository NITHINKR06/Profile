import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const Particle = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
      initial={{
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
        opacity: 0,
      }}
      animate={{
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
        opacity: [0, 1, 0],
        scale: [0, 2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

const FloatingShapes = () => {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(${Math.random() * 360}deg, #3b82f6, #8b5cf6, #ec4899)`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

const GlitchText = ({ children, className }: { children: React.ReactNode; className: string }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  const [isGlitchActive, setIsGlitchActive] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let glitchTimeout: NodeJS.Timeout;

    const scheduleGlitch = () => {
      if (!isMounted) return;
      
      const delay = 4000 + Math.random() * 3000; // 4-7 seconds between glitches
      glitchTimeout = setTimeout(() => {
        if (isMounted) {
          setIsGlitching(true);
          setTimeout(() => {
            if (isMounted) {
              setIsGlitching(false);
              scheduleGlitch();
            }
          }, 200);
        }
      }, delay);
    };

    scheduleGlitch();

    return () => {
      isMounted = false;
      if (glitchTimeout) clearTimeout(glitchTimeout);
    };
  }, []);

  return (
    <div className="relative">
      <motion.div
        className={className}
        animate={isGlitching ? {
          x: [0, -3, 3, -2, 2, 0],
          filter: [
            "none",
            "hue-rotate(90deg) contrast(200%)",
            "hue-rotate(-90deg) contrast(200%)",
            "none"
          ]
        } : {}}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.div>
      {isGlitching && (
        <>
          <motion.div
            className={`${className} absolute inset-0 text-red-500 opacity-70`}
            initial={{ x: -2, opacity: 0.7 }}
            animate={{ x: 2, opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {children}
          </motion.div>
          <motion.div
            className={`${className} absolute inset-0 text-cyan-500 opacity-70`}
            initial={{ x: 2, opacity: 0.7 }}
            animate={{ x: -2, opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {children}
          </motion.div>
        </>
      )}
    </div>
  );
};

const LoadingOrb = () => {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {/* Outer Ring */}
      <motion.div
        className="w-80 h-80 rounded-full border-2 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30"
        style={{
          background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
          WebkitMask: "radial-gradient(circle, transparent 50%, black 51%)",
          mask: "radial-gradient(circle, transparent 50%, black 51%)",
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      
      {/* Inner Ring */}
      <motion.div
        className="absolute w-60 h-60 rounded-full"
        style={{
          background: "conic-gradient(from 180deg, #10b981, #06b6d4, #8b5cf6, #10b981)",
          WebkitMask: "radial-gradient(circle, transparent 60%, black 61%)",
          mask: "radial-gradient(circle, transparent 60%, black 61%)",
          opacity: 0.4,
        }}
        animate={{
          rotate: [360, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          rotate: { duration: 12, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Center Glow */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 opacity-20 blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing System...");
  const [subText, setSubText] = useState("");

  const loadingStages = [
    { 
      start: 0, 
      end: 15, 
      text: "Initializing System...", 
      subText: "Setting up environment",
      duration: 1200,
      color: "#3b82f6"
    },
    { 
      start: 15, 
      end: 35, 
      text: "Loading Core Modules...", 
      subText: "React • TypeScript • Tailwind",
      duration: 1500,
      color: "#8b5cf6"
    },
    { 
      start: 35, 
      end: 55, 
      text: "Fetching Portfolio Data...", 
      subText: "Projects • Skills • Experience",
      duration: 1000,
      color: "#10b981"
    },
    { 
      start: 55, 
      end: 75, 
      text: "Optimizing Performance...", 
      subText: "Compressing assets • Lazy loading",
      duration: 800,
      color: "#06b6d4"
    },
    { 
      start: 75, 
      end: 92, 
      text: "Finalizing Interface...", 
      subText: "Applying animations • UI polish",
      duration: 700,
      color: "#ec4899"
    },
    { 
      start: 92, 
      end: 100, 
      text: "Ready to Launch!", 
      subText: "Welcome to my portfolio",
      duration: 500,
      color: "#10b981"
    },
  ];

  useEffect(() => {
    let stageIndex = 0;
    let stageProgress = 0;
    
    const processStage = () => {
      if (stageIndex >= loadingStages.length) return;
      
      const stage = loadingStages[stageIndex];
      setLoadingText(stage.text);
      setSubText(stage.subText);
      setCurrentStage(stageIndex);
      
      const stageRange = stage.end - stage.start;
      const stepSize = stageRange / (stage.duration / 50);
      
      const stageTimer = setInterval(() => {
        stageProgress += stepSize * (0.8 + Math.random() * 0.4);
        const currentProgress = stage.start + Math.min(stageProgress, stageRange);
        
        setProgress(currentProgress);
        
        if (stageProgress >= stageRange) {
          clearInterval(stageTimer);
          stageIndex++;
          stageProgress = 0;
          
          if (stageIndex >= loadingStages.length) {
            setTimeout(onComplete, 800);
          } else {
            setTimeout(processStage, 200);
          }
        }
      }, 50);
    };
    
    setTimeout(processStage, 300);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.05,
        filter: "blur(20px)"
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        {/* Scanning Lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-0.5 opacity-60"
          animate={{
            y: [0, typeof window !== 'undefined' ? window.innerHeight : 600],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500 to-transparent w-0.5 opacity-40"
          animate={{
            x: [0, typeof window !== 'undefined' ? window.innerWidth : 800],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5,
          }}
        />
      </div>

      {/* Floating Shapes */}
      <FloatingShapes />

      {/* Enhanced Particles */}
      {[...Array(15)].map((_, i) => (
        <Particle key={i} delay={i * 0.2} />
      ))}

      {/* Loading Orb Background */}
      <LoadingOrb />

      <div className="text-center z-10 relative max-w-2xl mx-auto px-6">
        {/* Main Title with Enhanced Glitch Effect */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            ease: "backOut",
            delay: 0.3 
          }}
          className="mb-12"
        >
          <GlitchText className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
            <motion.span
              animate={{
                backgroundImage: [
                  'linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981)',
                  'linear-gradient(90deg, #8b5cf6, #10b981, #3b82f6)',
                  'linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6)',
                  'linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981)'
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Nithin K R
            </motion.span>
          </GlitchText>
        </motion.div>

        {/* Enhanced Progress Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="w-full max-w-md mx-auto mb-8"
        >
          {/* Progress Bar Container */}
          <div className="relative mb-6">
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full relative"
                style={{
                  width: `${progress}%`
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
            
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full blur-sm opacity-50"
              style={{
                width: `${progress}%`
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Loading Text Section */}
          <div className="text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={loadingText}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                  {loadingText}
                </h3>
                <motion.p
                  className="text-sm text-gray-400 font-mono tracking-wider"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {subText}
                </motion.p>
              </motion.div>
            </AnimatePresence>
            
            {/* Progress Stats */}
            <div className="flex justify-between items-center mt-6">
              <motion.div
                className="text-blue-400 text-sm font-mono bg-slate-800/80 px-4 py-2 rounded-full border border-blue-500/30 backdrop-blur-sm"
                key={Math.floor(progress)}
                initial={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                animate={{ scale: 1, boxShadow: "0 0 10px rgba(59, 130, 246, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                {Math.floor(progress)}%
              </motion.div>
              
              <motion.div
                className="text-gray-400 text-sm font-mono bg-slate-800/50 px-4 py-2 rounded-full border border-gray-600/30"
                animate={{ 
                  borderColor: `${loadingStages[currentStage]?.color}50`
                }}
                transition={{ duration: 0.5 }}
              >
                {currentStage + 1}/{loadingStages.length}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Loading Animation */}
        <motion.div
          className="flex justify-center space-x-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Modern Corner Accents */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16"
        initial={{ opacity: 0, scale: 0, rotate: -90 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1.8, duration: 0.8, ease: "backOut" }}
      >
        <div className="w-full h-full border-l-2 border-t-2 border-blue-500/40 rounded-tl-lg" />
        <motion.div
          className="absolute -inset-2 border-l border-t border-blue-400/20 rounded-tl-lg"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
      
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16"
        initial={{ opacity: 0, scale: 0, rotate: 90 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 2, duration: 0.8, ease: "backOut" }}
      >
        <div className="w-full h-full border-r-2 border-b-2 border-purple-500/40 rounded-br-lg" />
        <motion.div
          className="absolute -inset-2 border-r border-b border-purple-400/20 rounded-br-lg"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </motion.div>
    </motion.div>
  );
};