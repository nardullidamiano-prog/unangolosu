import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, Check } from 'lucide-react';
import { contactInfo } from '@/lib/data';
import { useReveal } from '@/hooks/useReveal';

export default function Contatti() {
  const { ref, visible } = useReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefono: '',
    arrivo: '',
    partenza: '',
    camera: '',
    messaggio: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const cameraLabels: Record<string, string> = {
    oleandro: 'Camera Oleandro',
    belvedere: 'Camera Belvedere',
    'il-sogno': 'Il Sogno',
    white: 'White',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Nome: ${form.nome}`,
      `Email: ${form.email}`,
      form.telefono ? `Telefono: ${form.telefono}` : '',
      `Camera: ${cameraLabels[form.camera] ?? 'Qualsiasi'}`,
      `Data arrivo: ${form.arrivo}`,
      `Data partenza: ${form.partenza}`,
      '',
      form.messaggio,
    ].filter(Boolean);
    const subject = `Richiesta disponibilità — ${form.nome}`;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join('\n'))}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ nome: '', email: '', telefono: '', arrivo: '', partenza: '', camera: '', messaggio: '' });
  };

  const whatsappLink = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <section id="contatti" className="py-24 lg:py-32 bg-sand-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center mb-20 reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="text-sand-500 text-xs tracking-luxe uppercase mb-6">Contatti e Prenotazioni</p>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-sand-900 leading-tight text-balance">
            Venite a trovarci
          </h2>
          <div className="w-16 h-px bg-sand-400 mx-auto my-8" />
          <p className="text-sand-700 text-lg leading-relaxed font-light text-balance">
            Scriveteci per verificare la disponibilità o per qualsiasi informazione.
            Vi risponderemo al più presto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info + map */}
          <div className="space-y-8">
            <ContactRow icon={<MapPin size={20} />} label="Indirizzo" value={contactInfo.address} />
            <ContactRow
              icon={<Phone size={20} />}
              label="Telefono"
              value={contactInfo.phone}
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
            />
            <ContactRow
              icon={<MessageCircle size={20} />}
              label="WhatsApp"
              value={contactInfo.whatsapp}
              href={whatsappLink}
            />
            <ContactRow
              icon={<Mail size={20} />}
              label="Email"
              value={contactInfo.email}
              href={`mailto:${contactInfo.email}`}
            />

            {/* Map embed */}
            <div className="pt-4">
              <div className="relative w-full h-[300px] bg-sand-200 overflow-hidden border border-sand-300">
                <iframe
                  title="Mappa Un Angolo sul Garda"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=10.74%2C45.55%2C10.78%2C45.58&layer=mapnik&marker=45.565%2C10.76"
                  className="w-full h-full grayscale-[0.3] contrast-95"
                  loading="lazy"
                  style={{ border: 0 }}
                />
              </div>
              <a
                href="https://www.openstreetmap.org/?mlat=45.565&mlon=10.76#map=14/45.565/10.76"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs tracking-wide-luxe uppercase text-sand-600 hover:text-sand-900 transition-colors"
              >
                Apri in mappa →
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-sand-50 p-8 lg:p-10 space-y-6"
            >
              <h3 className="font-serif-display text-2xl text-sand-900 mb-2">
                Richiedi disponibilità
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field
                  label="Nome e cognome"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field
                  label="Telefono"
                  name="telefono"
                  type="tel"
                  value={form.telefono}
                  onChange={handleChange}
                />
                <div>
                  <label className="block text-xs tracking-wide-luxe uppercase text-sand-600 mb-2">
                    Camera
                  </label>
                  <select
                    name="camera"
                    value={form.camera}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-sand-400 py-2 text-sand-900 text-sm focus:outline-none focus:border-sand-900 transition-colors"
                  >
                    <option value="">Qualsiasi</option>
                    <option value="oleandro">Camera Oleandro</option>
                    <option value="belvedere">Camera Belvedere</option>
                    <option value="il-sogno">Il Sogno</option>
                    <option value="white">White</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field
                  label="Data arrivo"
                  name="arrivo"
                  type="date"
                  value={form.arrivo}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Data partenza"
                  name="partenza"
                  type="date"
                  value={form.partenza}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-xs tracking-wide-luxe uppercase text-sand-600 mb-2">
                  Messaggio
                </label>
                <textarea
                  name="messaggio"
                  value={form.messaggio}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-sand-400 py-2 text-sand-900 text-sm focus:outline-none focus:border-sand-900 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className={`group inline-flex items-center gap-3 text-xs tracking-luxe uppercase px-8 py-4 transition-all duration-500 w-full justify-center ${
                  sent
                    ? 'bg-olive-500 text-white'
                    : 'bg-sand-900 text-sand-50 hover:bg-sand-800'
                }`}
              >
                {sent ? (
                  <>
                    <Check size={16} /> Richiesta inviata
                  </>
                ) : (
                  <>
                    Invia richiesta
                    <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-5 group">
      <div className="flex-shrink-0 w-12 h-12 border border-sand-400 flex items-center justify-center text-sand-600 group-hover:border-sand-900 group-hover:text-sand-900 transition-colors duration-300">
        {icon}
      </div>
      <div>
        <p className="text-xs tracking-wide-luxe uppercase text-sand-500 mb-1">{label}</p>
        <p className="text-sand-900 text-base font-light">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs tracking-wide-luxe uppercase text-sand-600 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-transparent border-b border-sand-400 py-2 text-sand-900 text-sm focus:outline-none focus:border-sand-900 transition-colors"
      />
    </div>
  );
}
