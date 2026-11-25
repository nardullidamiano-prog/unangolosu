import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-sand-50/95 backdrop-blur-md py-4 shadow-[0_1px_0_0_rgba(168,153,127,0.3)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleClick('home')}
          className="flex flex-col items-start group"
        >
          <span
            className={`font-serif-display text-xl sm:text-2xl leading-none transition-colors duration-500 ${
              scrolled ? 'text-sand-900' : 'text-white'
            }`}
          >
            Un Angolo sul Garda
          </span>
          <span
            className={`text-[0.6rem] sm:text-[0.65rem] tracking-luxe uppercase mt-1 transition-colors duration-500 ${
              scrolled ? 'text-sand-500' : 'text-white/70'
            }`}
          >
            Luxury Rooms
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`text-xs tracking-wide-luxe uppercase transition-colors duration-300 hover:text-sand-400 ${
                scrolled ? 'text-sand-700' : 'text-white/85'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('contatti')}
            className={`text-xs tracking-wide-luxe uppercase px-5 py-2.5 border transition-all duration-300 ${
              scrolled
                ? 'border-sand-900 text-sand-900 hover:bg-sand-900 hover:text-sand-50'
                : 'border-white/70 text-white hover:bg-white hover:text-sand-900'
            }`}
          >
            Prenota
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden ${scrolled ? 'text-sand-900' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-0 bg-sand-50 z-40 flex flex-col items-center justify-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="font-serif-display text-2xl text-sand-900 tracking-wide"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('contatti')}
            className="mt-4 text-xs tracking-luxe uppercase px-8 py-3 border border-sand-900 text-sand-900"
          >
            Prenota
          </button>
        </div>
      )}
    </header>
  );
}
