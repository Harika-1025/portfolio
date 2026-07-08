import React from 'react';
import { motion } from 'framer-motion';
import { Download, Users, Code2, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Resume = () => {
  // Generate data for a mock contribution grid (5 rows x 25 columns)
  const generateMockContributions = () => {
    const grid = [];
    const colors = [
      'bg-slate-100 dark:bg-slate-900', // 0
      'bg-emerald-500/20 dark:bg-emerald-500/10', // 1-2
      'bg-emerald-500/40 dark:bg-emerald-500/30', // 3-4
      'bg-emerald-500/70 dark:bg-emerald-500/60', // 5-6
      'bg-emerald-500 dark:bg-emerald-400' // 7+
    ];

    for (let r = 0; r < 7; r++) {
      const row = [];
      for (let c = 0; c < 30; c++) {
        const rand = Math.random();
        let level = 0;
        if (rand > 0.8) level = 4;
        else if (rand > 0.6) level = 3;
        else if (rand > 0.45) level = 2;
        else if (rand > 0.2) level = 1;
        row.push(colors[level]);
      }
      grid.push(row);
    }
    return grid;
  };

  const contributionGrid = generateMockContributions();

  return (
    <section
      id="resume"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display"
          >
            Resume & Professional Connect
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Block: Resume Download */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 rounded-2xl glass-panel border border-slate-200/50 dark:border-slate-800/50 p-8 flex flex-col justify-between text-center space-y-6 shadow-md hover:border-brand-purple/20 transition-colors duration-300"
          >
            <div className="space-y-4 flex-grow flex flex-col justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple text-white flex items-center justify-center mx-auto shadow-lg shadow-brand-blue/20">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                Download Resume
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Review my academic coursework, industrial project details, and technical certifications. Ready for local viewing or printing.
              </p>
            </div>
            
            <a
              href="resume.pdf"
              download="Harika_Resume.pdf"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan hover:opacity-90 text-white font-bold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-lg shadow-brand-blue/20"
            >
              Download PDF Resume
              <Download className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right Block: GitHub Profile Card & LinkedIn Profile Card */}
          <div className="lg:col-span-8 flex flex-col gap-6 justify-between">
            {/* GitHub Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl glass-panel border border-slate-200/50 dark:border-slate-800/50 p-6 flex flex-col md:flex-row justify-between gap-6 shadow-md hover:border-brand-cyan/20 transition-all duration-300"
            >
              <div className="flex-grow space-y-4">
                {/* User Header */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 overflow-hidden flex items-center justify-center font-display font-bold text-xl text-slate-700 dark:text-slate-300">
                    B
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      Harika
                      <a href="https://github.com/placeholder-username" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 hover:text-white" />
                      </a>
                    </h4>
                    <span className="text-xs font-mono text-slate-500">@placeholder-username</span>
                  </div>
                </div>

                {/* Git Stats */}
                <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-brand-cyan" />
                    <strong>12</strong> followers
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-brand-purple" />
                    <strong>24</strong> repositories
                  </span>
                </div>

                {/* Contributions Mock Calendar */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Contributions (last 30 weeks)</span>
                  <div className="flex gap-1 overflow-x-auto pb-1">
                    {contributionGrid.map((row, rIdx) => (
                      <div key={rIdx} className="flex flex-col gap-1">
                        {row.map((cellClass, cIdx) => (
                          <div
                            key={cIdx}
                            className={`w-2.5 h-2.5 rounded-sm ${cellClass}`}
                            title={`Contribution level at index ${rIdx}-${cIdx}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center md:items-end justify-center">
                <a
                  href="https://github.com/placeholder-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white font-bold text-xs flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4" />
                  View GitHub Profile
                </a>
              </div>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl glass-panel border border-slate-200/50 dark:border-slate-800/50 p-6 flex flex-col md:flex-row justify-between gap-6 shadow-md hover:border-brand-purple/20 transition-all duration-300"
            >
              <div className="flex-grow space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-600/10 text-blue-500 border border-blue-500/20 overflow-hidden flex items-center justify-center font-display font-bold text-xl">
                    LN
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      Harika
                      <a href="https://linkedin.com/in/placeholder-url" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 hover:text-white" />
                      </a>
                    </h4>
                    <span className="text-xs text-slate-500">AI/ML Engineer & Java Full Stack Developer</span>
                  </div>
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>500+ Connections</span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Connect to view industrial recommendations, endorse technical skills, and discuss machine learning or enterprise java opportunities.
                </p>
              </div>

              <div className="flex items-center md:items-end justify-center">
                <a
                  href="https://linkedin.com/in/placeholder-url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-blue-600/20"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
