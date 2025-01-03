import path from 'node:path';

import { PROJECTS } from './lib/capacitor.mjs';
import { execute } from './lib/cli.mjs';
import { unlink, readJSON, writeJSON } from './lib/fs.mjs';
import { root } from './lib/repo.mjs';
import { bootstrap, ls } from './lib/lerna.mjs';
import { setPackageJsonDependencies } from './lib/version.mjs';

const readMarkerFile = async (p) => {
  try {
    return await readJSON(p);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return null;
    }

    throw error;
  }
};

execute(async () => {
  const packages = await ls();

  const markerFilePath = resolve(root, '.local');
  const markerFile = await readMarkerFile(markerFilePath);
  const markerFileContents = Object.fromEntries(
    await Promise.all(
      packages.map(async (p) => {
        const pkg = await readJSON(resolve(p.location, 'package.json'));

        return [
          p.name,
          Object.fromEntries(
            Object.entries(pkg.devDependencies).filter(([k]) =>
              PROJECTS.some((project) => k === `@capacitor/${project}`),
            ),
          ),
        ];
      }),
    ),
  );

  await Promise.all(
    packages.map(async (p) =>
      setPackageJsonDependencies(
        path.resolve(p.location, 'package.json'),
        markerFile
          ? markerFile[p.name]
          : Object.fromEntries(
              Object.entries(markerFileContents[p.name]).map(([k]) => [
                k,
                `file:../../capacitor/${k.replace(/^@capacitor\//, '')}`,
              ]),
            ),
        'devDependencies',
      ),
    ),
  );

  await bootstrap();

  await (markerFile ? unlink(markerFilePath) : writeJSON(markerFilePath, markerFileContents));
});
