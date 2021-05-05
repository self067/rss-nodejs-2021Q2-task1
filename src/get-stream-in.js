const fs = require('fs');

module.exports = (input) => {

let streamIn = null;
if (input) {
  try {
    fs.accessSync(input, fs.constants.R_OK);
  }
  catch {
    return null;
  }
  streamIn = fs.createReadStream(input, {flags:'r'});
}
else
  streamIn = process.stdin;

  return streamIn;
}
