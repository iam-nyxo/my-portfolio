import { personalInfo } from '../data';

// Footer Component
export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/80 text-center space-y-3 text-xs text-slate-500">
      <div className="flex justify-center items-center gap-4">
        <a 
          href={personalInfo.socials.github} 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-slate-300 transition-colors"
        >
          GitHub
        </a>
        <span>•</span>
        <a 
          href={personalInfo.socials.linkedin} 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-cyan-400 transition-colors"
        >
          LinkedIn
        </a>
      </div>
      <p>© {new Date().getFullYear()} RA Pasindu Gimhana (Nyxo).</p>
    </footer>
  );
}