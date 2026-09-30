import { useState } from 'react';

// Navigation Bar Component with Working Clicks and White Hover Animation
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Links Data Array
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Contact", href: "#contact" },
  ];

  // Smooth Scroll Click Handler
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = href;
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 max-w-5xl mx-auto pointer-events-auto">
      <nav className="crystal-glass animated-glow-border rounded-full px-6 py-3 flex items-center justify-between shadow-2xl transition-all relative z-50 fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50" >
        {/* Brand Logo Link */}
        <a 
          href="#hero" 
          onClick={(e) => handleScroll(e, '#hero')}
          className="text-lg font-bold tracking-wider text-white flex items-center gap-2 cursor-pointer group"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent group-hover:text-white transition-colors">Nyxo</span>
          <span className="text-xs text-slate-400 font-normal">.dev</span>
        </a>

        {/* Desktop Links Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="nav-link-glow text-sm font-medium text-slate-300 hover:text-white transition-all cursor-pointer py-1 px-2 rounded-lg hover:bg-white/10"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown Menu Container */}
      {isOpen && (
        <div className="md:hidden mt-2 crystal-glass rounded-2xl p-4 flex flex-col space-y-3 relative z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm text-slate-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-xl transition-all cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}