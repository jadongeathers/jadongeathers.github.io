import React from 'react';

/*
 * Pixel-art icon renderer.
 *
 * Each icon is a list of strings where every character is one pixel.
 * Characters resolve through PALETTE; unknown chars (including '.' and ' ')
 * render transparent. Icons are square — all strings must be the same length.
 */

const PALETTE = {
  K: '#151515', // ink
  W: '#FFFFFF',
  c: '#EEEFE9', // cream
  g: '#BFB9A8', // gray
  d: '#6B6B62', // dark gray
  Y: '#F9BD2B', // yellow
  R: '#F54E00', // red/orange
  o: '#FF8A4A', // light orange
  B: '#1D4AFF', // blue
  b: '#5C82FF', // light blue
  G: '#2ECC71', // green
  T: '#29DBBB', // teal
  s: '#E6B89C', // skin
  h: '#6F3F1F', // hair brown
  p: '#F5C2C7', // pink
  P: '#A569BD', // purple
  N: '#0A2540', // navy
  v: '#8E44AD', // violet
};

export const PixelIcon = ({ pixels, size = 56, className = '', style = {} }) => {
  const rows = pixels.length;
  const cols = pixels[0]?.length || 0;
  const rects = [];

  for (let y = 0; y < rows; y++) {
    const row = pixels[y];
    for (let x = 0; x < cols; x++) {
      const ch = row[x];
      const fill = PALETTE[ch];
      if (!fill) continue;
      rects.push(
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={fill} shapeRendering="crispEdges" />
      );
    }
  }

  return (
    <svg
      viewBox={`0 0 ${cols} ${rows}`}
      width={size}
      height={size}
      className={className}
      style={{ imageRendering: 'pixelated', display: 'block', ...style }}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {rects}
    </svg>
  );
};

// 16x16 placeholder icons. Build more or refine later — these are intentionally chunky.

