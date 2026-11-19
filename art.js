// Рисунки игры «Ночной зоопарк» — всё нарисовано кодом (SVG).
const L = '#1f1a2e'; // контур

// Звери: viewBox 0 0 100 100, низ рисунка — y=100. eyes — где светятся глаза в темноте.
const ANIMALS = {
  owl: { name: 'Сова', eyeColor: '#ffd84a', eyes: [[35, 38], [65, 38]], svg: `
    <path d="M22 100 C14 70 18 30 26 18 L34 30 C44 24 56 24 66 30 L74 18 C82 30 86 70 78 100 Z" fill="#9c6b45" stroke="${L}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M30 100 C28 80 36 62 50 62 C64 62 72 80 70 100 Z" fill="#e8cfa6"/>
    <path d="M40 72 l4 4 l4 -4 M52 72 l4 4 l4 -4 M44 84 l4 4 l4 -4" stroke="#b08a5f" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <circle cx="35" cy="40" r="14" fill="#fff" stroke="${L}" stroke-width="3"/><circle cx="65" cy="40" r="14" fill="#fff" stroke="${L}" stroke-width="3"/>
    <circle cx="35" cy="40" r="7" fill="${L}"/><circle cx="65" cy="40" r="7" fill="${L}"/>
    <circle cx="37" cy="37" r="2.5" fill="#fff"/><circle cx="67" cy="37" r="2.5" fill="#fff"/>
    <path d="M45 50 L55 50 L50 60 Z" fill="#f2a02c" stroke="${L}" stroke-width="2.5" stroke-linejoin="round"/>` },
  raccoon: { name: 'Енот', eyeColor: '#b6ff6a', eyes: [[37, 50], [63, 50]], svg: `
    <path d="M20 40 L18 12 L40 26 Z M80 40 L82 12 L60 26 Z" fill="#8a8a96" stroke="${L}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M24 100 C20 84 22 74 28 70 C14 60 14 34 30 26 C42 20 58 20 70 26 C86 34 86 60 72 70 C78 74 80 84 76 100 Z" fill="#9b9ba8" stroke="${L}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M18 46 C26 38 40 42 50 48 C60 42 74 38 82 46 C78 58 64 60 50 54 C36 60 22 58 18 46 Z" fill="#2c2a36"/>
    <circle cx="37" cy="50" r="5" fill="#fff"/><circle cx="63" cy="50" r="5" fill="#fff"/>
    <circle cx="37" cy="50" r="2.5" fill="${L}"/><circle cx="63" cy="50" r="2.5" fill="${L}"/>
    <path d="M38 60 C42 72 58 72 62 60 C58 64 42 64 38 60 Z" fill="#eeeef3"/>
    <ellipse cx="50" cy="63" rx="5" ry="3.5" fill="${L}"/>
    <path d="M44 34 L50 44 L56 34" stroke="#eeeef3" stroke-width="4" fill="none" stroke-linecap="round"/>` },
  hedgehog: { name: 'Ёжик', eyeColor: '#ffb24a', eyes: [[40, 60], [60, 60]], svg: `
    <path d="M10 100 L8 78 L16 72 L12 56 L24 52 L22 36 L36 38 L40 22 L50 32 L60 22 L64 38 L78 36 L76 52 L88 56 L84 72 L92 78 L90 100 Z" fill="#6b4a32" stroke="${L}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M24 100 C22 70 34 48 50 48 C66 48 78 70 76 100 Z" fill="#f0d1a8" stroke="${L}" stroke-width="3"/>
    <circle cx="40" cy="60" r="4.5" fill="${L}"/><circle cx="60" cy="60" r="4.5" fill="${L}"/>
    <circle cx="41.5" cy="58.5" r="1.5" fill="#fff"/><circle cx="61.5" cy="58.5" r="1.5" fill="#fff"/>
    <circle cx="50" cy="72" r="5" fill="${L}"/>
    <circle cx="32" cy="72" r="5" fill="#ff9e9e" opacity=".6"/><circle cx="68" cy="72" r="5" fill="#ff9e9e" opacity=".6"/>` },
  fox: { name: 'Лиса', eyeColor: '#ffe14a', eyes: [[37, 50], [63, 50]], svg: `
    <path d="M18 44 L20 6 L44 30 Z M82 44 L80 6 L56 30 Z" fill="#ff8a3d" stroke="${L}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M22 38 L24 16 L36 30 Z M78 38 L76 16 L64 30 Z" fill="#3a2a26"/>
    <path d="M26 100 C24 86 26 78 32 74 C18 64 16 40 30 30 C42 22 58 22 70 30 C84 40 82 64 68 74 C74 78 76 86 74 100 Z" fill="#ff8a3d" stroke="${L}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M20 54 C30 56 40 62 50 76 C60 62 70 56 80 54 C78 68 64 78 50 80 C36 78 22 68 20 54 Z" fill="#fff4e8"/>
    <circle cx="37" cy="50" r="4.5" fill="${L}"/><circle cx="63" cy="50" r="4.5" fill="${L}"/>
    <circle cx="38.5" cy="48.5" r="1.5" fill="#fff"/><circle cx="64.5" cy="48.5" r="1.5" fill="#fff"/>
    <ellipse cx="50" cy="74" rx="5" ry="3.5" fill="${L}"/>
    <path d="M36 100 C38 90 62 90 64 100 Z" fill="#fff4e8"/>` },
  panda: { name: 'Панда', eyeColor: '#9be7ff', eyes: [[37, 50], [63, 50]], svg: `
    <circle cx="24" cy="26" r="12" fill="#2a2830" stroke="${L}" stroke-width="3"/><circle cx="76" cy="26" r="12" fill="#2a2830" stroke="${L}" stroke-width="3"/>
    <path d="M22 100 C16 90 18 78 26 72 C14 62 14 36 30 28 C42 22 58 22 70 28 C86 36 86 62 74 72 C82 78 84 90 78 100 Z" fill="#fafafa" stroke="${L}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M22 100 C18 90 20 82 28 78 L40 86 L40 100 Z M78 100 C82 90 80 82 72 78 L60 86 L60 100 Z" fill="#2a2830"/>
    <ellipse cx="36" cy="50" rx="9" ry="11" fill="#2a2830" transform="rotate(25 36 50)"/>
    <ellipse cx="64" cy="50" rx="9" ry="11" fill="#2a2830" transform="rotate(-25 64 50)"/>
    <circle cx="37" cy="50" r="3.5" fill="#fff"/><circle cx="63" cy="50" r="3.5" fill="#fff"/>
    <ellipse cx="50" cy="62" rx="5" ry="3.5" fill="${L}"/>
    <path d="M44 68 q6 5 12 0" stroke="${L}" stroke-width="2.5" fill="none" stroke-linecap="round"/>` },
  penguin: { name: 'Пингвин', eyeColor: '#c9f0ff', eyes: [[40, 40], [60, 40]], svg: `
    <path d="M18 100 C10 70 18 18 50 14 C82 18 90 70 82 100 Z" fill="#26283a" stroke="${L}" stroke-width="3.5"/>
    <path d="M28 100 C24 76 28 54 36 46 C30 36 38 26 50 34 C62 26 70 36 64 46 C72 54 76 76 72 100 Z" fill="#fafafa"/>
    <circle cx="40" cy="40" r="4.5" fill="${L}"/><circle cx="60" cy="40" r="4.5" fill="${L}"/>
    <circle cx="41.5" cy="38.5" r="1.5" fill="#fff"/><circle cx="61.5" cy="38.5" r="1.5" fill="#fff"/>
    <path d="M42 48 L58 48 L50 58 Z" fill="#ffa62b" stroke="${L}" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="32" cy="54" r="4" fill="#ff9e9e" opacity=".55"/><circle cx="68" cy="54" r="4" fill="#ff9e9e" opacity=".55"/>` },
  monkey: { name: 'Обезьянка', eyeColor: '#ffcf6a', eyes: [[40, 46], [60, 46]], svg: `
    <circle cx="16" cy="50" r="12" fill="#8a5a3b" stroke="${L}" stroke-width="3.5"/><circle cx="16" cy="50" r="6" fill="#e8b98a"/>
    <circle cx="84" cy="50" r="12" fill="#8a5a3b" stroke="${L}" stroke-width="3.5"/><circle cx="84" cy="50" r="6" fill="#e8b98a"/>
    <path d="M24 100 C20 88 22 80 30 76 C18 64 18 36 32 26 C44 18 56 18 68 26 C82 36 82 64 70 76 C78 80 80 88 76 100 Z" fill="#8a5a3b" stroke="${L}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M50 38 C44 30 30 32 30 46 C30 54 34 58 32 64 C34 76 66 76 68 64 C66 58 70 54 70 46 C70 32 56 30 50 38 Z" fill="#e8b98a"/>
    <circle cx="40" cy="46" r="4.5" fill="${L}"/><circle cx="60" cy="46" r="4.5" fill="${L}"/>
    <circle cx="41.5" cy="44.5" r="1.5" fill="#fff"/><circle cx="61.5" cy="44.5" r="1.5" fill="#fff"/>
    <circle cx="46" cy="58" r="1.8" fill="${L}"/><circle cx="54" cy="58" r="1.8" fill="${L}"/>
    <path d="M42 64 q8 7 16 0" stroke="${L}" stroke-width="2.5" fill="none" stroke-linecap="round"/>` },
  bat: { name: 'Летучая мышь', eyeColor: '#ff6a6a', eyes: [[43, 50], [57, 50]], svg: `
    <path d="M50 60 C40 50 22 44 4 52 C10 58 10 64 8 70 C16 66 22 68 24 76 C30 70 36 72 40 78 Z" fill="#5b4a78" stroke="${L}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M50 60 C60 50 78 44 96 52 C90 58 90 64 92 70 C84 66 78 68 76 76 C70 70 64 72 60 78 Z" fill="#5b4a78" stroke="${L}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M34 40 L32 18 L44 32 Z M66 40 L68 18 L56 32 Z" fill="#6d5a8c" stroke="${L}" stroke-width="3" stroke-linejoin="round"/>
    <ellipse cx="50" cy="56" rx="17" ry="24" fill="#6d5a8c" stroke="${L}" stroke-width="3"/>
    <circle cx="43" cy="50" r="4" fill="${L}"/><circle cx="57" cy="50" r="4" fill="${L}"/>
    <circle cx="44.2" cy="48.8" r="1.3" fill="#fff"/><circle cx="58.2" cy="48.8" r="1.3" fill="#fff"/>
    <path d="M45 60 q5 4 10 0" stroke="${L}" stroke-width="2.2" fill="none"/><path d="M47 61 l1 3 l1 -2.5 M53 61 l-1 3 l-1 -2.5" fill="#fff"/>` },
};
const animalIcon = (id, size = 40) =>
  `<svg viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${ANIMALS[id].name}">${ANIMALS[id].svg}</svg>`;

