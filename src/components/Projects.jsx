import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaCheckCircle, FaChartBar, FaUserLock, FaCalendarAlt, FaLeaf } from 'react-icons/fa';
import { SiScikitlearn, SiSpringboot, SiMysql, SiReact, SiMongodb } from 'react-icons/si';

const projects = [
  {
    id: 1,
    title: "Loan Approval Prediction System",
    category: "AI & ML",
    description: "An end-to-end machine learning system designed to evaluate and predict applicant loan eligibility by analyzing credit risk factors, demographics, and income levels.",
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "NumPy"],
    features: [
      "Data preprocessing & handling missing values",
      "Class imbalance resolution via SMOTE",
      "Model training (Random Forest, SVM, Logistic Regression)",
      "Evaluation using precision, recall, and ROC-AUC curves"
    ],
    github: "https://github.com/harikacherukupally/loan-approval-prediction",
    demo: "#",
    // Interactive CSS Mockup representing a prediction chart
    mockup: (
      <div className="w-full h-full bg-slate-950 flex flex-col justify-between p-4 font-mono text-[10px] text-emerald-400">
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
          <span>[MODEL EVALUATION]</span>
          <span className="animate-pulse">● TRAINING</span>
        </div>
        <div className="flex-grow flex items-end gap-1.5 pt-4">
          <div className="bg-emerald-500/30 w-full h-[30%] rounded-t"></div>
          <div className="bg-emerald-500/50 w-full h-[55%] rounded-t"></div>
          <div className="bg-emerald-500/70 w-full h-[75%] rounded-t"></div>
          <div className="bg-brand-cyan w-full h-[92%] rounded-t relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-brand-cyan text-[8px]">92%</span>
          </div>
        </div>
        <div className="border-t border-emerald-500/20 pt-2 flex items-center justify-between text-slate-400">
          <span>AUC: 0.941</span>
          <span>Acc: 92.4%</span>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Visitor Tracker System",
    category: "Java Full Stack",
    description: "An enterprise-grade logging and check-in tracker designed to manage visitor records, authenticate personnel, and display analytics for corporate premises.",
    technologies: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "MySQL", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Role-based authentication & route security",
      "Visual real-time visitor count dashboards",
      "Comprehensive CRUD operations with MySQL backend",
      "Auto-generated logs and history download features"
    ],
    github: "https://github.com/harikacherukupally/visitor-tracker",
    demo: "#",
    mockup: (
      <div className="w-full h-full bg-slate-950 p-4 flex flex-col justify-between text-[10px] font-mono text-cyan-400">
        <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
          <span>[VISITOR LOGS]</span>
          <span>ONLINE: 24</span>
        </div>
        <div className="space-y-1.5 flex-grow pt-3">
          <div className="bg-cyan-500/10 p-1.5 rounded border border-cyan-500/20 flex items-center justify-between">
            <span>John Doe - Conf. Room A</span>
            <span className="text-emerald-400">IN: 14:02</span>
          </div>
          <div className="bg-cyan-500/10 p-1.5 rounded border border-cyan-500/20 flex items-center justify-between">
            <span>Alice Smith - Lab 2</span>
            <span className="text-slate-500">OUT: 15:30</span>
          </div>
          <div className="bg-cyan-500/10 p-1.5 rounded border border-cyan-500/20 flex items-center justify-between">
            <span>Bob Johnson - HR</span>
            <span className="text-emerald-400">IN: 15:45</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Smart Coding Practice & Student Evaluation",
    category: "Java Full Stack",
    description: "An academic portal that host coding assessments, records student progression, and evaluates submissions automatically via scoring frameworks.",
    technologies: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "JSP", "MySQL", "REST APIs"],
    features: [
      "Interactive code compilation sandbox",
      "Automated test case scoring system",
      "Progress dashboards mapping metrics per skill category",
      "Integrations with external evaluators and profiling API keys"
    ],
    github: "https://github.com/harikacherukupally/smart-coding-practice",
    demo: "#",
    mockup: (
      <div className="w-full h-full bg-slate-950 p-4 flex flex-col justify-between text-[9px] font-mono text-purple-400">
        <div className="flex items-center justify-between border-b border-purple-500/20 pb-2">
          <span>eval_compiler.java</span>
          <span className="text-slate-500">JDK 17</span>
        </div>
        <div className="flex-grow pt-3 text-[8px] text-slate-300 space-y-1 leading-snug">
          <div><span className="text-purple-400">public class</span> Evaluator {"{"}</div>
          <div className="pl-3"><span className="text-purple-400">public boolean</span> test(String output) {"{"}</div>
          <div className="pl-6 text-emerald-400">return output.equals(expected);</div>
          <div className="pl-3">{"}"}</div>
          <div>{"}"}</div>
        </div>
        <div className="bg-brand-purple/20 p-1 text-center rounded border border-brand-purple/30 text-white font-bold text-[8px]">
          [COMPILE SUCCESS: 10/10 TESTS PASSED]
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "EcoTrack Daily Sustainability Logger",
    category: "Frontend",
    description: "A tracking dashboard built to help individuals monitor their environmental footprint by logging routines, calculating metrics, and visualising progress.",
    technologies: ["React", "Tailwind CSS", "LocalStorage", "Chart.js"],
    features: [
      "Real-time carbon footprint calculators",
      "Persistent historical data logging via browser storage",
      "Interactive habits checker board with daily scores",
      "Visual chart graphing trends and target tracking"
    ],
    github: "https://github.com/harikacherukupally/ecotrack",
    demo: "#",
    mockup: (
      <div className="w-full h-full bg-slate-950 p-4 flex flex-col justify-between text-[10px] font-mono text-emerald-400">
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
          <span>[ECOTRACK SUMMARY]</span>
          <span>GOAL: -15%</span>
        </div>
        <div className="flex-grow flex items-center justify-center relative my-2">
          {/* Circular progress meter */}
          <div className="w-20 h-20 rounded-full border-4 border-emerald-500/20 border-t-emerald-400 flex items-center justify-center animate-spin-slow">
            <div className="text-white text-xs font-bold text-center font-sans">
              <span className="block text-[8px] text-slate-400 font-mono">SAVED</span>
              84 kg
            </div>
          </div>
        </div>
        <div className="flex justify-between text-[8px] text-slate-400 border-t border-emerald-500/20 pt-2">
          <span>CO2 Offset: 84kg</span>
          <span>Trees: 4.2</span>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "College Technical Event Management System",
    category: "Java Full Stack",
    description: "A scheduler and management hub enabling coordinators to advertise workshops, handle participant registration lists, and trigger ticket approvals.",
    technologies: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "Tailwind CSS"],
    features: [
      "User registrations and event coordinator dashboards",
      "Dynamic scheduler maps and seat allocation counters",
      "Automated email notifications and event updates",
      "Administrator controls for ticket verification"
    ],
    github: "https://github.com/harikacherukupally/event-management",
    demo: "#",
    mockup: (
      <div className="w-full h-full bg-slate-950 p-4 flex flex-col justify-between text-[10px] font-mono text-blue-400">
        <div className="flex items-center justify-between border-b border-blue-500/20 pb-2">
          <span>[EVENT PLANNER]</span>
          <span>SEATS: 84/100</span>
        </div>
        <div className="space-y-1.5 flex-grow pt-3">
          <div className="bg-blue-950/40 p-1.5 rounded border border-blue-900 flex items-center gap-2">
            <FaCalendarAlt className="text-brand-blue" />
            <div className="text-[8px] text-slate-300">
              <div className="font-bold">ML Hackathon 2026</div>
              <div>Starts in 2 days</div>
            </div>
          </div>
          <div className="bg-blue-950/40 p-1.5 rounded border border-blue-900 flex items-center gap-2">
            <FaCode className="text-brand-purple" />
            <div className="text-[8px] text-slate-300">
              <div className="font-bold">Spring Dev Workshop</div>
              <div>Registrations open</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const categories = ["All", "AI & ML", "Java Full Stack", "Frontend"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium"
          >
            A look at enterprise-grade backend systems, machine learning models, and client dashboards.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 shadow-sm cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-350 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                variants={cardVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-800/40 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-350 group hover:border-brand-blue/30 dark:hover:border-brand-cyan/30 h-full w-full"
              >
                {/* SVG/CSS Interactive Mockup Instead of Static Image */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-slate-200/10 flex items-center justify-center bg-slate-950 p-0">
                  <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]">
                    {project.mockup}
                  </div>
                  {/* Category Tag overlay */}
                  <span className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white font-mono text-[9px] font-bold uppercase border border-slate-800 shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {project.description}
                    </p>
                    
                    {/* Key Features List */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-2">Key Highlights</span>
                      {project.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                          <FaCheckCircle className="w-3.5 h-3.5 text-brand-cyan dark:text-brand-cyan mt-0.5 flex-shrink-0 opacity-80" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-[9px] font-extrabold bg-slate-200/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 border border-slate-200/30 dark:border-slate-800/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-200/20 dark:border-slate-800/40">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors cursor-pointer"
                      >
                        <FaGithub className="w-4 h-4" />
                        Code Link
                      </a>
                      {project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors ml-auto cursor-pointer"
                        >
                          <FaExternalLinkAlt className="w-3.5 h-3.5" />
                          Live View
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Projects;
