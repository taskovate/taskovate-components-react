export function hex2rgba(hex: string, alpha = 1) {
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    let colorArr = hex.substring(1).split('');

    if (colorArr.length === 3) {
      colorArr = [
        colorArr[0],
        colorArr[0],
        colorArr[1],
        colorArr[1],
        colorArr[2],
        colorArr[2],
      ];
    }

    const color = `0x${colorArr.join('')}`;

    /* eslint-disable no-bitwise */
    const r = ((color as any) >> 16) & 255;
    const g = ((color as any) >> 8) & 255;
    const b = (color as any) & 255;
    /* eslint-enable no-bitwise */

    return `rgba(${[r, g, b].join(',')}, ${alpha})`;
  }

  throw new Error('Bad Hex');
}

export function hexCombine(colorA: any, colorB: any, amount: number = 0.5) {
  const [rA, gA, bA] = colorA.match(/\w\w/g).map((c: any) => parseInt(c, 16));
  const [rB, gB, bB] = colorB.match(/\w\w/g).map((c: any) => parseInt(c, 16));
  const r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0');
  const g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0');
  const b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0');
  return '#' + r + g + b;
}

export function themedOrNull(appearance: any) {
  const themedAppearances = [
    'unset',
    'primary',
    'special',
    'warning',
    'danger',
    'link',
    'subtle',
    'subtle-link'
  ];

  return themedAppearances.indexOf(appearance) !== -1 ? appearance : null;
}