// ---------- Сцена: 360 × 540 ----------
// Места, где прячутся звери: x — центр, y — низ зверя, s — размер, cover — чем закрыт снизу.
const SPOTS = [
  { x: 62, y: 152, s: 50, cover: 'none' },   // ветка левого дерева
  { x: 300, y: 142, s: 50, cover: 'none' },  // ветка правого дерева
  { x: 178, y: 214, s: 52, cover: 'sign' },
  { x: 58, y: 272, s: 62, cover: 'bush' },
  { x: 292, y: 272, s: 62, cover: 'crate' },
  { x: 120, y: 334, s: 62, cover: 'rock' },
  { x: 272, y: 352, s: 62, cover: 'bush' },
  { x: 44, y: 420, s: 64, cover: 'log' },
  { x: 182, y: 430, s: 64, cover: 'bush' },
  { x: 314, y: 432, s: 64, cover: 'rock' },
  { x: 100, y: 512, s: 68, cover: 'crate' },
  { x: 250, y: 518, s: 68, cover: 'bush' },
];

function coverSvg(spot) {
  const { x, y, s } = spot, w = s * 1.5, top = y - s * 0.42;
  switch (spot.cover) {
    case 'bush': return `<g>
      <circle cx="${x - w * .3}" cy="${top + s * .3}" r="${s * .3}" fill="#2f6b3c" stroke="${L}" stroke-width="3"/>
      <circle cx="${x + w * .3}" cy="${top + s * .3}" r="${s * .3}" fill="#2f6b3c" stroke="${L}" stroke-width="3"/>
      <circle cx="${x}" cy="${top + s * .22}" r="${s * .34}" fill="#3a8048" stroke="${L}" stroke-width="3"/>
      <rect x="${x - w / 2}" y="${top + s * .3}" width="${w}" height="${s * .26}" rx="${s * .12}" fill="#2f6b3c"/>
      <circle cx="${x - w * .15}" cy="${top + s * .12}" r="3" fill="#e2536b"/><circle cx="${x + w * .2}" cy="${top + s * .3}" r="3" fill="#e2536b"/></g>`;
    case 'rock': return `<g>
      <path d="M${x - w / 2} ${y + 4} C${x - w / 2} ${top + 6} ${x - w * .2} ${top} ${x} ${top} C${x + w * .3} ${top} ${x + w / 2} ${top + 10} ${x + w / 2} ${y + 4} Z" fill="#7d7f90" stroke="${L}" stroke-width="3"/>
      <path d="M${x - w * .25} ${top + 12} q${w * .12} -6 ${w * .22} 0" stroke="#a5a7b8" stroke-width="4" fill="none" stroke-linecap="round"/></g>`;
    case 'crate': return `<g>
      <rect x="${x - w / 2.4}" y="${top}" width="${w / 1.2}" height="${y - top + 4}" fill="#b07a45" stroke="${L}" stroke-width="3"/>
      <path d="M${x - w / 2.4} ${top} L${x + w / 2.4} ${y + 4} M${x + w / 2.4} ${top} L${x - w / 2.4} ${y + 4}" stroke="#8a5a2c" stroke-width="5"/>
      <rect x="${x - w / 2.4}" y="${top}" width="${w / 1.2}" height="${y - top + 4}" fill="none" stroke="${L}" stroke-width="3"/></g>`;
    case 'log': return `<g>
      <rect x="${x - w / 2}" y="${top + 4}" width="${w}" height="${y - top}" rx="8" fill="#8a5a3b" stroke="${L}" stroke-width="3"/>
      <ellipse cx="${x + w / 2}" cy="${top + 4 + (y - top) / 2}" rx="${(y - top) * .32}" ry="${(y - top) / 2}" fill="#d9a46c" stroke="${L}" stroke-width="3"/>
      <path d="M${x - w * .35} ${top + 14} h${w * .4}" stroke="#6b4428" stroke-width="3" stroke-linecap="round"/></g>`;
    case 'sign': return `<g>
      <rect x="${x - 4}" y="${top}" width="8" height="${y - top + 8}" fill="#7a5232" stroke="${L}" stroke-width="2.5"/>
      <rect x="${x - w / 2}" y="${top - 2}" width="${w}" height="${s * .34}" rx="5" fill="#c99a62" stroke="${L}" stroke-width="3"/>
      <text x="${x}" y="${top + s * .22}" font-size="${s * .2}" text-anchor="middle" fill="${L}" font-family="Trebuchet MS, sans-serif" font-weight="bold">ЗООПАРК</text></g>`;
    default: return '';
  }
}

