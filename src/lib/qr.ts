/**
 * Small, self-contained QR encoder adapted from lifthrasiir/qr.js.
 * Source: https://github.com/lifthrasiir/qr.js
 * License: CC0 / public domain.
 *
 * This file intentionally exposes only the matrix generator needed by the
 * Project by Tirta ID Card module. The QR itself is rendered by our SVG code,
 * so there is no external network dependency and no employee data is sent to
 * a third-party QR service.
 */

type EccName = 'L' | 'M' | 'Q' | 'H';

const MODE_TERMINATOR = 0;
const MODE_OCTET = 4;
const ECCLEVEL_L = 1;
const ECCLEVEL_M = 0;
const ECCLEVEL_Q = 3;
const ECCLEVEL_H = 2;

// QR versions 1-10 are more than enough for the short verification URLs used
// by ID cards. Each row is: ECC codeword degree, block count, align positions.
const VERSIONS: Array<unknown> = [
  null,
  [[10, 7, 17, 13], [1, 1, 1, 1], []],
  [[16, 10, 28, 22], [1, 1, 1, 1], [4, 16]],
  [[26, 15, 22, 18], [1, 1, 2, 2], [4, 20]],
  [[18, 20, 16, 26], [2, 1, 4, 2], [4, 24]],
  [[24, 26, 22, 18], [2, 1, 4, 4], [4, 28]],
  [[16, 18, 28, 24], [4, 2, 4, 4], [4, 32]],
  [[18, 20, 26, 18], [4, 2, 5, 6], [4, 20, 36]],
  [[22, 24, 26, 22], [4, 2, 6, 6], [4, 22, 40]],
  [[22, 30, 24, 20], [5, 2, 8, 8], [4, 24, 44]],
  [[26, 18, 28, 24], [5, 4, 8, 8], [4, 26, 48]],
];

const MODE_ALPHANUMERIC = 2;
const MODE_NUMERIC = 1;
const ALPHANUMERIC_MAP: Record<string, number> = {};
for (let i = 0; i < 45; i += 1) {
  ALPHANUMERIC_MAP['0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'.charAt(i)] = i;
}

const MASKFUNCS: Array<(i: number, j: number) => boolean> = [
  (i, j) => (i + j) % 2 === 0,
  (i) => i % 2 === 0,
  (_i, j) => j % 3 === 0,
  (i, j) => (i + j) % 3 === 0,
  (i, j) => (((i / 2) | 0) + ((j / 3) | 0)) % 2 === 0,
  (i, j) => ((i * j) % 2) + ((i * j) % 3) === 0,
  (i, j) => (((i * j) % 2) + ((i * j) % 3)) % 2 === 0,
  (i, j) => (((i + j) % 2) + ((i * j) % 3)) % 2 === 0,
];

const GF256_MAP: number[] = [];
const GF256_INVMAP: number[] = [-1];
for (let i = 0, v = 1; i < 255; ++i) {
  GF256_MAP.push(v);
  GF256_INVMAP[v] = i;
  v = (v * 2) ^ (v >= 128 ? 0x11d : 0);
}

const GF256_GENPOLY: number[][] = [[]];
for (let i = 0; i < 30; ++i) {
  const prevpoly = GF256_GENPOLY[i];
  const poly: number[] = [];
  for (let j = 0; j <= i; ++j) {
    const a = j < i ? GF256_MAP[prevpoly[j]] : 0;
    const b = GF256_MAP[(i + (prevpoly[j - 1] || 0)) % 255];
    poly.push(GF256_INVMAP[a ^ b]);
  }
  GF256_GENPOLY.push(poly);
}

function eccIndex(name: EccName): number {
  return ({ L: ECCLEVEL_L, M: ECCLEVEL_M, Q: ECCLEVEL_Q, H: ECCLEVEL_H }[name]);
}

function getSizeByVersion(ver: number) {
  return 4 * ver + 17;
}

function needsVersionInfo(ver: number) {
  return ver > 6;
}

function nFullBits(ver: number) {
  const v = VERSIONS[ver] as [number[], number[], number[]];
  let nbits = 16 * ver * ver + 128 * ver + 64;
  if (needsVersionInfo(ver)) nbits -= 36;
  if (v[2].length) nbits -= 25 * v[2].length * v[2].length - 10 * v[2].length - 55;
  return nbits;
}

function nDataBits(ver: number, ecclevel: number) {
  const nbits = nFullBits(ver) & ~7;
  const v = VERSIONS[ver] as [number[], number[], number[]];
  return nbits - 8 * v[0][ecclevel] * v[1][ecclevel];
}

