import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

import { pipe } from './fn.mjs';

export const root = pipe(fileURLToPath, ...Array(3).fill(dirname))(import.meta.url);
