// Image utility — uses local images from /public/images when they exist,
// otherwise renders an elegant SVG placeholder via data URI.

const placeholderColors: Record<string, [string, string]> = {
  exterior: ['#d6c9b6', '#a8997f'],
  interior: ['#e8dfd3', '#8b7d65'],
  bedroom: ['#e8dfd3', '#a8997f'],
  bathroom: ['#e8dfd3', '#6a93a6'],
  lake: ['#6a93a6', '#365c6e'],
  common: ['#e8dfd3', '#6f7d5f'],
};

export function placeholder(
  label: string,
  type: keyof typeof placeholderColors = 'interior',
): string {
  const [c1, c2] = placeholderColors[type] ?? placeholderColors.interior;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${c2}"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#g)"/>
    <text x="600" y="390" text-anchor="middle" fill="#fff" fill-opacity="0.55"
      font-family="Georgia,serif" font-size="28" font-style="italic" letter-spacing="2">${escapeXml(
        label,
      )}</text>
    <text x="600" y="430" text-anchor="middle" fill="#fff" fill-opacity="0.35"
      font-family="sans-serif" font-size="13" letter-spacing="4">UN ANGOLO SUL GARDA</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function escapeXml(s: string): string {
  return s.replace(/[<>&"']/g, (c) =>
    c === '<' ? '&lt;' : c === '>' ? '&gt;' : c === '&' ? '&amp;' : c === '"' ? '&quot;' : '&#39;',
  );
}

// Returns the real image if the file exists in /public/images, otherwise a placeholder.
// We check at build time — but since we can't runtime-check the filesystem in the browser,
// we use a strategy: all images are defined here with a `src` path and a fallback.
// The <Img> component will try the src and onError swap to the placeholder.
export interface PhotoDef {
  src: string;
  alt: string;
  type: keyof typeof placeholderColors;
  label: string;
}
