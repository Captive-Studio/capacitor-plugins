import { root } from './repo.mjs';
import * as cp from './subprocess.mjs';

const stdio = 'inherit';
const cwd = root;

const execLerna = async (command) => cp.exec(`npx lerna ${command}`, { cwd });
const runLerna = async (args = []) => cp.run('npx', ['lerna', ...args], { cwd, stdio });

export const ls = async () => JSON.parse((await execLerna('ls --json')).stdout);
export const exec = async (args = []) => runLerna(['exec', ...args]);
export const bootstrap = async (args = []) => runLerna(['bootstrap', ...args]);
