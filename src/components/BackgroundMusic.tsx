import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * Musica di sottofondo (Chopin).
 * Tenta l'avvio automatico all'apertura del sito; se il browser blocca
 * l'autoplay, la musica parte al primo gesto dell'utente (click/tap/tasto).
 */
export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let cleanup = () => {};

    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        // Autoplay bloccato dal browser: avvia al primo gesto dell'utente.
        const start = () => {
          audio.play().then(() => setPlaying(true)).catch(() => {});
          cleanup();
        };
        window.addEventListener('click', start);
        window.addEventListener('keydown', start);
        window.addEventListener('touchstart', start);
        cleanup = () => {
          window.removeEventListener('click', start);
          window.removeEventListener('keydown', start);
          window.removeEventListener('touchstart', start);
        };
      });

    return () => cleanup();
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/chopin.mp3" loop preload="none" />
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
        aria-label={playing ? 'Disattiva musica di sottofondo' : 'Attiva musica di sottofondo'}
        className="fixed bottom-5 right-5 z-[90] flex h-11 w-11 items-center justify-center rounded-full bg-sand-900/80 text-sand-50 backdrop-blur-sm transition-colors duration-300 hover:bg-sand-900"
      >
        {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
    </>
  );
}
