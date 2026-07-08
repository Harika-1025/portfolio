import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const responsibilities = [
  "Engineered scalable backend service APIs and controller endpoints using Java and Spring Boot framework.",
  "Constructed structural entity relationships, database mappings, and queries using Hibernate ORM and Spring Data JPA.",
  "Designed and optimized relational schemas within MySQL database for low-latency retrieval.",
  "Integrated REST APIs with responsive web layouts ensuring decoupled, microservice-ready architectures.",
  "Conducted unit tests, debugged application bottlenecks, and implemented secure CRUD operations for data management."
];

const Experience = () => {
  return (
    <section
      id="experience"
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
            Professional Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800/60" />

          {/* Timeline Item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full mb-8 group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-[7px] w-4.5 h-4.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple z-10 shadow-lg shadow-brand-blue/30 group-hover:scale-125 transition-transform duration-200" />

            {/* Left Content (Role & Card) */}
            <div className="pl-12 md:pl-0 md:w-[45%] w-full">
              <div className="p-6 rounded-2xl glass-panel border border-slate-200/50 dark:border-slate-800/50 shadow-md group-hover:border-brand-purple/20 transition-all duration-300">
                <div className="flex items-center gap-3 text-brand-purple dark:text-brand-cyan mb-2">
                  <Briefcase className="w-5 h-5" />
                  <span className="font-mono text-xs font-bold tracking-wide uppercase">Internship</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                  Java Full Stack Intern
                </h3>
                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                  Enterprise Software Division
                </h4>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400 dark:text-slate-500 mt-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Jun 2025 - Present</span>
                </div>
              </div>
            </div>

            {/* Empty Space for layout structure */}
            <div className="hidden md:block w-[45%]" />
          </motion.div>

          {/* Detailed Responsibilities Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="pl-12 md:pl-0 md:ml-[55%] md:w-[45%] w-full"
          >
            <div className="p-6 rounded-2xl glass-panel border border-slate-200/40 dark:border-slate-800/40 shadow-lg space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
                Key Contributions
              </h4>
              <ul className="space-y-3">
                {responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Used Badge row */}
              <div className="pt-4 border-t border-slate-200/25 flex flex-wrap gap-1.5">
                {["Java", "Spring Boot", "Spring MVC", "Hibernate", "MySQL", "REST APIs"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-brand-blue/5 dark:bg-brand-cyan/5 text-[10px] font-bold text-brand-purple dark:text-brand-cyan border border-brand-blue/15 dark:border-brand-cyan/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
