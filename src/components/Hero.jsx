import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi2';

const words = [
  "AI/ML Engineer",
  "Java Full Stack Developer",
  "Software Engineer"
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');

  // Typing effect logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2200);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 45 : 85);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    setText(words[index].substring(0, subIndex));
  }, [subIndex, index]);

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-500"
    >
      {/* Animated Gradient Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-brand-blue/10 dark:bg-brand-blue/5 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 40, 0],
            y: [0, 40, -50, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-purple/10 dark:bg-brand-purple/5 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 0.9, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 left-1/3 w-80 h-80 bg-brand-cyan/5 dark:bg-brand-cyan/5 rounded-full blur-[70px]"
        />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Floating Ring */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/12 w-12 h-12 rounded-full border-2 border-brand-blue/20 dark:border-brand-blue/10"
        />
        {/* Floating Diamond */}
        <motion.div
          animate={{ y: [0, 15, 0], rotate: 45 }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/6 w-8 h-8 border-2 border-brand-purple/20 dark:border-brand-purple/10"
        />
        {/* Floating Hexagon */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: -360 }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/12 w-10 h-10 border-2 border-brand-cyan/20 dark:border-brand-cyan/10 rounded-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 rounded-full glass-panel text-xs sm:text-sm font-semibold tracking-wider text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/20 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
            Open to Career Opportunities
          </motion.div>

          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              Cherukupally Harika
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-700 dark:text-slate-300 h-10 flex items-center justify-center lg:justify-start"
            >
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent font-display">
                {text}
              </span>
              <span className="w-1 h-8 bg-brand-purple dark:bg-brand-cyan ml-1 animate-pulse" />
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium"
          >
            Aspiring Computer Science Engineer passionate about Artificial Intelligence, Machine Learning, Java Full Stack Development, and building scalable software solutions.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center gap-4 text-slate-600 dark:text-slate-400"
          >
            <a
              href="https://github.com/Harika-1025"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/harika-cherukupally-5a1bb4376"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-blue dark:hover:text-brand-blue transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="resume.pdf"
              download="Harika_Resume.pdf"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-white font-bold tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-blue/20 transition-all duration-350 hover:-translate-y-0.5"
            >
              <FaDownload className="w-4 h-4" />
              Download Resume
            </a>
            <button
              onClick={() => handleScrollTo('#projects')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 text-white font-bold tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-purple/20 transition-all duration-350 hover:-translate-y-0.5"
            >
              View Projects
              <FaArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollTo('#contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-panel text-slate-800 dark:text-white font-bold tracking-wide flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors duration-200 hover:-translate-y-0.5"
            >
              <FaEnvelope className="w-4 h-4" />
              Hire Me
            </button>
          </motion.div>
        </div>

        {/* Hero Right Content: Large Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          {/* Picture Framing with Glows */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 aspect-square rounded-3xl overflow-hidden border border-slate-200/20 dark:border-slate-800/20 shadow-2xl p-2.5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md">
            
            {/* Ambient Inner Frame Colors */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 via-brand-purple/20 to-brand-cyan/20 opacity-30 rounded-3xl" />
            
            <div className="w-full h-full rounded-2xl overflow-hidden relative border border-slate-100/10 shadow-inner">
              <img
                src="profile.png"
                alt="Cherukupally Harika"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="eager"
              />
            </div>
            
            {/* Tech tag highlights floating in the framing */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-1 -right-1 px-3 py-1 rounded-xl bg-slate-900/80 dark:bg-slate-950/80 border border-slate-800 text-white text-[10px] font-bold font-mono tracking-wider shadow-lg"
            >
              Java
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-1 -left-1 px-3 py-1 rounded-xl bg-slate-900/80 dark:bg-slate-950/80 border border-slate-800 text-white text-[10px] font-bold font-mono tracking-wider shadow-lg"
            >
              Python
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-12 -right-3 px-3 py-1 rounded-xl bg-slate-900/80 dark:bg-slate-950/80 border border-slate-800 text-white text-[10px] font-bold font-mono tracking-wider shadow-lg"
            >
              PyTorch
            </motion.div>
          </div>
        </motion.div>
        
      </div>

      {/* Mouse Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer" onClick={() => handleScrollTo('#about')}>
        <span className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-1.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-500 hover:text-brand-purple transition-colors duration-200"
        >
          <HiArrowDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
