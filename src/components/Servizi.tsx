import {
  Wind, Wifi, Gift, Coffee, Car, Sparkles, Leaf, MessageCircle,
} from 'lucide-react';
import { services } from '@/lib/data';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, React.ReactNode> = {
  wind: <Wind size={22} />,
  wifi: <Wifi size={22} />,
  gift: <Gift size={22} />,
  coffee: <Coffee size={22} />,
  car: <Car size={22} />,
  sparkles: <Sparkles size={22} />,
  leaf: <Leaf size={22} />,
};

export default function Servizi() {
  const { ref, visible } = useReveal();

  return (
    <section id="servizi" className="py-24 lg:py-32 bg-sand-900 text-sand-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center mb-20 reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="text-sand-400 text-xs tracking-luxe uppercase mb-6">Servizi e Ospitalità</p>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-sand-50 leading-tight text-balance">
            Tutto il comfort, con semplicità
          </h2>
          <div className="w-16 h-px bg-sand-600 mx-auto my-8" />
          <p className="text-sand-300 text-lg leading-relaxed font-light text-balance">
            Pensiamo ai dettagli, perché possiate vivere il Garda senza pensieri.
            Ogni servizio è studiato per un'accoglienza discreta e curata.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-sand-800">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-sand-900 p-8 lg:p-10 group hover:bg-sand-800 transition-colors duration-500"
            >
              <div className="text-sand-400 mb-5 group-hover:text-sand-200 transition-colors duration-500">
                {iconMap[s.icon] ?? <Sparkles size={22} />}
              </div>
              <h3 className="font-serif-display text-xl text-sand-50 mb-3">{s.title}</h3>
              <p className="text-sand-400 text-sm leading-relaxed font-light">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 flex items-center justify-center gap-3 text-sand-400 text-sm font-light">
          <MessageCircle size={18} className="text-sand-500" />
          <p>Per qualsiasi esigenza speciale, non esitate a contattarci.</p>
        </div>
      </div>
    </section>
  );
}
