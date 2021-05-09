const { log } = require('./log.js');
exports.help = () => {
  const h = `
  Caesar cipher CLI tool

  CLI tool accept 4 options (short alias and full name):
  -s, --shift: a shift
  -i, --input: an input file
  -o, --output: an output file
  -a, --action: an action encode/decode`;
  log(h);
};
