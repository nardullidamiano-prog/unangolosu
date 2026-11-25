import { exteriorPhotos } from '@/lib/data';
import Img from './Img';
import { useReveal } from '@/hooks/useReveal';

export default function Struttura() {
  const { ref, visible } = useReveal();

  return (
    <section id="struttura" className="py-24 lg:py-32 bg-sand-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Intro text */}
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center mb-20 reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="text-sand-500 text-xs tracking-luxe uppercase mb-6">La Struttura</p>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-sand-900 leading-tight text-balance">
            Il fascino di San Verolo
          </h2>
          <div className="w-16 h-px bg-sand-400 mx-auto my-8" />
          <p className="text-sand-700 text-lg leading-relaxed font-light text-balance">
            San Verolo è un borghetto ottocentesco arroccato tra le colline di Costermano,
            a un chilometro dalle rive del Garda. Qui la pietra racconta secoli di storia
            e il tempo sembra scorrere più lento.
          </p>
          <p className="text-sand-600 text-base leading-relaxed font-light mt-6 text-balance">
            Non una struttura qualsiasi, ma una dimora che ha conservato la sua anima
            autentica: muri in pietra, volte antiche, dettagli che parlano di un passato
            nobile — oggi restituiti a chi cerca un soggiorno fuori dal tempo.
          </p>
        </div>

        {/* Two large images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <figure className="relative group overflow-hidden bg-sand-100">
            <Img
              photo={exteriorPhotos[0]}
              className="w-full h-auto"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
              <span className="text-white/90 text-xs tracking-wide-luxe uppercase">Un Angolo sul Garda</span>
            </figcaption>
          </figure>
          <figure className="relative group overflow-hidden lg:mt-16 bg-sand-100">
            <Img
              photo={exteriorPhotos[1]}
              className="w-full h-auto"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
              <span className="text-white/90 text-xs tracking-wide-luxe uppercase">Borgo San Verolo</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
