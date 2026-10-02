/**
 * Code 128-B encoder for printable ASCII employee IDs.
 *
 * The module-width patterns follow the Code 128 standard. The renderer stays
 * local to the app: no external barcode service or font is required.
 */

const PATTERNS = [
  '212222','222122','222221','121223','121322','131222','122213','122312','132212',
  '221213','221312','231212','112232','122132','122231','113222','123122','123221',
  '223211','221132','221231','213212','223112','312131','311222','321122','321221','312212','322112',
  '322211','212123','212321','232121','111323','131123','131321','112313','132113','132311','211313',
  '231113','231311','112133','112331','132131','113123','113321','133121','313121','211331','231131',
  '213113','213311','213131','311123','311321','331121','312113','312311','332111','314111','221411',
  '431111','111224','111422','121124','121421','141122','141221','112214','112412','122114','122411',
  '142112','142211','241211','221114','413111','241112','134111','111242','121142','121241','114212',
  '124112','124211','411212','421112','421211','212141','214121','412121','111143','111341','131141',
  '114113','114311','411113','411311','113141','114131','311141','411131','211412','211214','211232',
  '2331112',
] as const;

function encodeCode128B(value: string) {
  const text = String(value || 'EMPLOYEE');
  if ([...text].some(char => char.charCodeAt(0) < 32 || char.charCodeAt(0) > 126)) {
    return encodeCode128B('EMPLOYEE');
  }

  const codeValues = [104]; // START B
  let checksum = 104;

  for (let i = 0; i < text.length; i += 1) {
    const code = text.charCodeAt(i) - 32;
    codeValues.push(code);
    checksum += code * (i + 1);
  }

  codeValues.push(checksum % 103);
  codeValues.push(106); // STOP
  return codeValues.map(code => PATTERNS[code]).join('');
}

export function code128SvgMarkup(value: string, width = 500, height = 68) {
  const pattern = encodeCode128B(value);
  const quiet = 10;
  const modules = [...pattern].reduce((sum, char) => sum + Number(char), 0) + quiet * 2;
  const scale = Math.max(1, width / modules);
  const actualWidth = modules * scale;
  let x = quiet * scale;
  let bar = true;
  const rects: string[] = [];

  for (const char of pattern) {
    const moduleWidth = Number(char) * scale;
    if (bar) {
      rects.push(`<rect x="${x.toFixed(3)}" y="0" width="${moduleWidth.toFixed(3)}" height="${height}"/>`);
    }
    x += moduleWidth;
    bar = !bar;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${actualWidth} ${height}" preserveAspectRatio="none" shape-rendering="crispEdges" role="img" aria-label="Code 128"><rect width="100%" height="100%" fill="#ffffff"/>${rects.join('')}</svg>`;
}
