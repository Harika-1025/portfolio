import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaLaptopCode } from 'react-icons/fa';
import { SiJavascript, SiSpringboot, SiHibernate, SiMysql, SiMongodb, SiTensorflow, SiScikitlearn, SiPostman } from 'react-icons/si';
import { HiCheckCircle } from 'react-icons/hi2';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: FaJava,
    skills: [
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "Python", icon: FaPython, color: "text-blue-500" },
      { name: "C", icon: null, color: "text-slate-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" }
    ],
    bgGlow: "from-blue-500/10 to-indigo-500/5 border-blue-500/20"
  },
  {
    title: "Frontend Technologies",
    icon: FaReact,
    skills: [
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-600" },
      { name: "React", icon: FaReact, color: "text-cyan-400 animate-spin-slow" }
    ],
    bgGlow: "from-cyan-500/10 to-blue-500/5 border-cyan-500/20"
  },
  {
    title: "Backend Development",
    icon: SiSpringboot,
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, color: "text-emerald-500" },
      { name: "Spring MVC", icon: null, color: "text-emerald-400" },
      { name: "Hibernate", icon: SiHibernate, color: "text-amber-600" },
      { name: "Servlets", icon: null, color: "text-orange-400" },
      { name: "JSP", icon: null, color: "text-blue-400" },
      { name: "JDBC", icon: null, color: "text-teal-400" },
      { name: "REST APIs", icon: null, color: "text-purple-400" }
    ],
    bgGlow: "from-emerald-500/10 to-teal-500/5 border-emerald-500/20"
  },
  {
    title: "Database Systems",
    icon: SiMysql,
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
      { name: "SQL", icon: null, color: "text-indigo-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" }
    ],
    bgGlow: "from-indigo-500/10 to-purple-500/5 border-indigo-500/20"
  },
  {
    title: "AI & Machine Learning",
    icon: SiTensorflow,
    skills: [
      { name: "Machine Learning", icon: null, color: "text-violet-500" },
      { name: "Deep Learning", icon: null, color: "text-pink-500" },
      { name: "NLP", icon: null, color: "text-cyan-500" },
      { name: "Scikit-Learn", icon: SiScikitlearn, color: "text-orange-500" },
      { name: "TensorFlow", icon: SiTensorflow, color: "text-amber-500" }
    ],
    bgGlow: "from-purple-500/10 to-pink-500/5 border-purple-500/20"
  },
  {
    title: "Tools & Utilities",
    icon: FaLaptopCode,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, color: "text-slate-800 dark:text-white" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "VS Code", icon: FaLaptopCode, color: "text-blue-500" }
    ],
    bgGlow: "from-amber-500/10 to-orange-500/5 border-amber-500/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Skills = () => {
  return (
    <section
      id="skills"
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
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium"
          >
            A curated summary of programming frameworks, libraries, developer tools, and intelligence suites.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className={`p-8 rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/40 shadow-lg bg-gradient-to-br ${category.bgGlow} flex flex-col justify-between h-full group hover:shadow-xl hover:border-slate-350 dark:hover:border-slate-700 transition-all duration-350 hover:-translate-y-1`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-md text-brand-purple dark:text-brand-cyan group-hover:scale-115 transition-transform duration-350">
                      {CategoryIcon && <CategoryIcon className="w-6 h-6" />}
                    </div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid/Flex List */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <span
                          key={skill.name}
                          className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white/70 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800/50 flex items-center gap-2 hover:bg-gradient-to-r hover:from-brand-blue/10 hover:to-brand-purple/10 hover:text-brand-purple dark:hover:text-brand-cyan transition-all duration-200 cursor-default"
                        >
                          {SkillIcon ? (
                            <SkillIcon className={`w-3.5 h-3.5 ${skill.color}`} />
                          ) : (
                            <HiCheckCircle className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan opacity-80" />
                          )}
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Skills;
