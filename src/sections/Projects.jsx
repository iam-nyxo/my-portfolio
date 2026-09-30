import { projectsData } from '../data';
import GlassCard from '../components/GlassCard';

// Featured Projects Section
export default function Projects() {
  return (
    <section id="projects" className="py-12 space-y-6">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
        <p className="text-slate-400 text-sm">Recent application developments and ongoing builds.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, idx) => (
          <GlassCard key={idx} className="flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className={`text-xs px-2.5 py-1 rounded-full border ${project.badgeColor} font-medium flex items-center gap-1.5`}>
                  {project.status === "Ongoing" && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>}
                  {project.status}
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60">
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}