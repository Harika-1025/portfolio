import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaPython, FaJava, FaBrain, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import { HiCheckBadge } from 'react-icons/hi2';

const certifications = [
  {
    title: "AWS IoT Cloud Engineer Internship",
    organization: "AWS / SmartInternz",
    issueDate: "2024",
    icon: FaAws,
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    credentialId: "AWS-IoT-2024-829",
    url: "#"
  },
  {
    title: "Python Full Stack Internship",
    organization: "Industrial Technical Academy",
    issueDate: "2023",
    icon: FaPython,
    color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    credentialId: "PY-FS-INT-9831",
    url: "#"
  },
  {
    title: "NPTEL Machine Learning",
    organization: "NPTEL / IIT Madras",
    issueDate: "2024",
    icon: FaBrain,
    color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    credentialId: "NPTEL-ML-2024-SW12",
    url: "#"
  },
  {
    title: "NPTEL Programming in Java",
    organization: "NPTEL / IIT Kharagpur",
    issueDate: "2023",
    icon: FaJava,
    color: "text-red-500 bg-red-500/10 border-red-500/20",
    credentialId: "NPTEL-JAVA-2023-SW04",
    url: "#"
  }
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 overflow-hidden"
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
            Certifications & Licenses
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-150 dark:border-slate-800/40 shadow-lg flex flex-col sm:flex-row gap-6 items-start hover:border-brand-blue/30 dark:hover:border-brand-cyan/30 hover:shadow-xl transition-all duration-350 group hover:-translate-y-1"
              >
                {/* Left logo area */}
                <div className={`p-4 rounded-2xl border flex-shrink-0 ${cert.color} group-hover:scale-110 transition-transform duration-350 self-center sm:self-start`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Right content area */}
                <div className="flex-grow space-y-2 text-center sm:text-left w-full">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    <HiCheckBadge className="w-4 h-4 text-emerald-500" />
                    <span>Verified Credentials</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-1.5 sm:gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <span>{cert.organization}</span>
                    <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
                    <span>Issued: {cert.issueDate}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-3 text-xs border-t border-slate-100 dark:border-slate-800/60">
                    <span className="font-mono text-[9px] text-slate-400 font-bold">ID: {cert.credentialId}</span>
                    <a
                      href={cert.url}
                      className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300 font-bold text-[10px] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      View Certificate
                      <FaExternalLinkAlt className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
