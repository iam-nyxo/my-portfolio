import { personalInfo } from '../data';
import GlassCard from '../components/GlassCard';

// About Me Section Component
export default function About() {
  return (
    <section id="about" className="py-12 space-y-6">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold text-white tracking-tight">{personalInfo.about.title}</h2>
        <p className="text-slate-400 text-sm">Background and core focus areas.</p>
      </div>

      <GlassCard className="space-y-6">
        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          {personalInfo.about.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
          {personalInfo.about.highlights.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{item.label}</span>
              <p className="text-slate-200 text-sm font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}