function backgroundSvg() {
  let stars = '';
  const st = [[20, 20], [80, 50], [140, 18], [200, 44], [250, 14], [40, 90], [120, 80], [220, 100], [340, 30], [170, 120], [330, 110]];
  st.forEach(([x, y], i) => stars += `<circle cx="${x}" cy="${y}" r="${i % 3 ? 1.6 : 2.4}" fill="#fff" class="star" style="animation-delay:${i * .37}s"/>`);
  const tree = (x, flip) => `<g>
    <rect x="${x - 12}" y="90" width="24" height="150" fill="#5a3c28" stroke="${L}" stroke-width="3"/>
    <path d="M${x} 154 L${x + (flip ? -1 : 1) * 46} 154" stroke="#5a3c28" stroke-width="10" stroke-linecap="round"/>
    <path d="M${x} 154 L${x + (flip ? -1 : 1) * 46} 154" stroke="${L}" stroke-width="2" stroke-linecap="round" opacity=".5"/>
    <circle cx="${x}" cy="70" r="52" fill="#24563a" stroke="${L}" stroke-width="3"/>
    <circle cx="${x - 30}" cy="96" r="30" fill="#24563a" stroke="${L}" stroke-width="3"/>
    <circle cx="${x + 30}" cy="96" r="30" fill="#24563a" stroke="${L}" stroke-width="3"/>
    <circle cx="${x}" cy="94" r="34" fill="#24563a"/></g>`;
  let fence = '';
  for (let fx = -6; fx < 370; fx += 22) fence += `<rect x="${fx}" y="186" width="12" height="44" rx="3" fill="#8f6a48" stroke="${L}" stroke-width="2"/>`;
  return `
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#20305e"/><stop offset="1" stop-color="#4a5b94"/></linearGradient>
      <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4f8f4a"/><stop offset="1" stop-color="#3c7540"/></linearGradient>
    </defs>
    <rect width="360" height="240" fill="url(#sky)"/>
    ${stars}
    <circle cx="292" cy="52" r="26" fill="#fff6c8"/><circle cx="302" cy="46" r="24" fill="#3a4a80" opacity=".0"/>
    <circle cx="284" cy="46" r="5" fill="#efe3a8"/><circle cx="300" cy="62" r="4" fill="#efe3a8"/>
    <rect y="200" width="360" height="340" fill="url(#grass)"/>
    <rect x="-6" y="196" width="372" height="8" fill="#8f6a48" stroke="${L}" stroke-width="2"/>
    ${fence}
    ${tree(40, false)}${tree(326, true)}
    <path d="M150 540 C160 470 200 420 186 360 C176 316 190 280 200 240 L232 240 C220 290 214 320 222 360 C238 430 200 480 214 540 Z" fill="#c7b088" opacity=".55"/>
    <ellipse cx="196" cy="300" rx="62" ry="22" fill="#3f78b8" stroke="${L}" stroke-width="3"/>
    <path d="M160 296 q10 -5 20 0 M200 306 q10 -5 20 0" stroke="#9cc8f0" stroke-width="3" fill="none" stroke-linecap="round"/>
    <g fill="#e9d36a"><circle cx="90" cy="380" r="3"/><circle cx="330" cy="300" r="3"/><circle cx="230" cy="470" r="3"/><circle cx="20" cy="330" r="3"/></g>`;
}

