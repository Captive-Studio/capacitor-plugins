import * as fs from 'node:fs';
import * as util from 'node:util';

export const readFile = util.promisify(fs.readFile);
export const readJSON = async (p) => JSON.parse(await readFile(p));
export const writeFile = util.promisify(fs.writeFile);
export const writeJSON = async (p, contents, space = 2) =>
  writeFile(p, `${JSON.stringify(contents, undefined, space)}\n`);
export const access = util.promisify(fs.access);
export const unlink = util.promisify(fs.unlink);
