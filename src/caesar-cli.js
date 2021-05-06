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
  process.exit(1009);
}


const streamIn = getStreamIn(args.input);
if (!streamIn) {
  logerr('Can\'t access INPUT file. File not exist or you don\'t have rights');
  help();
  process.exit(1011);
}

const streamOut = getStreamOut(args.output);
if (!streamOut) {
  logerr('Can\'t access OUTPUT file.');
  help();
  process.exit(1012);
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
      process.exit(1014);
    } else log('Transform succesfully ended.');
  }
);

