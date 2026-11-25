import { contactInfo } from '@/lib/data';

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-sand-950 text-sand-400 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif-display text-2xl text-sand-50 mb-3">
              Un Angolo sul Garda
            </h3>
            <p className="text-xs tracking-luxe uppercase text-sand-500 mb-4">Luxury Rooms</p>
            <p className="text-sm font-light leading-relaxed text-sand-500 max-w-xs">
              Un piccolo angolo di tranquillità tra le colline di Costermano,
              a un passo dal Lago di Garda.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs tracking-luxe uppercase text-sand-300 mb-5">Navigazione</p>
            <ul className="space-y-3">
              {[
                { id: 'struttura', label: 'La Struttura' },
                { id: 'camere', label: 'Le Camere' },
                { id: 'territorio', label: 'Il Territorio' },
                { id: 'servizi', label: 'Servizi' },
                { id: 'contatti', label: 'Contatti' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-sm font-light hover:text-sand-50 transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-luxe uppercase text-sand-300 mb-5">Contatti</p>
            <ul className="space-y-3 text-sm font-light">
              <li className="text-sand-500">{contactInfo.address}</li>
              <li>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-sand-50 transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-sand-50 transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sand-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sand-600">
            © {new Date().getFullYear()} Un Angolo sul Garda · Tutti i diritti riservati
          </p>
          <p className="text-xs text-sand-600">Costermano sul Garda · Veneto · Italia</p>
        </div>
      </div>
    </footer>
  );
}
