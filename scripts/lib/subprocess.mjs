import * as cp from 'node:child_process';
import * as util from 'node:util';

export const exec = util.promisify(cp.exec);
export const { spawn } = cp;
export const run = (cmd, args, options) => wait(spawn(cmd, args, options));
export const wait = async (p) =>
  new Promise((resolve, reject) => {
    p.on('error', reject);

    p.on('close', (code, signal) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`bad subprocess exit (code=${code}, signal=${signal})`));
      }
    });
  });
