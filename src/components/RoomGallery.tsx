import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { PhotoDef } from '@/lib/images';
import { placeholder } from '@/lib/images';
import Img from './Img';

interface RoomGalleryProps {
  photos: PhotoDef[];
  roomName: string;
}

export default function RoomGallery({ photos, roomName }: RoomGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const next = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length));

  // Layout: first photo large, rest smaller
  if (photos.length === 2) {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="relative group overflow-hidden"
            >
              <Img photo={p} className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </button>
          ))}
        </div>
        <Lightbox
          index={lightboxIndex}
          photos={photos}
          roomName={roomName}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button
          onClick={() => openLightbox(0)}
          className="relative group overflow-hidden sm:col-span-2 sm:row-span-2"
        >
          <Img photo={photos[0]} className="w-full h-[300px] sm:h-full min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </button>
        {photos.slice(1).map((p, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i + 1)}
            className="relative group overflow-hidden"
          >
            <Img photo={p} className="w-full h-[200px] sm:h-[195px] object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          </button>
        ))}
      </div>
      <Lightbox
        index={lightboxIndex}
        photos={photos}
        roomName={roomName}
        onClose={closeLightbox}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}

function Lightbox({
  index,
  photos,
  roomName,
  onClose,
  onPrev,
  onNext,
}: {
  index: number | null;
  photos: PhotoDef[];
  roomName: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  if (index === null) return null;
  const photo = photos[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Chiudi"
      >
        <X size={28} />
      </button>
      <button
        className="absolute left-4 sm:left-8 text-white/70 hover:text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Precedente"
      >
        <ChevronLeft size={36} />
      </button>
      <img
        src={photo.src}
        alt={photo.alt}
        onError={(e) => { (e.target as HTMLImageElement).src = placeholder(photo.label, photo.type); }}
        className="max-h-[85vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="absolute right-4 sm:right-8 text-white/70 hover:text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Successiva"
      >
        <ChevronRight size={36} />
      </button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-wide-luxe uppercase">
        {roomName} · {index + 1} / {photos.length}
      </div>
    </div>
  );
}
