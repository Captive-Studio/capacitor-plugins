import path from 'node:path';

import { readJSON, writeJSON } from './fs.mjs';
import { ls } from './lerna.mjs';
import * as cp from './subprocess.mjs';

export const setPackageJsonDependencies = async (pathString, packages, key = 'dependencies') => {
  const pkg = await readJSON(pathString);

  for (const [dep, version] of Object.entries(packages)) {
    if (pkg[key][dep]) {
      pkg[key][dep] = version;
    }
  }

  await writeJSON(pathString, pkg);
};

export const setLernaPackageDependencies = async (packages, key = 'dependencies') => {
  const paths = (await ls()).map((p) => p.location);

  for (const pathString of paths) {
    await setPackageJsonDependencies(path.resolve(pathString, 'package.json'), packages, key);
  }
};

export const getLatestVersion = async (pkg, distTag = 'latest') => {
  const { stdout } = await cp.exec(`npm info ${pkg}@${distTag} version`);

  return stdout.trim();
};
