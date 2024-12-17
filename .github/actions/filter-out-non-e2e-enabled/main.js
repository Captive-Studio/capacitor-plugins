import path from 'node:path';
import { existsSync } from 'node:fs';
import * as core from '@actions/core';
import { root } from '../../../scripts/lib/repo.mjs';
import { execute } from '../../../scripts/lib/cli.mjs';

execute(async () => {
  const paths = JSON.parse(core.getInput('paths', '[]')).map((f) => path.resolve(root, f));
  const filteredPaths = paths.filter((pathString) => existsSync(path.join(pathString, 'e2e-tests')));
  const output = JSON.stringify(filteredPaths.map((pathString) => path.relative(root, pathString)));

  core.info(`E2E enabled paths: ${output}`);
  core.setOutput('e2e-paths', output);
});
