import { rooms } from '@/lib/data';
import { useReveal } from '@/hooks/useReveal';
import RoomGallery from './RoomGallery';
import { ArrowRight } from 'lucide-react';

export default function Camere() {
  return (
    <section id="camere" className="py-24 lg:py-32 bg-sand-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sand-500 text-xs tracking-luxe uppercase mb-6">Le Camere</p>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-sand-900 leading-tight text-balance">
            Quattro modi di vivere il Garda
          </h2>
          <div className="w-16 h-px bg-sand-400 mx-auto my-8" />
          <p className="text-sand-700 text-lg leading-relaxed font-light text-balance">
            Ogni camera ha un carattere proprio — un dialogo tra pietra, luce e materia.
            Tutte pensate per accogliervi con eleganza, comfort e quella quiete che solo
            San Verolo sa offrire.
          </p>
        </div>

        {/* Room entries */}
        <div className="space-y-28 lg:space-y-36">
          {rooms.map((room, idx) => (
            <RoomEntry key={room.id} room={room} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoomEntry({ room, index }: { room: typeof rooms[number]; index: number }) {
  const { ref, visible } = useReveal();
  const reversed = index % 2 === 1;

  const scrollToContacts = () => {
    document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
    >
      {/* Gallery */}
      <div className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}>
        <RoomGallery photos={room.photos} roomName={room.name} />
      </div>

      {/* Text */}
      <div className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}>
        <p className="text-sand-500 text-xs tracking-luxe uppercase mb-4">
          {String(index + 1).padStart(2, '0')} · {room.tagline}
        </p>
        <h3 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-sand-900 mb-6">
          {room.name}
        </h3>
        <p className="text-sand-700 text-base lg:text-lg leading-relaxed font-light mb-8">
          {room.description}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-8">
          {room.amenities.map((a) => (
            <span
              key={a}
              className="text-[0.7rem] tracking-wide uppercase px-3 py-1.5 bg-sand-200/60 text-sand-700 border border-sand-300/50"
            >
              {a}
            </span>
          ))}
        </div>

        <button
          onClick={scrollToContacts}
          className="group inline-flex items-center gap-3 text-xs tracking-wide-luxe uppercase text-sand-900 border-b border-sand-400 pb-1 hover:border-sand-900 transition-colors duration-300"
        >
          Richiedi disponibilità
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
