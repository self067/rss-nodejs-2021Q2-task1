const minimist = require('./minimist.js');
const parseOptions = require('./parse-options.js');
const { help } =  require('./help.js');
const getStreamIn = require('./get-stream-in.js');
const getStreamOut = require('./get-stream-out.js');
const caesarShift = require('./caesar-shift.js');
const { log, logerr } = require('./log.js');

const argv = minimist(process.argv);
const args = parseOptions(argv);

if (!args) {
  help();
  process.exit(109);
}

if ( args.input && args.output && args.input === args.output) {
  logerr('INPUT and OUTPUT files are the some, choose different files!');
  help();
  process.exit(107);
}

const streamIn = getStreamIn(args.input);
if (!streamIn) {
  help();
  process.exit();
}

const streamOut = getStreamOut(args.output);
if (!streamOut) {
  help();
  process.exit(112);
}

const stream  = require('stream');
const myTransform = new stream.Transform({
  transform(chunk, encoding, cb) {
    const shiftedData = caesarShift(chunk, args.action === 'encode' ? args.shift : -args.shift);
    this.push(shiftedData);
    cb();
  }
});

stream.pipeline(
  streamIn,
  myTransform,
  streamOut,
  err => {
    if (err) {
      logerr(err.message);
      process.exit(114);
    }  else {
      // log('Transform succesfully ended.');
      process.exit(0);
    }
  }
);


