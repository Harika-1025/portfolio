import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="border-t border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 py-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Upper Footer section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand/Monogram Logo */}
          <div className="text-center md:text-left space-y-2">
            <button
              onClick={handleScrollToTop}
              className="text-2xl font-black bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent font-display hover:opacity-80 transition-opacity cursor-pointer"
            >
              CH
            </button>
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-555">
              AI/ML Engineer & Java Full Stack Developer
            </p>
          </div>

          {/* Quick Links Menu */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider font-mono">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-brand-blue transition-colors">Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-brand-blue transition-colors">About</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="hover:text-brand-blue transition-colors">Skills</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-brand-blue transition-colors">Projects</a>
            <a href="#certifications" onClick={(e) => handleNavClick(e, '#certifications')} className="hover:text-brand-blue transition-colors">Certificates</a>
            <a href="#education" onClick={(e) => handleNavClick(e, '#education')} className="hover:text-brand-blue transition-colors">Education</a>
            <a href="#coding-profiles" onClick={(e) => handleNavClick(e, '#coding-profiles')} className="hover:text-brand-blue transition-colors">Profiles</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-brand-blue transition-colors">Contact</a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Harika-1025"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-brand-cyan dark:hover:text-brand-cyan hover:bg-white dark:hover:bg-slate-900 transition-all duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/cherukupally-harika"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-brand-blue dark:hover:text-brand-blue hover:bg-white dark:hover:bg-slate-900 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:cherukupallyharika06@gmail.com"
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-brand-purple dark:hover:text-brand-purple hover:bg-white dark:hover:bg-slate-900 transition-all duration-200"
              aria-label="Email"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Lower Footer section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-8 border-t border-slate-200/25 dark:border-slate-800/40 gap-4 text-xs text-slate-400 font-medium">
          <div>
            © 2026 Cherukupally Harika. All Rights Reserved.
          </div>
          
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-850 hover:text-brand-purple dark:hover:text-brand-cyan text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
          >
            Back To Top
            <FaArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
