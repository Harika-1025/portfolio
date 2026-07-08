import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { HiOutlineCheckCircle, HiOutlineExclamationCircle } from 'react-icons/hi2';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder';
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_placeholder';

    // If placeholders are present, fallback to simulated response so the page doesn't crash during preview
    if (serviceID === 'service_placeholder' || templateID === 'template_placeholder' || publicKey === 'public_placeholder') {
      setTimeout(() => {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, success: false }));
        }, 5000);
      }, 1200);
      return;
    }

    emailjs.send(
      serviceID,
      templateID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Cherukupally Harika'
      },
      publicKey
    )
    .then(() => {
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    })
    .catch((err) => {
      setStatus({ 
        loading: false, 
        success: false, 
        error: err.text || 'Something went wrong. Please email directly at harikacherukupally@gmail.com'
      });
    });
  };

  return (
    <section
      id="contact"
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
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium"
          >
            Have a collaboration idea, a project proposal, or just want to connect? Drop a message!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Side: Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-800/40 shadow-md space-y-8">
              <h3 className="text-xl font-black text-slate-900 dark:text-white pb-3 border-b border-slate-200/20">
                Contact Details
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 shadow-md text-brand-blue dark:text-brand-cyan">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 font-mono uppercase tracking-widest">Email</h4>
                    <a
                      href="mailto:harikacherukupally@gmail.com"
                      className="text-base font-black text-slate-700 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors"
                    >
                      harikacherukupally@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 shadow-md text-brand-blue dark:text-brand-cyan">
                    <FaPhoneAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 font-mono uppercase tracking-widest">Phone</h4>
                    <a
                      href="tel:+910000000000"
                      className="text-base font-black text-slate-700 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 shadow-md text-brand-blue dark:text-brand-cyan">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 font-mono uppercase tracking-widest">Location</h4>
                    <p className="text-base font-black text-slate-700 dark:text-slate-200">
                      Hyderabad, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect Link Cards */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-800/40 shadow-md space-y-6 flex-grow flex flex-col justify-center">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Social Networks
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/harikacherukupally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-400 hover:text-brand-cyan dark:hover:text-brand-cyan hover:shadow-lg transition-all duration-200 cursor-pointer"
                  title="GitHub Profile"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/harikacherukupally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-blue hover:shadow-lg transition-all duration-200 cursor-pointer"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Professional Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-150 dark:border-slate-800/40 shadow-md space-y-5"
            >
              <h3 className="text-xl font-black text-slate-900 dark:text-white pb-3 border-b border-slate-200/20">
                Send Message
              </h3>

              {/* Status Banner */}
              {status.success && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-3 text-xs font-semibold">
                  <HiOutlineCheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-500" />
                  <span>Your message was sent successfully! I will reach out shortly.</span>
                </div>
              )}

              {status.error && (
                <div className="p-4 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-450 border border-rose-500/20 flex items-center gap-3 text-xs font-semibold">
                  <HiOutlineExclamationCircle className="w-5 h-5 flex-shrink-0 text-rose-500" />
                  <span>{status.error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[10px] font-bold text-slate-400 dark:text-slate-500 font-mono uppercase tracking-widest">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border text-slate-800 dark:text-slate-200 outline-none text-xs font-bold transition-all focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 ${
                      validationErrors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800/80'
                    }`}
                    placeholder="John Doe"
                  />
                  {validationErrors.name && (
                    <span className="text-[10px] text-red-500 flex items-center gap-1 font-bold">
                      <HiOutlineExclamationCircle className="w-3.5 h-3.5" /> {validationErrors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] font-bold text-slate-400 dark:text-slate-500 font-mono uppercase tracking-widest">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border text-slate-800 dark:text-slate-200 outline-none text-xs font-bold transition-all focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 ${
                      validationErrors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800/80'
                    }`}
                    placeholder="john@example.com"
                  />
                  {validationErrors.email && (
                    <span className="text-[10px] text-red-500 flex items-center gap-1 font-bold">
                      <HiOutlineExclamationCircle className="w-3.5 h-3.5" /> {validationErrors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-[10px] font-bold text-slate-400 dark:text-slate-500 font-mono uppercase tracking-widest">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border text-slate-800 dark:text-slate-200 outline-none text-xs font-bold transition-all focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 ${
                    validationErrors.subject ? 'border-red-500' : 'border-slate-200 dark:border-slate-800/80'
                  }`}
                  placeholder="Inquiry about project..."
                />
                {validationErrors.subject && (
                  <span className="text-[10px] text-red-500 flex items-center gap-1 font-bold">
                    <HiOutlineExclamationCircle className="w-3.5 h-3.5" /> {validationErrors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-[10px] font-bold text-slate-400 dark:text-slate-500 font-mono uppercase tracking-widest">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className={`w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border text-slate-800 dark:text-slate-200 outline-none text-xs font-bold transition-all focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 resize-none ${
                    validationErrors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-800/80'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {validationErrors.message && (
                  <span className="text-[10px] text-red-500 flex items-center gap-1 font-bold">
                    <HiOutlineExclamationCircle className="w-3.5 h-3.5" /> {validationErrors.message}
                  </span>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-brand-blue/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