const ICON = {
  star: (on = true, s = 34) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}"><path d="M12 2 L14.9 8.6 L22 9.3 L16.6 14 L18.2 21 L12 17.3 L5.8 21 L7.4 14 L2 9.3 L9.1 8.6 Z" fill="${on ? '#ffc83d' : '#4a4766'}" stroke="${L}" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  battery: (k) => {
    const c = k > .5 ? '#5ed47a' : k > .25 ? '#ffc83d' : '#ff5a5a';
    return `<svg viewBox="0 0 54 24" width="54" height="24"><rect x="1.5" y="2" width="46" height="20" rx="5" fill="#2b2945" stroke="#fff" stroke-width="2.5"/>
      <rect x="49" y="8" width="4" height="8" rx="1.5" fill="#fff"/><rect x="5" y="5.5" width="${Math.max(0, 39 * k)}" height="13" rx="3" fill="${c}"/></svg>`;
  },
  sound: (on) => `<svg viewBox="0 0 24 24" width="22" height="22"><path d="M4 9 h4 l5 -4 v14 l-5 -4 h-4 Z" fill="#fff"/>${on
    ? `<path d="M16 8 q3 4 0 8 M18.5 5.5 q5 6.5 0 13" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>`
    : `<path d="M16 9 l6 6 M22 9 l-6 6" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`}</svg>`,
  torch: (s = 120) => `<svg viewBox="0 0 120 120" width="${s}" height="${s}">
    <g transform="rotate(-40 60 80)"><rect x="46" y="62" width="28" height="54" rx="6" fill="#e24d4d" stroke="${L}" stroke-width="3.5"/>
    <path d="M40 40 L80 40 L74 64 L46 64 Z" fill="#ffc83d" stroke="${L}" stroke-width="3.5" stroke-linejoin="round"/>
    <rect x="40" y="34" width="40" height="8" rx="3" fill="#fff6c8" stroke="${L}" stroke-width="3"/>
    <rect x="55" y="78" width="10" height="14" rx="3" fill="#fff" stroke="${L}" stroke-width="2.5"/></g></svg>`,
};
