export default function GlassCard({ children, className = '' }) {
  return (
    <div className={`animated-glow-card ${className}`}>
      <div className="animated-glow-card-inner p-6">
        {children}
      </div>
    </div>
  );
}