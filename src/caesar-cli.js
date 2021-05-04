const minimist = require('./minimist.js');
const parseOptions = require('./parse-options.js');
const { help } =  require('./help.js');

const argv = minimist(process.argv);
const args = parseOptions(argv);
if (!args) {
  help();
  process.exit(1009);
}

console.log(argv, args );