import { useState } from 'react';
import { placeholder, type PhotoDef } from '@/lib/images';

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  photo: PhotoDef;
  className?: string;
}

/**
 * Image component that gracefully falls back to an elegant SVG placeholder
 * if the real photo file hasn't been placed in /public/images yet.
 */
export default function Img({ photo, className, ...rest }: ImgProps) {
  const [errored, setErrored] = useState(false);
  const src = errored ? placeholder(photo.label, photo.type) : photo.src;

  return (
    <img
      src={src}
      alt={photo.alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={className}
      {...rest}
    />
  );
}
