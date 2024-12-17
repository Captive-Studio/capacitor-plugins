import url from 'node:url';
import path from 'node:path';
import { pipe } from './fn.mjs';

export const root = pipe(url.fileURLToPath, ...Array(3).fill(path.dirname))(import.meta.url);
