require = require('esm')(module);

const { relative, resolve, join } = require('node:path');
const { existsSync } = require('node:fs');
const core = require('@actions/core');

const { root } = require('../../../scripts/lib/repo.mjs');
const { execute } = require('../../../scripts/lib/cli.mjs');

execute(async () => {
  const paths = JSON.parse(core.getInput('paths', '[]')).map((f) => resolve(root, f));
  const filteredPaths = paths.filter((path) => existsSync(join(path, 'e2e-tests')));
  const output = JSON.stringify(filteredPaths.map((path) => relative(root, path)));

  core.info(`E2E enabled paths: ${output}`);
  core.setOutput('e2e-paths', output);
});