function nDataLenBits(ver: number, mode: number) {
  switch (mode) {
    case MODE_NUMERIC: return ver < 10 ? 10 : ver < 27 ? 12 : 14;
    case MODE_ALPHANUMERIC: return ver < 10 ? 9 : ver < 27 ? 11 : 13;
    case MODE_OCTET: return ver < 10 ? 8 : 16;
    default: return 0;
  }
}

function getMaxDataLen(ver: number, mode: number, ecclevel: number) {
  const nbits = nDataBits(ver, ecclevel) - 4 - nDataLenBits(ver, mode);
  return mode === MODE_OCTET ? (nbits / 8) | 0 : 0;
}

function validateOctet(data: string | number[]) {
  if (Array.isArray(data)) return data;
  const bytes: number[] = [];
  for (let i = 0; i < data.length; ++i) {
    const ch = data.charCodeAt(i);
    if (ch < 0x80) bytes.push(ch);
    else if (ch < 0x800) bytes.push(0xc0 | (ch >> 6), 0x80 | (ch & 0x3f));
    else if (ch < 0x10000) bytes.push(0xe0 | (ch >> 12), 0x80 | ((ch >> 6) & 0x3f), 0x80 | (ch & 0x3f));
    else bytes.push(0xf0 | (ch >> 18), 0x80 | ((ch >> 12) & 0x3f), 0x80 | ((ch >> 6) & 0x3f), 0x80 | (ch & 0x3f));
  }
  return bytes;
}

function encode(ver: number, data: number[], maxBufferLength: number) {
  const buf: number[] = [];
  let bits = 0;
  let remaining = 8;
  const dataLen = data.length;

  const pack = (x: number, n: number) => {
    if (n >= remaining) {
      n -= remaining;
      buf.push(bits | (x >> n));
      while (n >= 8) {
        n -= 8;
        buf.push((x >> n) & 255);
      }
      bits = 0;
      remaining = 8;
    }
    if (n > 0) {
      bits |= (x & ((1 << n) - 1)) << (remaining -= n);
    }
  };

  pack(MODE_OCTET, 4);
  pack(dataLen, nDataLenBits(ver, MODE_OCTET));
  for (let i = 0; i < dataLen; ++i) pack(data[i], 8);
  pack(MODE_TERMINATOR, 4);
  if (remaining < 8) buf.push(bits);
  while (buf.length + 1 < maxBufferLength) buf.push(0xec, 0x11);
  if (buf.length < maxBufferLength) buf.push(0xec);
  return buf;
}

function calculateEcc(poly: number[], genpoly: number[]) {
  const modulus = poly.slice(0);
  const polyLen = poly.length;
  const genLen = genpoly.length;
  for (let i = 0; i < genLen; ++i) modulus.push(0);
  for (let i = 0; i < polyLen;) {
    const quotient = GF256_INVMAP[modulus[i++]];
    if (quotient >= 0) {
      for (let j = 0; j < genLen; ++j) {
        modulus[i + j] ^= GF256_MAP[(quotient + genpoly[j]) % 255];
      }
    }
  }
  return modulus.slice(polyLen);
}

function augmentEccs(poly: number[], nBlocks: number, genpoly: number[]) {
  const subSizes: number[] = [];
  const subSize = (poly.length / nBlocks) | 0;
  let subSize0 = 0;
  const pivot = nBlocks - (poly.length % nBlocks);
  for (let i = 0; i < pivot; ++i) {
    subSizes.push(subSize0);
    subSize0 += subSize;
  }
  for (let i = pivot; i < nBlocks; ++i) {
    subSizes.push(subSize0);
    subSize0 += subSize + 1;
  }
  subSizes.push(subSize0);

  const eccs: number[][] = [];
  for (let i = 0; i < nBlocks; ++i) {
    eccs.push(calculateEcc(poly.slice(subSizes[i], subSizes[i + 1]), genpoly));
  }

  const result: number[] = [];
  const itemsPerBlock = (poly.length / nBlocks) | 0;
  for (let i = 0; i < itemsPerBlock; ++i) {
    for (let j = 0; j < nBlocks; ++j) result.push(poly[subSizes[j] + i]);
  }
  for (let j = pivot; j < nBlocks; ++j) result.push(poly[subSizes[j + 1] - 1]);
  for (let i = 0; i < genpoly.length; ++i) {
    for (let j = 0; j < nBlocks; ++j) result.push(eccs[j][i]);
  }
  return result;
}

function augmentBch(poly: number, p: number, genpoly: number, q: number) {
  let modulus = poly << q;
  for (let i = p - 1; i >= 0; --i) {
    if ((modulus >> (q + i)) & 1) modulus ^= genpoly << i;
  }
  return (poly << q) | modulus;
}

