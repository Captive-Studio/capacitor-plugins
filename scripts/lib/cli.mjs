export const execute = (fn) => {
  fn().catch((error) => {
    // eslint-disable-next-line unicorn/prefer-logical-operator-over-ternary
    process.stderr.write(error.stack ? error.stack : String(error));
    process.exit(1);
  });
};
