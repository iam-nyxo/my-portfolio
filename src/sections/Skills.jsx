import { skillsData } from '../data';
import GlassCard from '../components/GlassCard';

// Tech Stack & Skills Section
export default function Skills() {
  return (
    <section id="skills" className="py-12 space-y-6">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold text-white tracking-tight">Skills & Tech Stack</h2>
        <p className="text-slate-400 text-sm">Technologies and programming languages I work with.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skillsData.map((skill, idx) => (
          <GlassCard key={idx} className="flex items-center justify-between p-4">
            <span className="text-slate-200 font-medium text-sm">{skill.name}</span>
            {skill.tag && (
              <span className="text-[10px] mx-3 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {skill.tag}
              </span>
            )}
          </GlassCard>
        ))}
      </div>
    </section>
  );
}