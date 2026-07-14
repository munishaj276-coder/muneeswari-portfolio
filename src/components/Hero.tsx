import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../constants/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#030014] overflow-hidden px-6 border-b border-white/5">
      
      {/* Aurora Neon Ambient Glow Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[120px] animate-pulse delay-700 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-cyan-400 tracking-wider uppercase backdrop-blur-md">
            ⚡ Open for Software Roles
          </span>
        </motion.div>

        <motion.h1 
          className="mt-6 text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 tracking-tight"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p 
          className="mt-4 text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {personalInfo.title} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-normal text-lg">
            {personalInfo.education} • {personalInfo.college}
          </span>
        </motion.p>

        {/* CTA Interaction Matrix */}
        <motion.div 
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="#projects" className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-opacity-90 transition duration-300">
            View Projects <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition backdrop-blur-md">
            <Linkedin className="w-4 h-4 text-blue-400" /> LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition backdrop-blur-md">
            <Github className="w-4 h-4 text-slate-300" /> GitHub
          </a>
        </motion.div>

        {/* Floating Code Console Banner */}
        <motion.div 
          className="mt-16 max-w-xl mx-auto p-4 rounded-xl bg-black/60 border border-white/10 text-left font-mono text-xs text-slate-400 shadow-2xl backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex gap-1.5 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <p className="text-cyan-400">$ npm run query-stats</p>
          <p className="text-green-400">✔ Cumulative CGPA: {personalInfo.cgpa}</p>
          <p>✔ Active Stack Status: Production Responsive UI Active</p>
        </motion.div>
      </div>
    </section>
  );
};