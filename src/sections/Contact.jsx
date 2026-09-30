import { useState } from 'react';
import GlassCard from '../components/GlassCard';

// Contact Form Section with Web3Forms Integration
export default function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const formData = new FormData(e.target);
    // Added your Web3Forms Access Key
    formData.append("access_key", "1049e097-9d6b-4297-a6eb-da70ab2d5721"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 space-y-6">
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-white tracking-tight">Get In Touch</h2>
        <p className="text-slate-400 text-sm">Send a message for project inquiries or software engineering collaborations.</p>
      </div>

      <GlassCard className="max-w-xl mx-auto space-y-4">
        {/* Success Alert Banner */}
        {status === "success" && (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm text-center">
            ✓ Thank you! Your message has been sent successfully.
          </div>
        )}

        {/* Error Alert Banner */}
        {status === "error" && (
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm text-center">
            ✕ Something went wrong. Please check your connection and try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Your Name</label>
            <input 
              type="text" 
              name="name"
              required
              placeholder="Enter your name" 
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-700/60 text-white text-sm focus:outline-none focus:border-cyan-400 transition" 
            />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Your Email</label>
            <input 
              type="email" 
              name="email"
              required
              placeholder="Enter your email" 
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-700/60 text-white text-sm focus:outline-none focus:border-cyan-400 transition" 
            />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Message</label>
            <textarea 
              name="message"
              rows="4" 
              required
              placeholder="Your message..." 
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-700/60 text-white text-sm focus:outline-none focus:border-cyan-400 transition"
            ></textarea>
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition shadow-lg shadow-cyan-500/20 cursor-pointer disabled:opacity-50"
          >
            {loading ? "Sending Message..." : "Send Message"}
          </button>
        </form>
      </GlassCard>
    </section>
  );
}