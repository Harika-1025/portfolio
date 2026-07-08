import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaBrain, FaServer, FaCogs, FaBookOpen } from 'react-icons/fa';

const highlights = [
  {
    icon: FaGraduationCap,
    title: "Computer Science Engineering",
    description: "Deep academic focus on software design, systems, architectures, algorithms, data structures, databases, and network fundamentals."
  },
  {
    icon: FaCode,
    title: "Java Full Stack Developer",
    description: "Orchestrating end-to-end enterprise architectures, handling everything from SQL schemas to frontend styling."
  },
  {
    icon: FaBrain,
    title: "AI & ML Enthusiast",
    description: "Passionate about machine learning, model optimization, neural networks, natural language processing, and predictions."
  },
  {
    icon: FaServer,
    title: "REST API & Spring Boot",
    description: "Building secure, high-performance web APIs with Spring Boot, JPA, MVC, Hibernate, and JSON integrations."
  },
  {
    icon: FaCogs,
    title: "Python & Data Science",
    description: "Implementing data analysis workflows, cleaning datasets, training estimators, and evaluating statistical metrics."
  },
  {
    icon: FaBookOpen,
    title: "Problem Solving & Learning",
    description: "Eager to tackle complex data challenges, solve problems on coding platforms, and master emerging technologies."
  }
];

const About = () => {
  return (
    <section
      id="about"
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
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Bio narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-center lg:text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
              Bridging Intelligent Algorithms with Scalable Systems
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base font-medium">
              I am a **Computer Science Engineering** student who loves writing code and exploring data patterns. My background blends core software design principles with predictive machine learning models.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base font-medium">
              Whether building endpoints with **Spring Boot & Hibernate**, training models in **Python**, or styling modern responsive web layouts in **React & Tailwind**, I'm focused on clean code, performance, and responsive user experiences.
            </p>

            {/* Micro details / academic focus */}
            <div className="grid grid-cols-2 gap-4 pt-4 max-w-sm mx-auto lg:mx-0">
              <div className="border-l-4 border-brand-blue pl-4 text-left">
                <span className="block text-xl font-black text-slate-900 dark:text-white">B.Tech</span>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Comp. Science</span>
              </div>
              <div className="border-l-4 border-brand-purple pl-4 text-left">
                <span className="block text-xl font-black text-slate-900 dark:text-white">8.49</span>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Active CGPA</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Grid layout cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/40 shadow-md flex flex-col space-y-3 hover:border-brand-blue/30 dark:hover:border-brand-cyan/30 hover:shadow-xl transition-all duration-350 group hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-brand-cyan/10 text-brand-blue dark:text-brand-cyan flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
