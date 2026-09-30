import React from 'react';
import { personalInfo } from '../data';
import GlassCard from '../components/GlassCard';

// Hero Section Component with Social Links
export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-12 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 space-y-6">
        {/* Availability Badge */}
        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full crystal-glass text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Available for Projects
        </div> */}

        {/* Name and Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">{personalInfo.name}</span>
        </h1>

        <p className="text-xl text-slate-300 font-medium">
          {personalInfo.role}
        </p>

        <p className="text-slate-400 max-w-xl leading-relaxed">
          {personalInfo.bio}
        </p>

        {/* Action Buttons & Social Icons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Download CV Button */}
          <a
            href="/cv.pdf"
            download
            className="crystal-glass animated-glow-border px-6 py-3 rounded-xl text-white font-semibold text-sm hover:bg-white/20 transition-all shadow-lg flex items-center gap-2 group cursor-pointer"
          >
            <svg className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
          >
            Contact Me
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pl-2">
            {/* GitHub */}
            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noreferrer"
              className="p-3 rounded-xl crystal-glass text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href={personalInfo.socials.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="p-3 rounded-xl crystal-glass text-slate-300 hover:text-cyan-400 hover:bg-white/10 transition-all cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Profile Image Frame with Cyan/Indigo Ambient Glow */}
      <div className="w-full md:w-80 flex justify-center relative">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 w-72 h-80 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-2xl blur-2xl -z-10"></div>

        <GlassCard className="p-2 w-72 h-80 relative flex items-center justify-center overflow-hidden border border-slate-700/60 shadow-2xl shadow-cyan-500/10 group">
          <img 
            src="/profile.jpg" 
            alt={personalInfo.name} 
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105 contrast-[1.05] brightness-[1.02]"
          />
        </GlassCard>
      </div>
    </section>
  );
}