export const ICONS = {
  person: [
    '................',
    '......KKKKK.....',
    '.....KsssssK....',
    '....KsshhssK....',
    '....KKsssKsK....',
    '....KsKsKKsK....',
    '....Kssss.sK....',
    '.....KsssssK....',
    '......KKKKK.....',
    '....KKBBBBKKK...',
    '...KBBYWWYBBK...',
    '...KBYWBBWYBK...',
    '...KBBYWWYBBK...',
    '...KBBBBBBBBK...',
    '...KBBBBBBBBK...',
    '...KKKKKKKKKK...',
  ],
  beaker: [
    '................',
    '....KKKKKKKK....',
    '....K......K....',
    '....KWWWWWWK....',
    '....KK....KK....',
    '.....K....K.....',
    '.....K....K.....',
    '.....K....K.....',
    '.....KBBBBK.....',
    '....KBBYYBBK....',
    '....KBYBYYBK....',
    '...KBBYYYYBBK...',
    '...KBBBYYBBBK...',
    '...KBBBBBBBBK...',
    '...KKKKKKKKKK...',
    '................',
  ],
  scroll: [
    '................',
    '...KKKKKKKKKK...',
    '..KWWWWWWWWWWK..',
    '..KWKKKKKKKKWK..',
    '..KWWWWWWWWWWK..',
    '..KWKKKKKKKKWK..',
    '..KWWWWWWWWWWK..',
    '..KWKKKKKKKKWK..',
    '..KWWWWWWWWWWK..',
    '..KWKKKKKK..WK..',
    '..KWWWWWWWWWWK..',
    '..KWKKKKKKKKWK..',
    '..KWWWWWWWWWWK..',
    '..KWKKKKKKKKWK..',
    '..KWWWWWWWWWWK..',
    '...KKKKKKKKKK...',
  ],
  chat: [
    '................',
    '..KKKKKKKKKKKK..',
    '.KYYYYYYYYYYYYK.',
    '.KYWWWYWWWYYYYK.',
    '.KYWKWYWKWYYYYK.',
    '.KYWWWYWWWYYYYK.',
    '.KYYYYYYYYYYYYK.',
    '.KYYYKKYKKYYYYK.',
    '.KYYYYKKKYYYYYK.',
    '.KYYYYYKYYYYYYK.',
    '.KKKKKKKKYYYYYK.',
    '.....KKKYYYYYYK.',
    '......KKYYYYYYK.',
    '.......KKKKKKKK.',
    '................',
    '................',
  ],
  trophy: [
    '................',
    '..KKKKKKKKKKKK..',
    '..KYYYYYYYYYYK..',
    'KKKYYYYYYYYYYKKK',
    'KYKKYYYYYYYYKKYK',
    'KYKKYYYYYYYYKKYK',
    'KKKYYYYYYYYYYKKK',
    '..KYYYYYYYYYYK..',
    '..KKYYYYYYYYKK..',
    '....KYYYYYYK....',
    '.....KYYYYK.....',
    '....KKYYYYKK....',
    '...KKKKKKKKKK...',
    '..KKKKKKKKKKKK..',
    '..KKKKKKKKKKKK..',
    '................',
  ],
  envelope: [
    '................',
    '................',
    '.KKKKKKKKKKKKKK.',
    '.KWWWWWWWWWWWWK.',
    '.KWKWWWWWWWWKWK.',
    '.KWWKWWWWWWKWWK.',
    '.KWWWKWWWWKWWWK.',
    '.KWWWWKWWKWWWWK.',
    '.KWWWWWKKWWWWWK.',
    '.KWWWWWWWWWWWWK.',
    '.KWWWWWWWWWWWWK.',
    '.KWWWWWWWWWWWWK.',
    '.KWWWWWWWWWWWWK.',
    '.KKKKKKKKKKKKKK.',
    '................',
    '................',
  ],
  github: [
    '................',
    '....KKKKKKKK....',
    '...KWWWWWWWWK...',
    '..KWWKWWWWKWWK..',
    '..KWKKWWWWKKWK..',
    '..KWWWWWWWWWWK..',
    '..KWWKWWWWKWWK..',
    '..KWWWKKKKWWWK..',
    '..KWWWWWWWWWWK..',
    '..KKWWWKKWWWKK..',
    '...KKWWKKWWKK...',
    '....KKWKKWKK....',
    '....KWWKKWWK....',
    '....KWWKKWWK....',
    '....KKKKKKKK....',
    '................',
  ],
  linkedin: [
    '................',
    '.KKKKKKKKKKKKKK.',
    '.KBBBBBBBBBBBBK.',
    '.KBBWWBBBBWWBBK.',
    '.KBBWWBBBBWWBBK.',
    '.KBBBBBBBBBBBBK.',
    '.KBBWWBBWWBWWBK.',
    '.KBBWWBBWWWWWBK.',
    '.KBBWWBBWWBWWBK.',
    '.KBBWWBBWWBWWBK.',
    '.KBBWWBBWWBWWBK.',
    '.KBBWWBBWWBWWBK.',
    '.KBBBBBBBBBBBBK.',
    '.KKKKKKKKKKKKKK.',
    '................',
    '................',
  ],
  cap: [
    '................',
    '................',
    '.......KK.......',
    '......KKKK......',
    '.....KKKKKK.....',
    '....KKKKKKKK....',
    '...KKKKKKKKKK...',
    '..KKKKKKKKKKKK..',
    '.KKKKKKKKKKKKKK.',
    'KKKKKKKKKKKKKKKK',
    '.....K......K...',
    '.....KKKKKKKK...',
    '...........K....',
    '..........KK....',
    '................',
    '................',
  ],
  star: [
    '................',
    '.......KK.......',
    '.......YY.......',
    '......YYYY......',
    '......YYYY......',
    'KKKKKKYYYYKKKKKK',
    'KYYYYYYYYYYYYYYK',
    '.KYYYYYYYYYYYYK.',
    '..KYYYYYYYYYYK..',
    '...KYYYYYYYYK...',
    '..KYYYKKKKYYYK..',
    '..KYYKK..KKYYK..',
    '.KYYK......KYYK.',
    '.KKK........KKK.',
    '................',
    '................',
  ],
  monitor: [
    '................',
    '.KKKKKKKKKKKKKK.',
    '.KggggggggggggK.',
    '.KgBBBBBBBBBBgK.',
    '.KgBYYYYYYYYBgK.',
    '.KgBYWBBBBBYBgK.',
    '.KgBYBWBBBYYBgK.',
    '.KgBYBBWBYBYBgK.',
    '.KgBYBBBYBBYBgK.',
    '.KgBYYYYYYYYBgK.',
    '.KgBBBBBBBBBBgK.',
    '.KggggggggggggK.',
    '.KKKKKKKKKKKKKK.',
    '.....KKKKKK.....',
    '...KKKKKKKKKK...',
    '................',
  ],
  folder: [
    '................',
    '................',
    '..KKKKKK........',
    '.KYYYYYYK.......',
    'KYYYYYYYYKKKKKKK',
    'KKKKKKKKKKKKKKKK',
    'KYYYYYYYYYYYYYYK',
    'KYYYYYYYYYYYYYYK',
    'KYYYYYYYYYYYYYYK',
    'KYYYYYYYYYYYYYYK',
    'KYYYYYYYYYYYYYYK',
    'KYYYYYYYYYYYYYYK',
    'KYYYYYYYYYYYYYYK',
    'KKKKKKKKKKKKKKKK',
    '................',
    '................',
  ],
  heart: [
    '................',
    '................',
    '...RRR....RRR...',
    '..RRoRRR..RRoRR.',
    '.RooooRRRRRRoRR.',
    '.RoooRRRRRRRRRR.',
    '.RRRRRRRRRRRRRR.',
    '.RRRRRRRRRRRRRR.',
    '..RRRRRRRRRRRR..',
    '...RRRRRRRRRR...',
    '....RRRRRRRR....',
    '.....RRRRRR.....',
    '......RRRR......',
    '.......RR.......',
    '................',
    '................',
  ],
  dog: [
    '................',
    '..KK........KK..',
    '.KhhK......KhhK.',
    '.KhhhK....KhhhK.',
    '.KhhhhKKKKhhhhK.',
    '.KhhhhhhhhhhhhK.',
    '.KhhKWhhhhWKhhK.',
    '.KhhWKWhhWKWhhK.',
    '.KhhhhhhhhhhhhK.',
    '.KhhhKKKKKKhhhK.',
    '.KhhKKKKKKKKhhK.',
    '..KhhKKKKKKhhK..',
    '...KhhhhhhhhK...',
    '....KKKKKKKK....',
    '................',
    '................',
  ],
  photos: [
    '................',
    '................',
    'KKKKKKKKKKKKKKKK',
    'KWWWWWWWWWWWWWWK',
    'KWBBBBBBBYYBBBBK',
    'KWBBBBBBYYYYBBBK',
    'KWBBBBBBBYYBBBBK',
    'KWBBBBBBBBBBBBBK',
    'KWBssBBBssssBsBK',
    'KWsssssBssssssBK',
    'KWWWWWWWWWWWWWWK',
    'KWWWWWWWWWWWWWWK',
    'KWWWWWWWWWWWWWWK',
    'KKKKKKKKKKKKKKKK',
    '................',
    '................',
  ],
  hedgehog: [
    '................',
    '...KKK..........',
    '..KhhhKK........',
    '..KhhKhhKK......',
    '.KhhKshhhhKK....',
    'KhhKsshhhhhhKKKK',
    'KhKsssWhhhhhhhhK',
    'KsssssKKhhhhhhhK',
    'KsssssssKhhhhhhK',
    'KsKKsssssKhhhhhK',
    'KsssssssssKKKKK.',
    '.KsssssssKKKK...',
    '..KKKKKKKK......',
    '...KK..KK.......',
    '................',
    '................',
  ],
};

/*
 * IconArt — render either a pixel-art grid OR an image URL.
 * Pass `icon` as a string (image path) or a pixel-array reference.
 */
export const IconArt = ({ icon, size = 56, className = '', alt = '' }) => {
  if (!icon) return null;
  if (typeof icon === 'string') {
    return (
      <img
        src={icon}
        alt={alt}
        width={size}
        height={size}
        className={className}
        style={{
          display: 'block',
          objectFit: 'contain',
          imageRendering: 'pixelated',
        }}
        draggable={false}
      />
    );
  }
  return <PixelIcon pixels={icon} size={size} className={className} />;
};

export default PixelIcon;
