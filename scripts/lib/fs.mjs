import * as fs from 'node:fs';
import { promisify } from 'node:util';

export const readFile = promisify(fs.readFile);
export const readJSON = async (p) => JSON.parse(await readFile(p));
export const writeFile = promisify(fs.writeFile);
export const writeJSON = async (p, contents, space = 2) =>
  writeFile(p, `${JSON.stringify(contents, undefined, space)}\n`);
export const access = promisify(fs.access);
export const unlink = promisify(fs.unlink);
