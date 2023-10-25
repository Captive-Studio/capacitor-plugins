import { require } from './cjs.mjs';

const prompts = require('prompts');

export default prompts;

export const confirm = async (message) =>
  new Promise((resolve) => {
    // eslint-disable-next-line promise/catch-or-return
    prompts(
      [
        {
          type: 'confirm',
          name: 'confirm',
          message,
          initial: true,
        },
      ],
      { onCancel: () => resolve(false) }
    ).then((result) => resolve(result.confirm));
  });

export const confirmOrExit = async (message) => {
  const result = await confirm(message);

  if (!result) {
    process.exit(1);
  }
};
