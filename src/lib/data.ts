import type { PhotoDef } from './images';

export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  amenities: string[];
  photos: PhotoDef[];
}

export const rooms: Room[] = [
  {
    id: 'camera-1',
    name: 'Camera Oleandro',
    tagline: 'Eleganza e luce',
    description:
      'Una stanza luminosa dove i toni neutri accolgono i primi raggi di sole. Il tavolo rotondo, ornato da orchidee, invita a un risveglio lento, tra silenzio e morbida luce naturale.',
    amenities: ['Aria condizionata', 'Wi-Fi gratuito', 'Macchina del caffè', 'Set cortesia', 'Asciugamani'],
    photos: [
      { src: '/images/1camera.jpg', alt: 'Camera Oleandro — letto', type: 'bedroom', label: 'Camera Oleandro · Letto' },
      { src: '/images/1camerabagno.jpg', alt: 'Camera Oleandro — bagno', type: 'bathroom', label: 'Camera Oleandro · Bagno' },
    ],
  },
  {
    id: 'camera-2',
    name: 'Camera Belvedere',
    tagline: 'Il lago di fronte',
    description:
      'Affacciata sul paesaggio gardesano, questa camera si distende verso l’orizzonte. La luce del lago filtra dolce, disegnando ombre leggere sui tessuti chiari e sul bancone in pietra.',
    amenities: ['Aria condizionata', 'Wi-Fi gratuito', 'Angolo tè', 'Set cortesia', 'Asciugamani'],
    photos: [
      { src: '/images/2camera.jpg', alt: 'Camera Belvedere — letto', type: 'bedroom', label: 'Camera Belvedere · Letto' },
      { src: '/images/2camerabagno.jpg', alt: 'Camera Belvedere — bagno', type: 'bathroom', label: 'Camera Belvedere · Bagno' },
    ],
  },
  {
    id: 'camera-3',
    name: 'Il Sogno',
    tagline: 'Il fascino del passato',
    description:
      'La parete in pietra a vista racconta la storia del borgo. Qui il tempo si ferma: materiali autentici, linee essenziali, un’atmosfera che profuma di tradizione gardesana.',
    amenities: ['Aria condizionata', 'Wi-Fi gratuito', 'Set cortesia', 'Asciugamani'],
    photos: [
      { src: '/images/3camera.jpg', alt: 'Il Sogno — letto con parete in pietra', type: 'bedroom', label: 'Il Sogno · Letto' },
      { src: '/images/3camerabagno.jpg', alt: 'Il Sogno — bagno', type: 'bathroom', label: 'Il Sogno · Bagno' },
    ],
  },
  {
    id: 'camera-4',
    name: 'White',
    tagline: 'Sogno e intimità',
    description:
      'Il baldacchino disegna uno spazio sospeso, intimo e raffinato. I toni scuri del bagno creano un contrasto sofisticato, per un soggiorno che sa di suite di lusso.',
    amenities: ['Aria condizionata', 'Wi-Fi gratuito', 'Angolo tè', 'Set cortesia', 'Asciugamani'],
    photos: [
      { src: '/images/4camera.jpg', alt: 'White — letto a baldacchino', type: 'bedroom', label: 'White · Letto' },
      { src: '/images/4camerabagno.jpg', alt: 'White — bagno', type: 'bathroom', label: 'White · Bagno' },
    ],
  },
];

export const heroPhoto: PhotoDef = {
  src: '/images/san-verolo.jpg',
  alt: 'San Verolo — Un Angolo sul Garda',
  type: 'exterior',
  label: 'San Verolo',
};

export const exteriorPhotos: PhotoDef[] = [
  { src: '/images/az1.jpeg', alt: 'Un Angolo sul Garda', type: 'exterior', label: 'Un Angolo sul Garda' },
  { src: '/images/borgo-san-verolo.jpg', alt: 'Scala interna — Un Angolo sul Garda', type: 'interior', label: 'Scala interna' },
];

export const territoryPhotos: PhotoDef[] = [
  { src: '/images/territorio.jpg', alt: 'Lago di Garda', type: 'lake', label: 'Lago di Garda' },
  { src: '/images/ciclovia.jpg', alt: 'Ciclovia del Garda', type: 'lake', label: 'Ciclovia del Garda' },
  { src: '/images/borgo-lago.jpg', alt: 'Borghi del Garda', type: 'lake', label: 'Borghi del Garda' },
];

export const services: { icon: string; title: string; description: string }[] = [
  { icon: 'wind', title: 'Aria condizionata', description: 'In ogni camera, per il vostro comfort in ogni stagione.' },
  { icon: 'wifi', title: 'Wi-Fi gratuito', description: 'Connessione disponibile in tutta la struttura.' },
  { icon: 'gift', title: 'Kit di benvenuto', description: 'Un pensiero per accogliervi al vostro arrivo.' },
  { icon: 'coffee', title: 'Colazione', description: 'Per iniziare la giornata con i sapori del territorio.' },
  { icon: 'car', title: 'Parcheggio', description: 'Posto auto nelle vicinanze della struttura.' },
  { icon: 'coffee', title: 'Macchina del caffè', description: 'Angolo caffè e tè a disposizione degli ospiti.' },
  { icon: 'sparkles', title: 'Set cortesia', description: 'Asciugamani e prodotti di cortesia in ogni camera.' },
  { icon: 'leaf', title: 'Ciclovia', description: 'Accesso diretto alla ciclovia del Garda a pochi passi.' },
];

export const contactInfo = {
  address: "Costermano sul Garda (Vr) localita' San Verolo 7",
  phone: '3911439991',
  whatsapp: '3911439991',
  email: 'unangolosulgarda@gmail.com',
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'struttura', label: 'La Struttura' },
  { id: 'camere', label: 'Le Camere' },
  { id: 'territorio', label: 'Il Territorio' },
  { id: 'servizi', label: 'Servizi' },
  { id: 'contatti', label: 'Contatti' },
];
