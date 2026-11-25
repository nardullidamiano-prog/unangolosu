import { ChevronDown } from 'lucide-react';
import { heroPhoto } from '@/lib/data';
import Img from './Img';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image with Ken Burns effect */}
      <div className="absolute inset-0">
        <Img
          photo={heroPhoto}
          className="h-full w-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <p className="text-white/70 text-xs sm:text-sm tracking-luxe uppercase mb-6 reveal is-visible">
          Costermano sul Garda · Veneto
        </p>
        <h1 className="font-serif-display text-white text-5xl sm:text-7xl lg:text-8xl leading-[1.05] max-w-4xl text-balance">
          Un Angolo sul Garda
        </h1>
        <p className="mt-8 text-white/85 text-base sm:text-lg lg:text-xl font-light max-w-2xl leading-relaxed text-balance">
          «Un piccolo angolo di tranquillità, dove il fascino del passato incontra la bellezza del Lago di Garda.»
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollTo('camere')}
            className="text-xs tracking-luxe uppercase px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/40 text-white hover:bg-white hover:text-sand-900 transition-all duration-500"
          >
            Scopri le Camere
          </button>
          <button
            onClick={() => scrollTo('contatti')}
            className="text-xs tracking-luxe uppercase px-8 py-4 border border-white/40 text-white hover:bg-white hover:text-sand-900 transition-all duration-500"
          >
            Prenota Ora
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('struttura')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300"
        aria-label="Scorri"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </button>
    </section>
  );
}
