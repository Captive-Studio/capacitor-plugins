import { relative, resolve, join } from 'node:path';
import * as core from '@actions/core';
import { existsSync } from 'node:fs';
import { root } from '../../../scripts/lib/repo.mjs';
import { execute } from '../../../scripts/lib/cli.mjs';

execute(async () => {
  const paths = JSON.parse(core.getInput('paths', '[]')).map((f) => resolve(root, f));
  const filteredPaths = paths.filter((path) => existsSync(join(path, 'e2e-tests')));
  const output = JSON.stringify(filteredPaths.map((path) => relative(root, path)));

  core.info(`E2E enabled paths: ${output}`);
  core.setOutput('e2e-paths', output);
});
