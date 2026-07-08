import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiLeetcode, SiHackerrank, SiCodechef } from 'react-icons/si';
import { FaExternalLinkAlt, FaTerminal, FaLinkedin } from 'react-icons/fa';

const profiles = [
  {
    name: "GitHub",
    username: "@Harika-1025",
    url: "https://github.com/Harika-1025",
    icon: SiGithub,
    color: "hover:border-slate-800 dark:hover:border-white hover:text-slate-900 dark:hover:text-white",
    iconColor: "text-slate-800 dark:text-slate-200",
    bgGlow: "from-slate-500/5 to-transparent",
    stats: "Repositories & Contributions"
  },
  {
    name: "LinkedIn",
    username: "@harika-cherukupally-5a1bb4376",
    url: "https://www.linkedin.com/in/harika-cherukupally-5a1bb4376",
    icon: FaLinkedin,
    color: "hover:border-blue-600 hover:text-blue-600",
    iconColor: "text-blue-600",
    bgGlow: "from-blue-500/5 to-transparent",
    stats: "Professional Networking & Connections"
  },
  {
    name: "LeetCode",
    username: "@harika_573",
    url: "https://leetcode.com/u/harika_573/",
    icon: SiLeetcode,
    color: "hover:border-amber-500 hover:text-amber-500",
    iconColor: "text-amber-500",
    bgGlow: "from-amber-500/5 to-transparent",
    stats: "Data Structures & Algorithms Track"
  },
  {
    name: "HackerRank",
    username: "@23x01a0573",
    url: "https://www.hackerrank.com/profile/23x01a0573",
    icon: SiHackerrank,
    color: "hover:border-emerald-500 hover:text-emerald-500",
    iconColor: "text-emerald-500",
    bgGlow: "from-emerald-500/5 to-transparent",
    stats: "Stars in Java & Problem Solving"
  },
  {
    name: "CodeChef",
    username: "@harika_573",
    url: "https://www.codechef.com/users/harika_573",
    icon: SiCodechef,
    color: "hover:border-amber-700 hover:text-amber-700",
    iconColor: "text-amber-800 dark:text-amber-600",
    bgGlow: "from-amber-850/5 to-transparent",
    stats: "Competitive Coding Challenges"
  }
];

const CodingProfiles = () => {
  return (
    <section
      id="coding-profiles"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Coding & Professional Profiles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium"
          >
            Connect with me across competitive computing, software design, and professional networking portals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {profiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={profile.name}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-800/40 shadow-md flex flex-col justify-between items-center text-center bg-gradient-to-b ${profile.bgGlow} transition-all duration-350 hover:-translate-y-1 hover:shadow-lg ${profile.color}`}
              >
                <div className="flex flex-col items-center space-y-4 w-full">
                  {/* Brand Logo Circle */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-md">
                    <Icon className={`w-8 h-8 ${profile.iconColor}`} />
                  </div>
                  
                  {/* Text details */}
                  <div className="space-y-1 w-full">
                    <h3 className="text-base font-black text-slate-900 dark:text-white">
                      {profile.name}
                    </h3>
                    <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 font-mono truncate">
                      {profile.username}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-450 pt-2 font-medium leading-relaxed min-h-[36px]">
                      {profile.stats}
                    </p>
                  </div>
                </div>

                {/* Visit button */}
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-brand-blue hover:text-white dark:hover:bg-brand-blue border border-slate-200/60 dark:border-slate-800 text-[10px] font-bold tracking-wide flex items-center justify-center gap-1.5 shadow-sm transition-all duration-200 cursor-pointer"
                >
                  Visit Profile
                  <FaExternalLinkAlt className="w-2 h-2" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;
