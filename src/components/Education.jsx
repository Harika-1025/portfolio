import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaBookOpen } from 'react-icons/fa';
import { HiOutlineCalendarDays, HiOutlineMapPin } from 'react-icons/hi2';

const timelineData = [
  {
    type: "degree",
    title: "B.Tech in Computer Science Engineering",
    institution: "Engineering College / University Campus",
    period: "2022 - 2026",
    location: "India",
    icon: FaGraduationCap,
    color: "from-brand-blue to-indigo-650",
    details: [
      "Specialization in software engineering, intelligent systems, and database design.",
      "Key coursework: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, Machine Learning.",
      "Active CGPA: 9.12/10"
    ]
  },
  {
    type: "intermediate",
    title: "Intermediate MPC (Maths, Physics, Chemistry)",
    institution: "Junior College Academy",
    period: "2020 - 2022",
    location: "India",
    icon: FaSchool,
    color: "from-brand-purple to-pink-650",
    details: [
      "Concentration in advanced Mathematics, Physics, and Chemistry.",
      "Laid mathematical foundation for machine learning algorithms and engineering logic."
    ]
  },
  {
    type: "ssc",
    title: "SSC (Secondary School Certificate)",
    institution: "High School Academy",
    period: "2020 Graduated",
    location: "India",
    icon: FaSchool,
    color: "from-brand-cyan to-teal-600",
    details: [
      "Completed secondary education with honors.",
      "Participated in science fairs and academic debates."
    ]
  }
];

const Education = () => {
  return (
    <section
      id="education"
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
            Education Timeline
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline Core */}
        <div className="max-w-4xl mx-auto relative pt-4">
          
          {/* Vertical Middle Line (Visible on screens larger than mobile) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800/80 -translate-x-[1px]" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-stretch w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Circle Center-Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-50 dark:bg-slate-900 border-4 border-brand-blue z-10 flex items-center justify-center shadow-lg" />

                  {/* Left Spacer Block or Card Wrapper */}
                  <div className="md:w-[45%] w-full pl-16 md:pl-0" />

                  {/* Right Card Wrapper */}
                  <div className={`md:w-[45%] w-full pl-16 md:pl-0 ${
                    isEven ? "md:pr-10" : "md:pl-10"
                  }`}>
                    <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-800/40 shadow-lg hover:shadow-xl transition-all duration-350 hover:border-brand-blue/30 dark:hover:border-brand-cyan/30 group hover:-translate-y-1">
                      
                      {/* Badge / Type */}
                      <div className="flex items-center gap-3 text-brand-blue dark:text-brand-cyan mb-3">
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-[9px] font-black uppercase tracking-wider">
                          {item.type}
                        </span>
                      </div>

                      {/* Header details */}
                      <h3 className="text-lg font-black text-slate-900 dark:text-white leading-snug">
                        {item.title}
                      </h3>
                      <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 font-sans">
                        {item.institution}
                      </h4>

                      {/* Metadata */}
                      <div className="flex flex-wrap items-center gap-4 mt-3 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <HiOutlineCalendarDays className="w-4 h-4 text-brand-purple" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <HiOutlineMapPin className="w-4 h-4 text-brand-cyan" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Detail points */}
                      <div className="mt-4 pt-4 border-t border-slate-200/25 dark:border-slate-800/40 space-y-2">
                        {item.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-450 leading-relaxed font-medium">
                            <FaBookOpen className="w-3.5 h-3.5 text-brand-cyan/70 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
