import { relative, resolve } from 'node:path';
import * as core from '@actions/core';
import { root } from '../../../scripts/lib/repo.mjs';
import { execute } from '../../../scripts/lib/cli.mjs';
import { ls } from '../../../scripts/lib/lerna.mjs';

execute(async () => {
  const files = JSON.parse(core.getInput('files', '[]')).map((f) => resolve(root, f));
  const packages = await ls();
  const changedPackages = packages.filter((pkg) => files.some((f) => f.startsWith(pkg.location)));
  const paths = JSON.stringify(changedPackages.map((pkg) => relative(root, pkg.location)));

  core.info(`Changed package paths: ${paths}`);
  core.setOutput('paths', paths);
});