function makeBaseMatrix(ver: number) {
  const v = VERSIONS[ver] as [number[], number[], number[]];
  const n = getSizeByVersion(ver);
  const matrix: (number | undefined)[][] = [];
  const reserved: number[][] = [];
  for (let i = 0; i < n; ++i) {
    matrix.push([]);
    reserved.push([]);
  }

  const blit = (y: number, x: number, h: number, w: number, bits: number[]) => {
    for (let i = 0; i < h; ++i) {
      for (let j = 0; j < w; ++j) {
        matrix[y + i][x + j] = (bits[i] >> j) & 1;
        reserved[y + i][x + j] = 1;
      }
    }
  };

  blit(0, 0, 9, 9, [0x7f, 0x41, 0x5d, 0x5d, 0x5d, 0x41, 0x17f, 0x00, 0x40]);
  blit(n - 8, 0, 8, 9, [0x100, 0x7f, 0x41, 0x5d, 0x5d, 0x5d, 0x41, 0x7f]);
  blit(0, n - 8, 9, 8, [0xfe, 0x82, 0xba, 0xba, 0xba, 0x82, 0xfe, 0x00, 0x00]);

  for (let i = 9; i < n - 8; ++i) {
    matrix[6][i] = matrix[i][6] = (~i) & 1;
    reserved[6][i] = reserved[i][6] = 1;
  }

  const aligns = v[2];
  const m = aligns.length;
  for (let i = 0; i < m; ++i) {
    const minj = i === 0 || i === m - 1 ? 1 : 0;
    const maxj = i === 0 ? m - 1 : m;
    for (let j = minj; j < maxj; ++j) {
      blit(aligns[i], aligns[j], 5, 5, [0x1f, 0x11, 0x15, 0x11, 0x1f]);
    }
  }

  if (needsVersionInfo(ver)) {
    const code = augmentBch(ver, 6, 0x1f25, 12);
    let k = 0;
    for (let i = 0; i < 6; ++i) {
      for (let j = 0; j < 3; ++j) {
        matrix[i][n - 11 + j] = matrix[n - 11 + j][i] = (code >> k++) & 1;
        reserved[i][n - 11 + j] = reserved[n - 11 + j][i] = 1;
      }
    }
  }

  return { matrix, reserved };
}

function putData(matrix: (number | undefined)[][], reserved: number[][], buf: number[]) {
  const n = matrix.length;
  let k = 0;
  let dir = -1;
  for (let i = n - 1; i >= 0; i -= 2) {
    if (i === 6) --i;
    let jj = dir < 0 ? n - 1 : 0;
    for (let j = 0; j < n; ++j) {
      for (let ii = i; ii > i - 2; --ii) {
        if (!reserved[jj][ii]) {
          matrix[jj][ii] = (buf[k >> 3] >> (~k & 7)) & 1;
          ++k;
        }
      }
      jj += dir;
    }
    dir = -dir;
  }
  return matrix;
}

function maskData(matrix: (number | undefined)[][], reserved: number[][], mask: number) {
  const maskFunc = MASKFUNCS[mask];
  const n = matrix.length;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (!reserved[i][j]) matrix[i][j] = Number(Boolean(matrix[i][j]) !== maskFunc(i, j));
    }
  }
  return matrix;
}

function putFormatInfo(matrix: (number | undefined)[][], ecclevel: number, mask: number) {
  const n = matrix.length;
  const code = augmentBch((ecclevel << 3) | mask, 5, 0x537, 10) ^ 0x5412;
  const rows = [0, 1, 2, 3, 4, 5, 7, 8, n - 7, n - 6, n - 5, n - 4, n - 3, n - 2, n - 1];
  const cols = [n - 1, n - 2, n - 3, n - 4, n - 5, n - 6, n - 7, n - 8, 7, 5, 4, 3, 2, 1, 0];
  for (let i = 0; i < 15; ++i) {
    matrix[rows[i]][8] = matrix[8][cols[i]] = (code >> i) & 1;
  }
  return matrix;
}

function evaluateGroup(groups: number[]) {
  let score = 0;
  for (let i = 0; i < groups.length; ++i) {
    if (groups[i] >= 5) score += 3 + (groups[i] - 5);
  }
  for (let i = 5; i < groups.length; i += 2) {
    const p = groups[i];
    if (groups[i - 1] === p && groups[i - 2] === 3 * p && groups[i - 3] === p && groups[i - 4] === p && (groups[i - 5] >= 4 * p || groups[i + 1] >= 4 * p)) {
      score += 40;
    }
  }
  return score;
}

