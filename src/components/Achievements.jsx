import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaAward, FaCode, FaGraduationCap } from 'react-icons/fa';

const CounterItem = ({ target, suffix = '', label, icon: Icon, isFloat = false }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = parseFloat(target);
    if (isNaN(end)) return;

    const duration = 1600; // Total animation length in milliseconds
    const steps = 50;
    const stepDuration = duration / steps;
    const stepIncrement = (end - start) / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(end);
        clearInterval(timer);
      } else {
        const nextVal = start + stepIncrement * currentStep;
        setCount(isFloat ? parseFloat(nextVal.toFixed(2)) : Math.round(nextVal));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, target, isFloat]);

  return (
    <div
      ref={ref}
      className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-800/40 shadow-lg flex flex-col items-center justify-center space-y-3 hover:border-brand-blue/30 dark:hover:border-brand-cyan/30 hover:shadow-xl transition-all duration-350 hover:-translate-y-1 group"
    >
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-md text-brand-blue dark:text-brand-cyan group-hover:scale-110 transition-transform duration-350">
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white font-display">
        {count.toFixed(isFloat ? 2 : 0)}{suffix}
      </div>
      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
        {label}
      </div>
    </div>
  );
};

const Achievements = () => {
  const stats = [
    { target: "3", suffix: "", label: "Projects Completed", icon: FaBriefcase, isFloat: false },
    { target: "4", suffix: "", label: "Certificates Earned", icon: FaAward, isFloat: false },
    { target: "500", suffix: "+", label: "Coding Problems Solved", icon: FaCode, isFloat: false },
    { target: "8.49", suffix: "/10", label: "Current CGPA", icon: FaGraduationCap, isFloat: true }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <CounterItem
              key={idx}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              isFloat={stat.isFloat}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
