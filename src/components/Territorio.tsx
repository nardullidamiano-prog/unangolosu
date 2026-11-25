import { territoryPhotos } from '@/lib/data';
import Img from './Img';
import { useReveal } from '@/hooks/useReveal';
import { Waves, Bike, Footprints, Building2 } from 'lucide-react';

export default function Territorio() {
  const { ref, visible } = useReveal();

  return (
    <section id="territorio" className="py-24 lg:py-32 bg-sand-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center mb-20 reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="text-sand-500 text-xs tracking-luxe uppercase mb-6">Il Territorio</p>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-sand-900 leading-tight text-balance">
            Tra lago, natura e borghi
          </h2>
          <div className="w-16 h-px bg-sand-400 mx-auto my-8" />
          <p className="text-sand-700 text-lg leading-relaxed font-light text-balance">
            A un chilometro dal lago, Costermano è il punto di partenza ideale per
            esplorare il Garda. Tra ciclovie, sentieri di collina e borghi affacciati
            sull'acqua, ogni giornata offre una nuova scoperta.
          </p>
        </div>

        {/* Photo strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-20">
          {territoryPhotos.map((p, i) => (
            <figure
              key={i}
              className={`relative group overflow-hidden ${i === 1 ? 'md:mt-10' : ''}`}
            >
              <Img
                photo={p}
                className="w-full h-[280px] lg:h-[380px] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-5">
                <span className="text-white/90 text-xs tracking-wide-luxe uppercase">{p.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          <FeatureCard
            icon={<Waves size={28} />}
            title="Il Lago"
            text="A circa 1 km, le rive del Garda vi aspettano per bagni, tramonti e sport acquatici."
          />
          <FeatureCard
            icon={<Bike size={28} />}
            title="La Ciclovia"
            text="Pochi passi e siete sulla pista ciclabile che costeggia il lago, tra ulivi e vedute."
          />
          <FeatureCard
            icon={<Footprints size={28} />}
            title="Sentieri"
            text="Passeggiate di collina tra oliveti e vigneti, con il lago sullo sfondo."
          />
          <FeatureCard
            icon={<Building2 size={28} />}
            title="I Borghi"
            text="Garda, Bardolino, Lazise, Torri del Benaco — gioielli di pietra a pochi minuti."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="text-center px-4">
      <div className="inline-flex items-center justify-center w-16 h-16 border border-sand-300 text-sand-600 mb-6">
        {icon}
      </div>
      <h3 className="font-serif-display text-2xl text-sand-900 mb-3">{title}</h3>
      <p className="text-sand-600 text-sm leading-relaxed font-light">{text}</p>
    </div>
  );
}
