import { roadmapData } from '../data';
import GlassCard from '../components/GlassCard';

// Educational & Career Roadmap Section
export default function Roadmap() {
  return (
    <section id="roadmap" className="py-12 space-y-6">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold text-white tracking-tight">Learning Roadmap</h2>
        <p className="text-slate-400 text-sm">My progress timeline from fundamentals to modern software engineering.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roadmapData.map((step, idx) => (
          <GlassCard key={idx} className="relative space-y-3">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">{step.phase}</span>
            <h3 className="text-lg font-bold text-white">{step.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}