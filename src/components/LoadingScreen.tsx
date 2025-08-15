import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const Particle = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0,
      }}
      animate={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

const GlitchText = ({ children, className }: { children: React.ReactNode; className: string }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150);
    }, 2000 + Math.random() * 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="relative">
      <motion.div
        className={className}
        animate={isGlitching ? {
          x: [0, -2, 2, -1, 1, 0],
          textShadow: [
            "0 0 0 transparent",
            "2px 0 0 #ff00ff, -2px 0 0 #00ffff",
            "-2px 0 0 #ff00ff, 2px 0 0 #00ffff",
            "0 0 0 transparent"
          ]
        } : {}}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.div>
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
      <motion.div
        className="w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, rgba(236,72,153,0.05) 50%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(236,72,153,0.1) 40%, transparent 60%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 0],
        }}
        transition={{
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
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
      color: "#8b5cf6"
    },
    { 
      start: 15, 
      end: 35, 
      text: "Loading Core Modules...", 
      subText: "React • TypeScript • Tailwind",
      duration: 1500,
      color: "#06b6d4"
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
      color: "#f59e0b"
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
      color: "#8b5cf6"
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
        stageProgress += stepSize * (0.8 + Math.random() * 0.4); // Variable speed
        const currentProgress = stage.start + Math.min(stageProgress, stageRange);
        
        setProgress(currentProgress);
        
        if (stageProgress >= stageRange) {
          clearInterval(stageTimer);
          stageIndex++;
          stageProgress = 0;
          
          if (stageIndex >= loadingStages.length) {
            setTimeout(onComplete, 800);
          } else {
            setTimeout(processStage, 200); // Brief pause between stages
          }
        }
      }, 50);
    };
    
    // Start the first stage after a brief delay
    setTimeout(processStage, 300);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        filter: "blur(10px)"
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px"
          animate={{
            y: [0, window.innerHeight],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500 to-transparent w-px"
          animate={{
            x: [0, window.innerWidth],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <Particle key={i} delay={i * 0.1} />
      ))}

      {/* Loading Orb Background */}
      <LoadingOrb />

      <div className="text-center z-10 relative">
        {/* Main Title with Glitch Effect */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "backOut",
            delay: 0.2 
          }}
          className="mb-8"
        >
          <GlitchText className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '300% 300%',
                background: 'linear-gradient(45deg, #a855f7, #ec4899, #06b6d4, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Nithin K R
            </motion.span>
          </GlitchText>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl md:text-2xl text-purple-300 mt-4 font-light tracking-wider"
          >
            <motion.span
              animate={{ 
                color: ["#c084fc", "#f472b6", "#06b6d4", "#c084fc"] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Full Stack Developer
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Enhanced Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="w-96 mx-auto mb-6"
        >
          
          {/* Loading Text Section */}
          <div className="text-center mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={loadingText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mb-2"
              >
                <h3 className="text-xl font-semibold text-purple-300 mb-1">
                  {loadingText}
                </h3>
                <motion.p
                  className="text-sm text-purple-400/80 font-mono"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {subText}
                </motion.p>
              </motion.div>
            </AnimatePresence>
            
            {/* Progress Percentage */}
            <div className="flex justify-between items-center mt-4">
              <motion.div
                className="text-cyan-400 text-sm font-mono bg-slate-800/50 px-3 py-1 rounded-full border border-cyan-500/30"
                key={Math.floor(progress)}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {Math.floor(progress)}% Complete
              </motion.div>
              
              <motion.div
                className="text-purple-400 text-sm font-mono"
                animate={{ 
                  color: [loadingStages[currentStage]?.color || '#8b5cf6', '#ec4899', loadingStages[currentStage]?.color || '#8b5cf6']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Stage {currentStage + 1}/{loadingStages.length}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Loading Dots */}
        <motion.div
          className="flex justify-center space-x-3 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                background: "linear-gradient(45deg, #a855f7, #ec4899)",
              }}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.3, 1, 0.3],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Code-like Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 font-mono text-xs text-purple-400/70"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <span className="text-cyan-400">$</span> npm run build --production
          </motion.div>
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            className="mt-1"
          >
            <span className="text-green-400">✓</span> Webpack compiled successfully
          </motion.div>
        </motion.div>
      </div>

      {/* Corner Accents */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-purple-500/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-pink-500/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
      />
    </motion.div>
  );
};