function evaluateMatrix(matrix: (number | undefined)[][]) {
  const n = matrix.length;
  let score = 0;
  let nblacks = 0;
  for (let i = 0; i < n; ++i) {
    const row = matrix[i].map(Boolean);
    let groups: number[] = [0];
    for (let j = 0; j < n;) {
      let k = 0;
      while (j < n && row[j]) { ++k; ++j; }
      groups.push(k);
      k = 0;
      while (j < n && !row[j]) { ++k; ++j; }
      groups.push(k);
    }
    score += evaluateGroup(groups);

    groups = [0];
    for (let j = 0; j < n;) {
      let k = 0;
      while (j < n && Boolean(matrix[j][i])) { ++k; ++j; }
      groups.push(k);
      k = 0;
      while (j < n && !Boolean(matrix[j][i])) { ++k; ++j; }
      groups.push(k);
    }
    score += evaluateGroup(groups);

    const nextRow = matrix[i + 1] || [];
    nblacks += row[0] ? 1 : 0;
    for (let j = 1; j < n; ++j) {
      const p = row[j];
      nblacks += p ? 1 : 0;
      if (row[j - 1] === p && Boolean(nextRow[j]) === p && Boolean(nextRow[j - 1]) === p) score += 3;
    }
  }
  score += 10 * ((Math.abs(nblacks / n / n - 0.5) / 0.05) | 0);
  return score;
}

function generate(data: number[], ver: number, ecclevel: number, mask: number) {
  const v = VERSIONS[ver] as [number[], number[], number[]];
  let buf = encode(ver, data, nDataBits(ver, ecclevel) >> 3);
  buf = augmentEccs(buf, v[1][ecclevel], GF256_GENPOLY[v[0][ecclevel]]);
  const result = makeBaseMatrix(ver);
  const matrix = result.matrix;
  const reserved = result.reserved;
  putData(matrix, reserved, buf);

  if (mask < 0) {
    maskData(matrix, reserved, 0);
    putFormatInfo(matrix, ecclevel, 0);
    let bestMask = 0;
    let bestScore = evaluateMatrix(matrix);
    maskData(matrix, reserved, 0);
    for (let candidate = 1; candidate < 8; ++candidate) {
      maskData(matrix, reserved, candidate);
      putFormatInfo(matrix, ecclevel, candidate);
      const score = evaluateMatrix(matrix);
      if (bestScore > score) {
        bestScore = score;
        bestMask = candidate;
      }
      maskData(matrix, reserved, candidate);
    }
    mask = bestMask;
  }

  maskData(matrix, reserved, mask);
  putFormatInfo(matrix, ecclevel, mask);
  return matrix.map(row => row.map(Boolean));
}

export function generateQrMatrix(
  text: string,
  options: { version?: number; ecclevel?: EccName } = {},
): boolean[][] {
  const eccName = (options.ecclevel || 'M').toUpperCase() as EccName;
  const ecclevel = eccIndex(eccName);
  const data = validateOctet(text);
  const mode = MODE_OCTET;

  let ver = options.version || -1;
  if (ver < 0) {
    for (ver = 1; ver <= 10; ++ver) {
      if (data.length <= getMaxDataLen(ver, mode, ecclevel)) break;
    }
    if (ver > 10) throw new Error('Verification URL terlalu panjang untuk QR ID Card.');
  }
  if (ver < 1 || ver > 10) throw new Error('QR version tidak didukung.');
  if (data.length > getMaxDataLen(ver, mode, ecclevel)) throw new Error('Data QR terlalu panjang.');

  return generate(data, ver, ecclevel, -1);
}

export function qrMatrixToSvg(text: string, options: {
  size?: number;
  margin?: number;
  foreground?: string;
  background?: string;
  ecclevel?: EccName;
} = {}) {
  const matrix = generateQrMatrix(text, { ecclevel: options.ecclevel || 'M' });
  const margin = Math.max(4, options.margin ?? 4);
  const size = options.size ?? 150;
  const foreground = options.foreground || '#000000';
  const background = options.background || '#ffffff';
  const n = matrix.length;
  const unit = 1;
  const viewSize = n + margin * 2;
  const path: string[] = [];

  for (let y = 0; y < n; ++y) {
    for (let x = 0; x < n; ++x) {
      if (matrix[y][x]) path.push(`M${x + margin} ${y + margin}h${unit}v${unit}h-${unit}z`);
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="${size}" height="${size}" viewBox="0 0 ${viewSize} ${viewSize}" shape-rendering="crispEdges" role="img" aria-label="QR Code"><rect width="${viewSize}" height="${viewSize}" fill="${background}"/><path d="${path.join('')}" fill="${foreground}"/></svg>`;
}
